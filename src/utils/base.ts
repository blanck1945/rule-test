import Airtable from "airtable";

export const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API,
}).base(process.env.GATSBY_AIRTABLE_USER_ID);
