import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
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
import React, { useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { CartItem } from "./CartItem";

let cartitem = [
  {
    id: "1",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/1/a184019SCAAA00000017_01.jpg",
    name: "Intense Hair Scalp Massager",
    brand: "Scalppie",
    price: 349,
  },
  {
    id: "2",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/1/3171bd75060542721547.jpg",
    name: "Intense Hair Scalp Massager",
    brand: "Scalppie",
    price: 348,
  },
  {
    id: "3",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/50673d2NYKAB00000248_1.jpg",
    name: "Intense Hair Scalp Massager",
    brand: "Scalppie",
    price: 347,
  },
];

function reducer(state: any, action: any) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "mrp":
      return { ...state, mrp: action.payload };
    case "discount":
      return { ...state, discount: action.payload };
    default:
      return state;
  }
}

let initial = {
  mrp: 0,
  discount: 0,
  total: 0,
};

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>(null);
  const [cart, setCart] = React.useState(cartitem);
  const [state, dispatch] = React.useReducer<(a: any, b: any) => any>(
    reducer,
    initial
  );

  const handleRemove = (index: number) => {
    setCart((prev) => prev.filter((el, i) => i != index));
  };

  useEffect(() => {
    let sum = 0;
    let mrp;
    cart.map((item) => (sum += item.price));
    dispatch({ type: "total", payload: sum });
    mrp = Math.round(sum + (12 / 100) * sum);
    dispatch({ type: "mrp", payload: mrp });
    dispatch({ type: "discount", payload: mrp - sum });
  }, [cart]);

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
            {/* -------------------------Cart Items------------------------------------------ */}
            <VStack>
              {cart.map((item, index) => (
                <CartItem
                  key={item.id}
                  {...item}
                  handleRemove={handleRemove}
                  index={index}
                />
              ))}
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
                    <Td isNumeric>₹ {state.mrp}</Td>
                  </Tr>
                  <Tr>
                    <Td>Bag Discount</Td>
                    <Td isNumeric>₹ {state.discount}</Td>
                  </Tr>
                  <Tr>
                    <Td>Shipping</Td>
                    <Td isNumeric>70</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>You Pay</Th>
                    <Th isNumeric>₹ {state.total}</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </DrawerBody>
          <hr />
          <DrawerFooter>
            <HStack justifyContent={"space-between"} border={"0px"} w={"100%"}>
              <Heading size={"md"}>Total: ₹ {state.total}</Heading>
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
