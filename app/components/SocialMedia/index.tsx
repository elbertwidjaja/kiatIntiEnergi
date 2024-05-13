import React from "react";
import styles from "./style.module.scss";
import TikTokIcon from "@/public/tiktok.png";
import InstagramIcon from "@/public/instagram.png";
import FacebookIcon from "@/public/facebook.png";
import Image from "next/image";

type SocialMediaType = {
  tiktokUrl: string;
  instagramUrl: string;
  facebookUrl: string;
};

const SocialMedia = ({
  tiktokUrl,
  instagramUrl,
  facebookUrl,
}: SocialMediaType) => {
  return (
    <section className={styles.socialmMediaContainer}>
      <h2 className={styles.findUsOn}>Find Us On</h2>
      <div className={styles.socialmMediaIcon}>
        <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
          <Image src={TikTokIcon} alt="tiktok-icon" width={100} />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <Image src={InstagramIcon} alt="instagram-icon" width={100} />
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <Image src={FacebookIcon} alt="facebook-icon" width={100} />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
