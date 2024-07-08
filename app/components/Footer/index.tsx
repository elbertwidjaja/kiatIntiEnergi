"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2FkiatIntiEnergi_Logo.png?alt=media&token=92f61f98-4005-4785-bff8-145a48f2ed93"
      alt="Kiat Inti Energi Logo"
      width={200}
      height={200}
    />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={20}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>
              © 2024 PT. Kiat Inti Energi | All Rights Reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Facebook"}
                href="https://linktr.ee/kienergi_facebook"
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"TikTok"}
                href="https://linktr.ee/kienergi_tiktok"
              >
                <FaTiktok />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href="https://linktr.ee/kienergi_instagram"
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/profile"}>
              Tentang Kami
            </Box>
            <Box as="a" href={"/Product"}>
              Produk
            </Box>
            <Box as="a" href={"/layanan"}>
              Layanan
            </Box>
            <Box as="a" href={"/blog"}>
              Blog
            </Box>
            <Box as="a" href={"/hubungikami"}>
              Hubungi Kami
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Info Kontak</ListHeader>
            <Box as="text">(021) 5437-6429</Box>
            <Box as="text">kiatintienergi@gmail.com</Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Alamat</ListHeader>
            <Box as="text">
              Rukan Paris Golf Lake Residence Blok A No.27, RT.10/RW.14,
              Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah
              Khusus Ibukota Jakarta 11730
            </Box>
            <Stack direction={"row"}></Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
