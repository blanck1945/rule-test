import { LogEvent, LogMessage } from "@/types/logs";
import { base } from "./base";
import { VirtualLoger } from "./logger";
import uniqid from "uniqid";

export const addUser = async (email: any, phone: any, setOptional: any) => {
  const id = uniqid();
  await base("usuario").create(
    [
      {
        fields: {
          email: email.value,
          phone: phone.value,
        },
      },
    ],
    async (err, records) => {
      if (err) {
        VirtualLoger(LogEvent.userCreatedFail, LogMessage.userCreatedFailMsg);
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({
          player: {
            email,
            phone,
            user_id: id,
          },
        })
      );
      //await VirtualLoger(LogEvent.userCreated, LogMessage.userCreatedMsg);
      setOptional("play");
    }
  );
  //const bodyRes = await res.json();
  return true;
};

export const getUserById = async (id: string, setOptional: any) => {
  // <set up your connection>

  console.warn(id);

  /* retrieve records from the base matching a name */
  base("usuario")
    .select({
      filterByFormula: `{user_id} = "${id}"`,
    })
    .eachPage(
      function page(records, fetchNextPage) {
        setOptional(records[0]);
        records.forEach(function (record) {
          console.log("Retrieved", record.get("ID"));
          console.dir(record); // show full record JS object
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
