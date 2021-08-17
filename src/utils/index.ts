import { navigate } from "gatsby";
import { base } from "./base";

const baseUrl = process.env.GATSBY_API_URL;

/**
 * Const declaration
 */
const phoneRegex = /^(?:11|[2368]\d)\d{8}$/;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const viewsArray: string[] = ["", "play", "ganador"];

const inputChangeHandler =
  (setter: (input: any) => void, validator?: (input: StrNum) => boolean) =>
  (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newData: StrNum = event.currentTarget.value;

    setter((prevState: { value: StrNum; valid?: boolean }) => ({
      ...prevState,
      value: newData,
      ...(validator && { valid: validator(newData) }),
    }));
  };

/**
 * Returns next possible view in navigation order
 *
 * @param {string} [curr] - Current View (Optional - defaults to browser current location)
 * @throws {Error} - Error handling
 * @return {string} Next view
 */
const getNextView = (
  curr: string = window.location?.pathname?.substring(1)
): string => {
  try {
    const index = viewsArray.indexOf(curr);
    if (index >= 0 && index < viewsArray.length - 1) {
      return `/${viewsArray[index + 1]}`;
    }
    throw new Error("Vista no valida");
  } catch (err) {
    return `/${viewsArray[0]}`;
  }
};

/**
 * Abstraction of getNextView
 *
 * @param [options] - gatsby navigate options
 * @param {any[]} rest - getNextView params
 */
const navigateToNextView = (
  options?: { state?: any; replace?: boolean },
  ...rest: any[]
): void => {
  navigate(getNextView(...rest), options);
};

/**
 * Validation abstraction object.
 * options: medidor | phone | email
 */
const isValid = {
  medidor: (value: StrNum): boolean => value.toString().length === 11,

  phone: (value: StrNum): boolean =>
    phoneRegex.test(value.toString()) && value.toString().length === 10,

  email: (value: string): boolean => emailRegex.test(value),
};

const postOptions = (): ReqOptions => ({
  method: "POST",
  headers: { "Content-Type": "application/json" },
});

const getOptions = (): { method: "GET" } => ({
  method: "GET",
});

/**
 * Fetch wrapper abstraction
 *
 * @async
 * @param fetchUrl - Partial route to ping
 * @param [options] - Propagated to default js fetch options
 * @throws - If status is not 200
 * @return - fetch res
 */
const handleFetch = async (fetchUrl: string, options?: any): Promise<any> => {
  try {
    await base("usuario").create(
      [
        {
          fields: {
            email: options.body.email.value,
            phone: options.body.phone.value,
          },
        },
      ],
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    //const bodyRes = await res.json();
    return true;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

/**
 * Creates nice date string
 *
 * @param rawDate - Parseable date
 * @return Nice parsed date string
 */
const parseDate = (rawDate: string): string => {
  const d = new Date(rawDate);
  return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} a las ${d.getHours()}:${d.getMinutes()}hs`;
};

export {
  inputChangeHandler,
  getNextView,
  navigateToNextView,
  isValid,
  getOptions,
  postOptions,
  handleFetch,
  parseDate,
};
