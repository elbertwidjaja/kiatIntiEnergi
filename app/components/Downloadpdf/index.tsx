"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "./styles.module.scss";

function Downloadpdf({ url }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/${url}`;
    link.download = url;
    link.click();
  };

  return (
    <>
      <Button onClick={handleDownload} colorScheme="blue">
        Download Katalog
      </Button>
    </>
  );
}

export default Downloadpdf;
