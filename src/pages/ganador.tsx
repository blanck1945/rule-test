import React, { useEffect } from "react";
import { PageProps } from "gatsby";
import EndScreenWrapper from "@/components/generics/endScreenWrapper";
import emailjs from "emailjs-com";
import { VirtualLoger } from "@/utils/logger";
import { LogEvent, LogMessage } from "@/types/logs";
import { useState } from "react";

const addDash = (value: any) => {
  const letterArr = value.split("");
  const newArr = letterArr.map((el) => {
    return el.replace(" ", "_");
  });
  return newArr.join("");
};

const Ganador: React.FC<PageProps> = () => {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    if (user === "") {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUser(userData);
    } else {
    }
  }, []);

  useEffect(() => {
    if (user) {
      sendEmailToUser();
    }
  }, [user]);

  const sendEmailToUser = () => {
    const templateParams = {
      comercio: user.prize.comercio,
      premio: user.prize.comercio,
      send_to: user.player.email.value,
      subject: "Premios tap",
      to_name: "auntap",
      message: `Usa este link para canjear tu premio ${
        process.env.PAGE_URL
      }?${addDash(user.player.email.value)}&${addDash(
        user.prize.comercio
      )}&${addDash(user.prize.premio)}`,
    };

    if (user.email.sendEmail) {
      emailjs
        .send(
          process.env.EMAIL_JS_SERVICE_ID,
          process.env.EMAIL_JS_TEMPLATE_ID,
          templateParams,
          process.env.EMAIL_JS_USER_ID
        )
        .then(
          (response) => {
            //VirtualLoger(LogEvent.emailSend, LogMessage.emailSendMsg, response);
            localStorage.setItem(
              "userData",
              JSON.stringify({
                ...user,
                email: {
                  status: 2,
                  sendEmail: false,
                },
              })
            );
          },
          (error) => {
            VirtualLoger(LogEvent.emailFail, LogMessage.emailFailMsg, error);
          }
        );
    } else return;
  };

  return <EndScreenWrapper />;
};

export default Ganador;
