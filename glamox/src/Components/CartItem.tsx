import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { CloseButton } from "@chakra-ui/close-button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { useDispatch } from "react-redux";
import { quantityCart, removeCart } from "../ReduxStore/CartStore/acton";
import Alert from "./Alert";

export const CartItem = (props:any) => {
  const dispatch=useDispatch()
  const toast = useToast()
  const {id,image1,title,brand,price,qty,handleRemove,index,handleQuantity,handlePrice,altprice}=props;
  //console.log(altprice())
  // const handleQuantity=(quan:React.ChangeEvent<HTMLSelectElement>)=>{
  //   //console.log(quan.target.value)
  // }
  let alertdata = {
    title: ' Item removed from cart',
    description: "",
    status: 'success',
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
          src={image1}
          alt="Caffe Latte"
          border={"0px"}
          w={"35%"}
        />

        <Stack>
          <HStack>
            <CardBody border={"0px"}>
              <Heading size="md">{brand}</Heading>
              <Text py="2" color={"white"}>
                {title}
              </Text>
            </CardBody>
            <CloseButton alignSelf={"start"} onClick={()=>{
              dispatch(removeCart(index))
              toast(Alert(alertdata))
              }}/>
          </HStack>
          <hr />
          <CardFooter border={'0px'} p={'2'}>
            <HStack border={"0px"} w={"100%"} justify={"space-between"}>
              <HStack>
                <Text color={"white"}>Quantity:</Text>
                <select name="pets" id="pet-select" onChange={(el)=>dispatch(quantityCart(index,el.target.value))}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </HStack>
              <Heading size={"sm"} border={"0px"}>
                ₹ {handlePrice(index)}
              </Heading>
            </HStack>
          </CardFooter>
        </Stack>
      </Card>

    </div>
  );
};
