import React from "react";
import picture from "@/public/Frame 35769.png";
import styles from "./styles.module.scss";
import MainLayout from "../components/MainLayout";

import img from "../../public/Frame 35767.png";
import { solarjaya } from "@/data/productData";

import {
  Card,
  CardBody,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

function SolarJaya() {
  return (
    <MainLayout>
      <div className={styles.productContainer}>
        <div className={styles.ourProduct}>
          <h1>Our Popular Product</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quisquam dolore molestiae sint ex sunt odit dolores debitis omnis
            nisi!
          </p>
        </div>
        <div className={styles.productCardContainer}>
          <Card className={styles.productCard} maxW="sm">
            <CardBody>
              <Image src={img} alt="Solar Jaya" />
              <Stack mt="6" spacing="3">
                <Heading size="md" className={styles.productTitle}>JS 131 S (Cocok untuk 2-4 orang)</Heading>
              </Stack>
              <div>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Diameter Tangki </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    110x47x47 (cm)
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Material Tangki </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    Stainless Steel 316 L (cm)
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Dimensi Panel </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    180x100x80
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Material Box Panel </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    Galvalum
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Tebal Tangki Dalam </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    3mm
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Berat Kosong Tangki</Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    48 Kg
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Jumlah Panel </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    1 Panel
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Berat Kosong Panel </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    42 Kg
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Berat Isi Panel </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    45 Kg
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Backup Electric Heater </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    500 Watt
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Jumlah Alur Pipa Riser </Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    8 Alur
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Insulation Tangki</Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    High Density Polyethane 7cm
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Cover Panel Kolekter</Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    Ice Tempered Glass
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Material Absorber</Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    Tembaga (CU) Dm5.8 (Header) 3.8 (Riser)
                  </Text>
                </span>
                <span className={styles.productdesc}>
                  <Text fontSize="sm">Aksesoris</Text>
                  <Text fontSize="sm" as="b" className={styles.productValue}>
                    ELCB, Safety Valve, Check Valve
                  </Text>
                </span>
              </div>
            </CardBody>
            <Divider />
          </Card>

          <Card className={styles.productCard} maxW="sm">
            <CardBody>
              <Image src={img} alt="Solar Jaya" />
              <Stack mt="6" spacing="3">
                <Heading size="md">JS 151 S (Cocok untuk 4-5 orang)</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>

          <Card className={styles.productCard} maxW="sm">
            <CardBody>
              <Image src={img} alt="Solar Jaya" />
              <Stack mt="6" spacing="3">
                <Heading size="md">JS 302 S (Cocok untuk 5-9 orang)</Heading>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

export default SolarJaya;
