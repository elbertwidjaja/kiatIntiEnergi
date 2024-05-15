"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { ChatIcon } from "@chakra-ui/icons";
import styles from "./styles.module.scss";

function Survey() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        "Hemat",
        "Sehat",
        "Nyaman",
        "Effisien",
        "Sustainable",
        "Praktis",
        "Murni",
      ],
      autoStart: true,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div className={styles.surveyContainer}>
      <p>HIDUP LEBIH</p>
      <div className={styles.typewriter} id="typewriter" />
      <p className={styles.startNow}>Mulai Sekarang</p>
      <p>FREE Survei Lokasi (Jabodetabek & Jawa Barat)</p>
      <Link href={"#"}>
        <Button
          className={styles.surveyButton}
          colorScheme="blue"
          variant="outline"
          rightIcon={<ChatIcon />}
        >
          REQUEST SURVEI
        </Button>
      </Link>
    </div>
  );
}

export default Survey;
