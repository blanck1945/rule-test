import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Types
type SEOProps = {
  description?: string;
  lang?: string;
  meta?: Meta;
};

type PropertyMetaObj = {
  property: string;
  content: string;
};

type NameMetaObj = {
  name: string;
  content: string;
};

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>;

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      apple: string;
    };
  };
};

// Queries
const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        apple
      }
    }
  }
`;

const SEO: React.FC<SEOProps> = ({
  description = ``,
  lang = `en`,
  meta = [],
}) => {
  const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery);

  const metaDescription = description || site.siteMetadata.description;
  const appleLink = site.siteMetadata?.apple;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      titleTemplate={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `apple-itunes-app`,
          content: appleLink,
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
