import React from "react";
import Footer from "./Footer";
import InfoCard from "./InfoCard";
import Button from "./Button";
import Header from "./Header";
import BannerHome from "./BannerHome";

function testing() {
  return (
    <>
      <Footer />
      <br />
      <InfoCard name="Solar Panel Jaya" />
      <br />
      <Button title="hi there" size="s" />
      <br />
      <Button title="hi there" size="m" />
      <br />
      <Button title="hi there" size="l" />
      <br />
      <br />
      <Header />
      <br />
      <br />
      <BannerHome />
    </>
  );
}

export default testing;
