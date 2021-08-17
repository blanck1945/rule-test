import { base } from "./base";

export const VirtualLoger = (event: string, log: string, optional?: any) => {
  const today = new Date();
  base("logs").create(
    [
      {
        fields: {
          event,
          log,
          date:
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate() +
            " " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds(),
        },
      },
    ],
    async (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};
