import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { CloseButton } from "@chakra-ui/close-button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";

export const CartItem = (props:any) => {
  const {image,name,brand,price}=props;

  const handleDelete=()=>{
    
  }

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
          src={image}
          alt="Caffe Latte"
          border={"0px"}
          w={"35%"}
        />

        <Stack>
          <HStack>
            <CardBody border={"0px"}>
              <Heading size="md">{brand}</Heading>
              <Text py="2">
                {name}
              </Text>
            </CardBody>
            <CloseButton alignSelf={"start"} onClick={handleDelete}/>
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
                ₹{price}
              </Heading>
            </HStack>
          </CardFooter>
        </Stack>
      </Card>

    </div>
  );
};
