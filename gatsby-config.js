module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyfyWSMuZYjkKfTN`, // may instead specify via env, see below
        //concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appJ5JbyNdfmC4pxC`,
            tableName: `premios`,
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Tap | RuleTap",
    description: "Jugá a la Ruletap y ganá premios en comercios",
    apple: "app-id=1504951295",
  },
};
