import React from "react";
import Footer from "./Footer";
import InfoCard from "./InfoCard";
// import Button from "./Button";
import Header from "./Header";
import BannerHome from "./BannerHome";
import { Box, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function testing() {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Footer />
      <br />
      <br />
      {/* <Button title="hi there" size="s" />
      <br />
      <Button title="hi there" size="m" />
      <br />
      <Button title="hi there" size="l" /> */}
      <br />
      <br />
      <Header />
      <br />
      <br />
      <BannerHome />
    </>
  );
}

export default testing;
