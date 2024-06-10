import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

function WhatsappIcon() {
  return (
    <a
      href="https://wa.me/6281283831787"
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/WhatsappIcon.png?alt=media&token=72bfca22-adce-4bd8-b66a-57f2e49ccc5a"
        alt="WhatsApp"
        width={35}
        height={35}
      />
    </a>
  );
}

export default WhatsappIcon;
