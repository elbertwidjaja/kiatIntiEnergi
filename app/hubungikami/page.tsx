"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MainLayout from "../components/MainLayout";
import Image from "next/image";
import styles from "./styles.module.scss";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const HubunguKami = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const toast = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_0trbuoa", "template_xontrdp", form.current, {
          publicKey: "2MexfRcJ6DDhNER8D",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast({
              title: "Pesar Terkirim.",
              description: "Pesan Anda telah dikirim.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast({
              title: "Telah terjadi error.",
              description: "Mohon mencoba lagi.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        );
    }
  };

  return (
    <MainLayout>
      <div className={styles.heroSection}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%2FHero%20Hubungi%20Kami.png?alt=media&token=0830233e-2f68-4347-b873-ed797eda67a6"
          alt="Poster Layanan"
          layout="fill"
        />
      </div>

      <div className={styles.formContainer}>
        <p className={styles.help}>
          Kami siap membantu Anda! Silakan isi formulir di bawah ini untuk
          menghubungi kami
        </p>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <FormControl>
            <FormLabel>Nama Anda</FormLabel>
            <Input mb={2} name="from_name" placeholder="Tulis nama Anda" />

            <FormLabel>Alamat Email</FormLabel>
            <Input mb={2} name="email" placeholder="Eg.john@gmail.com" />

            <FormLabel>Nomor Whatsapp</FormLabel>
            <Input mb={2} name="phone" placeholder="Eg +621260641234" />

            <FormLabel>Pesan</FormLabel>
            <Textarea mb={5} name="message" placeholder="Masukan pesan Anda" />
          </FormControl>
          <Input type="submit" value="Send" />
        </form>
      </div>
      <div className={styles.mapContainer}>
        <p className={styles.findUs}>Find Us on Google Maps!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9950623122472!2d106.73263709999999!3d-6.131364500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f97b5a3733db%3A0xdc8fd94636e66efc!2sVISI%20SOLAR%20%2F%20SOLARJAYA%20%2F%20JAVA%20FILTER%20(PT.%20Kiat%20Inti%20Energi)!5e0!3m2!1sen!2sid!4v1718639661529!5m2!1sen!2sid"
          width="800"
          height="600"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </MainLayout>
  );
};

export default HubunguKami;
