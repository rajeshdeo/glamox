import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Center, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  quantityCart,
  removeCart,
} from "../ReduxStore/CartStore/acton";

// let cartitem = [
//   {
//     id: "1",
//     image:
//       "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/1/a184019SCAAA00000017_01.jpg",
//     name: "Intense Hair Scalp Massager",
//     brand: "Scalppie",
//     price: 349,
//     quantity: 1,
//     altprice: function () {
//       return this.price * this.quantity;
//     },
//   },
//   {
//     id: "2",
//     image:
//       "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/1/3171bd75060542721547.jpg",
//     name: "Intense Hair Scalp Massager",
//     brand: "Scalppie",
//     price: 348,
//     quantity: 1,
//     altprice: function () {
//       return this.price * this.quantity;
//     },
//   },
//   {
//     id: "3",
//     image:
//       "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/50673d2NYKAB00000248_1.jpg",
//     name: "Intense Hair Scalp Massager",
//     brand: "Scalppie",
//     price: 347,
//     quantity: 1,
//     altprice: function () {
//       return this.price * this.quantity;
//     },
//   },
// ];

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
  const myCart = useSelector((store: any) => store.CartReducer);
  const dispatcher = useDispatch();
  //console.log(myCart)
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>(null);
  const [cart, setCart] = React.useState<any>([]);
  const [state, dispatch] = React.useReducer<(a: any, b: any) => any>(
    reducer,
    initial
  );
  //console.log(cart)
  //console.log(cart.length!=0?cart[0].altprice():[])
  // const fetchcartdata=()=>{
  //   axios({
  //     method:'get',
  //     url:'https://fine-puce-bison-cap.cyclic.app/cart',
  //   })
  //   .then((res)=>{
  //     // console.log(res)
  //     setCart(res.data)
  //   })
  //   .catch((err)=>{
  //     console.error(err)
  //   })
  // }

  const handleRemove = (id: number) => {
    //setCart((prev:any) => prev.filter((el:any, i:any) => i != id));
    // axios.delete(`https://fine-puce-bison-cap.cyclic.app/cart/${id}`).then((r)=>{
    // let x = axios.get('https://fine-puce-bison-cap.cyclic.app/cart').then((r)=>{
    //   setCart(x);
    // }).catch((e)=>console.log(e))
    //   console.log(r.data)
    // }).catch((e)=> console.log(e));
    // dispatch(removeCart(id))
  };

  const handleQuantity = (index: number, quan: any) => {
    let newquan = Number(quan.target.value);
    console.log(quan.target.value);

    // setCart((prev:any) =>
    //   prev?.map((el:any, i:any) => {
    //     return i == index ? { ...el, qty: newquan } : { ...el };
    //   })
    // );
  };

  const handlePrice = (index: number) => {
    for (let i = 0; i < cart.length; i++) {
      if (i == index) return cart[i].altprice();
    }
  };

  useEffect(() => {
    let sum = 0;
    let mrp;
    cart.map((item: any) => (sum += item.price * item.qty));
    dispatch({ type: "total", payload: sum });
    mrp = Math.round(sum + (12 / 100) * sum);
    dispatch({ type: "mrp", payload: mrp });
    dispatch({ type: "discount", payload: mrp - sum });
  }, [cart]);

  useEffect(() => {
    //   fetchcartdata();
    setCart(myCart);
  }, [myCart]);

  return (
    <>
      <Box
        ref={btnRef}
        border={"0px"}
        p={"2"}
        borderRadius={"full"}
        onClick={onOpen}
        _hover={{ cursor: "pointer", backgroundColor: "teal", color: "white" }}
      >
        <Flex border={"0px"} w={"130%"}>
          <BsBag />
          <Text
            fontSize={"x-small"}
            border={"0px"}
            borderRadius={"50%"}
            p={"0% 10%"}
            bg={"red.500"}
            color={'white'}
          >
            {cart.length}
          </Text>
        </Flex>
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
              {cart?.map((item: any, index: any) => (
                <CartItem
                  key={item.id}
                  {...item}
                  handleRemove={handleRemove}
                  index={index}
                  handleQuantity={handleQuantity}
                  handlePrice={handlePrice}
                />
              ))}
            </VStack>
            {/* -----------------------Cart Price Details------------------------------------ */}
            
            {cart.length!=0?
            <TableContainer
              border={"1px solid grey"}
              marginTop={5}
              borderRadius={"5"}
            >
              <Table variant="simple" >
                <Thead>
                  <Tr>
                    <Th>Price Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Bag MRP</Td>
                    <Td isNumeric>₹ {+state.mrp}</Td>
                  </Tr>
                  <Tr>
                    <Td bg={'white'}>Bag Discount</Td>
                    <Td bg={'white'} isNumeric>₹ {+state.discount}</Td>
                  </Tr>
                  <Tr>
                    <Td>Shipping</Td>
                    <Td isNumeric>70</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>You Pay</Th>
                    <Th isNumeric>₹ {+state.total}</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
             :
             <Center><Heading paddingTop={'40'}>Oops... <br/> Your bag is Empty</Heading></Center>    }
          </DrawerBody>
          <hr />
          <DrawerFooter>
            <HStack justifyContent={"space-between"} border={"0px"} w={"100%"}>
              <Heading size={"md"}>Total: ₹ {+state.total}</Heading>
              <Button
                colorScheme={"pink"}
                mr={3}
                rightIcon={<ArrowForwardIcon />}
                onClick={() => {
                  onClose();
                  navigate("/payments");
                }}
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
