import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
