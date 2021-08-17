import Airtable from "airtable";

export const base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  process.env.AIRTABLE_USER_ID
);
