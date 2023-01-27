import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { NavbarDropdown } from "./NavbarDropdown";

import { useRef } from "react";
import { CartDrawer } from "./CartDrawer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate()
  // let auth:any = useSelector((store)=>store.AuthReducer.isAuth);
  // console.log(auth)

  return (
    <Box position={"sticky"} top={"0"} zIndex={5}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        border={'0px'}
        w={'100%'}
      >
        {/* -----------------------------------Hambrgur menu------------------------------- */}
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* ---------------------------------Logo & all (Flex-start)----------------------------------------- */}

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "flex-start" }}
          gap={"3"}
          border={'0px'}
          // w={'50%'}
        >
          <Image
            onClick={()=>navigate('/')}
            cursor={'pointer'}
            w={"7rem"}
            border={"0px"}
            paddingBottom={"2"}
            src="https://pbs.twimg.com/media/Fmx_u1eacAE13Ob?format=png&name=360x360"
          />
          {/* </Flex> */}
          {/*-----------------------------Categories------------------------------------------- */}
          <HStack
            display={{ base: "none", md: "flex" }}
            align={"center"}
            m={"auto"}
            justifyContent={"space-between"}
            gap={"1"}
            border={"0px"}
            width={"60%"}
          >
            {/* <DesktopNav /> */}
            <NavbarDropdown />
            <Heading
              _hover={{ color: "pink.400", cursor: "pointer" }}
              size={"sm"}
            >
              Brand
            </Heading>
            <Heading
              _hover={{ color: "pink.400", cursor: "pointer" }}
              size={"sm"}
            >
              Fashion
            </Heading>
            {/* <Heading
              _hover={{ color: "pink.400", cursor: "pointer" }}
              size={"sm"}
              display={{base:'none',lg:'block'}}
            >
              Beauty
            </Heading> */}
          </HStack>
        </Flex >

        {/*-------------------- Login/Signup and all (Flex-end)----------------------- */}
        <HStack
          // paddingRight={'1%'}
          border={"0px"}
          // flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          spacing={2}
          w={"45%"}
          justifyContent={{base:'space-evenly',md:'space-evenly'}}
        >
          <InputGroup
            border={"0px"}
            width={{ md: "9rem", lg: "15rem" }}
            display={{ base: "none", md: "inline-flex" }}
            size={"sm"}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input placeholder="Search" width="100%" />
          </InputGroup>



          <Button 
          onClick={()=>navigate('/login')}
          colorScheme="pink" as={"a"} variant={"solid"} href={"#"} size={'sm'}>
            Login / Sign Up
          </Button>
          <Button
            onClick={()=>navigate("/admin")}
            colorScheme="teal"
            variant="outline"
            display={{ base: "none", md: "inline-flex" }}
            size={"sm"}
          >
            Admin Login
          </Button>
          {/* <BsBag/>       */}
          <CartDrawer />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Categories",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  // {
  //   label: "Find Work",
  //   children: [
  //     {
  //       label: "Job Board",
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: 'Learn Design',
  //   href: '#',
  // },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
];
