import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { BsBag } from "react-icons/bs";
import { CartItem } from "./CartItem";

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  return (
    <>
      <Box
        ref={btnRef}
        border={"0px"}
        p={"1"}
        borderRadius={"full"}
        onClick={onOpen}
        _hover={{ cursor: "pointer", backgroundColor: "teal", color: "white" }}
      >
        <BsBag />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Bag</DrawerHeader>
          <hr />
          <DrawerBody>
            <VStack>
            <CartItem />
            <CartItem/>
            </VStack>
{/* -----------------------Cart Price Details------------------------------------ */}
            <TableContainer
              border={"1px solid grey"}
              marginTop={5}
              borderRadius={"5"}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Price Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Bag MRP</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>Bag Discount</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>Shipping</Td>
                    <Td isNumeric>70</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>You Pay</Th>
                    <Th isNumeric>$</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </DrawerBody>
          <hr />
          <DrawerFooter>
            <HStack justifyContent={"space-between"} border={"0px"} w={"100%"}>
              <Text>Total:</Text>
              <Button
                colorScheme={"pink"}
                mr={3}
                onClick={onClose}
                rightIcon={<ArrowForwardIcon />}
              >
                Proceed
              </Button>
            </HStack>
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
