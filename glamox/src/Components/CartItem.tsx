import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { CloseButton } from "@chakra-ui/close-button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";

export const CartItem = () => {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          // maxW={{ base: '100%', sm: '200px' }}
          src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/1/a184019SCAAA00000017_01.jpg"
          alt="Caffe Latte"
          border={"0px"}
          w={"35%"}
        />

        <Stack>
          <HStack>
            <CardBody border={"0px"}>
              <Heading size="md">Product Name</Heading>
              <Text py="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </CardBody>
            <CloseButton alignSelf={"start"} />
          </HStack>
          <hr />
          <CardFooter border={'0px'} p={'2'}>
            <HStack border={"0px"} w={"100%"} justify={"space-between"}>
              <HStack>
                <Text>Quantity:</Text>
                <select name="pets" id="pet-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </HStack>
              <Heading size={"sm"} border={"0px"}>
                price
              </Heading>
            </HStack>
          </CardFooter>
        </Stack>
      </Card>

    </div>
  );
};
