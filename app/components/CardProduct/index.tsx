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

interface ProductDataType {
  descriptionTitle: string;
  description: string;
}

function ProductCard({
  data,
  img,
}: {
  data: ProductDataType[];
  img: StaticImageData;
}) {
  return (
    <Card className={styles.productCard} maxW="sm">
      <CardBody>
        <Image src={img} alt="Solar Jaya" />
        <div>
          {data.map((data) => {
            return (
              <span key={data.descriptionTitle} className={styles.productdesc}>
                <Text fontSize="sm">{data.descriptionTitle}</Text>
                <Text fontSize="sm" as="b" className={styles.productValue}>
                  {data.description}
                </Text>
              </span>
            );
          })}
        </div>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default ProductCard;
