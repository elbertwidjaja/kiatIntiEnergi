/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const pictures = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-100%20PR%20%3D%20Duren%20Sawit%2C%20Jakarta%20Timur.png?alt=media&token=dd7ba1c2-928c-4917-84b7-c9bf374f9a63",
    name: "Picture 1",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-120%20PR%20%3D%20Bintaro%2C%20Jakarta%20Selatan.png?alt=media&token=435fe419-cdeb-48ea-ad4c-eb4f381ccbe0",
    name: "Picture 2",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-150%20PR%20%3D%20Duren%20Sawit%2C%20Jakarta%20Timur.png?alt=media&token=5c375f47-2121-420e-b84d-c8407e22d182",
    name: "Picture 3",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-150%20PR%20%3D%20Kelapa%20Gading%2C%20Jakarta%20Utara.png?alt=media&token=d766f328-fc4c-4a8c-a2f0-ec7dd426def5",
    name: "Picture 4",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-150%20PR%20%3D%20Palembang%2C%20Sumatera%20Selatan.png?alt=media&token=28411c36-f3a9-4b24-b60c-61fba7261276",
    name: "Picture 5",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-200%20PR%20%3D%20Cilandak%2C%20Jakarta%20Selatan.png?alt=media&token=1d1f95ff-ab12-44b7-b261-547f2fa54354",
    name: "Picture 6",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-200%20PR%20%3D.png?alt=media&token=a9b52e81-66e8-4eb7-a32b-891479391928",
    name: "Picture 7",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-300%20PR%20%3D%20Cipedes%2C%20Tasikmalaya.png?alt=media&token=c564dcf5-42ed-4743-ab18-5be8830ce109",
    name: "Picture 8",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/VisiSolar_Gallery%2FVT-300%20PR%20%3D%20Tanjungsari%2C%20Bogor.png?alt=media&token=a95bf01f-b58d-46ab-aa0a-66bc23f63f1f",
    name: "Picture 9",
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
