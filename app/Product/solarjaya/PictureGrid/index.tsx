/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const pictures = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20131%20S%20%3D%20Bandung%2C%20Jawa%20Barat.png?alt=media&token=a39f9faf-a748-483e-8462-61fe863cea20",
    name: "JS 131 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20131%20S%20%3D%20Cikarang%2C%20Bekasi.png?alt=media&token=016dd028-a4e4-4a54-a096-ddf2285b37d1",
    name: "JS 131 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20151%20S%20%3D%20Cakung%2C%20Jakarta%20Timur.png?alt=media&token=7fe01468-4447-4626-97fa-3b84d6ab556a",
    name: "JS 151 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20151%20S%20%3D%20Cikarang%2C%20Bekasi.png?alt=media&token=b382fe49-0cb8-43cc-a638-3acac3d865bf",
    name: "JS 151 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20151%20S%20%3D%20Kembangan%2C%20Jakarta%20Barat.png?alt=media&token=9d21116e-a83a-4ea1-85f3-a25a4fc60c37",
    name: "JS 151 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20302%20%3D%20Bintaro%2C%20Jakarta%20Selatan.png?alt=media&token=c2b0aa13-f948-43c2-9e7d-688bdc077cd8",
    name: "JS 302 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20302%20%3D%20Bogor%2C%20Jawa%20Barat.png?alt=media&token=62fe6059-30be-4027-8e08-84fbb0acbdce",
    name: "JS 302 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20302%20%3D%20Cisarua%2C%20Bogor.png?alt=media&token=31b4632b-2ee9-44a2-86e4-776ebb865dac",
    name: "JS 302 S",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/SolarJaya_Gallery%2FJS%20302%20S%20%3D%20Bandar%20Lampung%2C%20Lampung.png?alt=media&token=5168732c-7b4e-470e-9b86-ea948bd1baf8",
    name: "JS 302 S",
  },
];

const PictureGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {pictures.map((picture, index) => (
        <div key={index} className={styles.pictureBox}>
          <img
            src={picture.src}
            alt={picture.name}
            className={styles.picture}
          />
          <div className={styles.pictureName}>{picture.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;
