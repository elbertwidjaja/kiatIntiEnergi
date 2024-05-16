import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface InfoCardProps {
  logo: StaticImageData;
  image: StaticImageData;
  url: string;
}

function InfoCard({ image, logo, url }: InfoCardProps) {
  return (
    <div className={styles.infoCard}>
      <Image
        src={logo}
        width={200}
        height={300}
        alt="logo jaya filter"
        loading="lazy"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Image
        src={image}
        alt="product picture"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        loading="lazy"
      />
      <Link href={url}>
        <Button colorScheme="blue">Lihat Produk</Button>
      </Link>
    </div>
  );
}

export default InfoCard;
