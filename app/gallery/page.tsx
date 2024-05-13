import React from "react";
import { Img } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import MainLayout from "../components/MainLayout";

function Gallery() {
  return (
    <MainLayout>
      <section>
        <div className={styles.galleryContainer}>
          <div>
            <Img
              width={300}
              src="https://firebasestorage.googleapis.com/v0/b/skripsi-uph.appspot.com/o/mesin-kopi.jpg?alt=media&token=2e8b4491-d029-4335-b4a0-23d0c6a7e6d2"
            />
            <h1>NAME</h1>
          </div>
          <div>
            <Img
              width={300}
              src="https://firebasestorage.googleapis.com/v0/b/skripsi-uph.appspot.com/o/mesin-kopi.jpg?alt=media&token=2e8b4491-d029-4335-b4a0-23d0c6a7e6d2"
            />
            <h1>NAME</h1>
          </div>
          <div>
            <Img
              width={300}
              src="https://firebasestorage.googleapis.com/v0/b/skripsi-uph.appspot.com/o/mesin-kopi.jpg?alt=media&token=2e8b4491-d029-4335-b4a0-23d0c6a7e6d2"
            />
            <h1>NAME</h1>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Gallery;
