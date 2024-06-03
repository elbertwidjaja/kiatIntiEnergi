import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import WhatsappIcon from "./WhatsappIcon";

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <WhatsappIcon />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
