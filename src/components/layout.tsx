import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { navigate } from "gatsby";
import SEO from "@/components/seo";

const GlobalStyle = createGlobalStyle`
* {
    font-family: Comfortaa;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Layout: React.FC<{ isProtected?: boolean }> = ({
  children,
  isProtected = false,
}) => {
  useEffect(() => {
    if (isProtected) {
      const userData = localStorage.getItem("userData");
      if (!userData) {
        navigate("/");
      }
    }
  }, []);
  return (
    <>
      <SEO />
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
