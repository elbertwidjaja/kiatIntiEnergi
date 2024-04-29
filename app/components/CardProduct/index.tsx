import React from "react";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface SolarJayaData {
  name: string;
  diameterTangki: string;
  materialTangki: string;
  dimensiPanel: string;
  materialBoxPanel: string;
  tebalTangkiDalam: string;
  beratKosongTangki: string;
  jumlahPanel: string;
  beratKosongPanel: string;
  beratIsiPanel: string;
  backupElectricHeater: string;
  jumlahAlurPipaRiser: string;
  insulationTangki: string;
  coverPanelKolekter: string;
  materialAbsorber: string;
  aksesoris: string;
}

function ProductCard({
  data,
  img,
}: {
  data: SolarJayaData;
  img: StaticImageData;
}) {
  return (
    <Card className={styles.productCard} maxW="sm">
      <CardBody>
        <Image src={img} alt="Solar Jaya" />
        <Stack mt="6" spacing="3">
          <Heading size="md" className={styles.productTitle}>
            {data.name}
          </Heading>
        </Stack>
        <div>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Diameter Tangki </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.diameterTangki}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Material Tangki </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.materialTangki}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Dimensi Panel </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.dimensiPanel}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Material Box Panel </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.materialBoxPanel}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Tebal Tangki Dalam </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.tebalTangkiDalam}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Berat Kosong Tangki</Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.beratKosongTangki}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Jumlah Panel </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.jumlahPanel}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Berat Kosong Panel </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.beratKosongPanel}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Berat Isi Panel </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.beratIsiPanel}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Backup Electric Heater </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.backupElectricHeater}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Jumlah Alur Pipa Riser </Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.jumlahAlurPipaRiser}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Insulation Tangki</Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.insulationTangki}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Cover Panel Kolekter</Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.coverPanelKolekter}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Material Absorber</Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.materialAbsorber}
            </Text>
          </span>
          <span className={styles.productdesc}>
            <Text fontSize="sm">Aksesoris</Text>
            <Text fontSize="sm" as="b" className={styles.productValue}>
              {data.aksesoris}
            </Text>
          </span>
        </div>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default ProductCard;
