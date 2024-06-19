import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Service from "@/app/icons/Service";
import Survey from "@/app/icons/Sruvey";

function SurveyCard() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      width={{ base: "100%", lg: "auto" }}
      justifyContent="center"
      alignContent="center"
    >
      <Card py={4}>
        <Center>
          <Survey />
        </Center>
        <CardHeader>
          <Heading textAlign="center" size="md">
            REQUEST SURVEI
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Kami menyediakan layanan survei lokasi untuk menentukan kebutuhan
            penggunaan solar water heater atau water filter. Tim ahli kami akan
            datang langsung ke tempat Anda untuk analisis menyeluruh, memastikan
            solusi tepat sesuai kebutuhan Anda.
          </Text>
        </CardBody>
        <CardFooter>
          <a href="https://wa.me/6281283831787">
            <Button>Jadwalkan Survei Sekarang!</Button>
          </a>
        </CardFooter>
      </Card>

      <Card py={4}>
        <Center>
          <Service />
        </Center>
        <CardHeader>
          <Heading textAlign="center" size="md">
            SERVICE SOLAR WATER HEATER
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Kami menawarkan layanan perawatan dan perbaikan solar water heater,
            termasuk pemeriksaan rutin, pembersihan, dan perbaikan, memastikan
            sistem Anda berfungsi optimal.
          </Text>
        </CardBody>
        <CardFooter>
          <a href="https://wa.me/6281283831787">
            <Button>Jadwalkan Service Sekarang!</Button>
          </a>
        </CardFooter>
      </Card>
      <Card py={4}>
        <Center>
          <Service />
        </Center>
        <CardHeader>
          <Heading textAlign="center" size="md">
            SERVICE WATER FILTER
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Kami menyediakan layanan perawatan dan perbaikan water filter,
            termasuk pemeriksaan rutin, pembersihan, penggantian media, dan
            perbaikan untuk memastikan air Anda selalu bersih dan aman.
          </Text>
        </CardBody>
        <CardFooter>
          <a href="https://wa.me/6281283831787">
            <Button>Jadwalkan Service Sekarang!</Button>
          </a>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default SurveyCard;
