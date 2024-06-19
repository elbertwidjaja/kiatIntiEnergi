"use client";

import React, { useRef, useState } from "react";
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
  FormErrorMessage,
} from "@chakra-ui/react";

const HubungiKami = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const toast = useToast();

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: false,
    email: false,
    phone: false,
    message: false,
    emailFormat: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors({
        ...errors,
        email: value === "",
        emailFormat: !emailFormatValid,
      });
    } else {
      setErrors({ ...errors, [name]: value === "" });
    }
  };

  const validate = () => {
    const newErrors = {
      from_name: formData.from_name === "",
      email: formData.email === "",
      phone: formData.phone === "",
      message: formData.message === "",
      emailFormat: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Telah terjadi error.",
        description: "Mohon isi semua bidang dengan benar.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    if (form.current) {
      emailjs
        .sendForm("service_0trbuoa", "template_xontrdp", form.current, {
          publicKey: "2MexfRcJ6DDhNER8D",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast({
              title: "Pesan Terkirim.",
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
          <FormControl isInvalid={errors.from_name}>
            <FormLabel>Nama Anda</FormLabel>
            <Input
              mb={2}
              name="from_name"
              placeholder="Tulis nama Anda"
              value={formData.from_name}
              onChange={handleChange}
            />
            {errors.from_name && (
              <FormErrorMessage>Nama diperlukan.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.email || errors.emailFormat}>
            <FormLabel>Alamat Email</FormLabel>
            <Input
              mb={2}
              name="email"
              placeholder="Eg.john@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <FormErrorMessage>Email diperlukan.</FormErrorMessage>
            )}
            {errors.emailFormat && !errors.email && (
              <FormErrorMessage>Email tidak valid.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.phone}>
            <FormLabel>Nomor Whatsapp</FormLabel>
            <Input
              mb={2}
              name="phone"
              placeholder="Eg +621260641234"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <FormErrorMessage>Nomor Whatsapp diperlukan.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.message}>
            <FormLabel>Pesan</FormLabel>
            <Textarea
              mb={5}
              name="message"
              placeholder="Masukan pesan Anda"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <FormErrorMessage>Pesan diperlukan.</FormErrorMessage>
            )}
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

export default HubungiKami;
