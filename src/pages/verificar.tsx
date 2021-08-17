import React from "react";
import { PageProps, Link } from "gatsby";

import Header from "@/components/header";
import Layout from "@/components/layout";

const Verificar: React.FC<PageProps> = () => (
  <Layout isProtected>
    <Header />
    <main>
      <p>2 - Verificar Datos</p>
      <Link to="/success">Prox pag</Link>
    </main>
  </Layout>
);

export default Verificar;
