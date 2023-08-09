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
  useColorModeValue,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { NavbarDropdown } from "./NavbarDropdown";

import { CartDrawer } from "./CartDrawer";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  // let auth:any = useSelector((store)=>store.AuthReducer.isAuth);
  // console.log(auth)

  return (
    <Box position={"sticky"} top={"0"} zIndex={5}>
      <Flex
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("gray.900", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        border={"0px"}
        w={"100%"}
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
          border={"0px"}
          // w={'50%'}
        >
          <Image
            onClick={() => navigate("/")}
            cursor={"pointer"}
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
            gap={"3"}
            border={"0px"}
            width={"75%"}
          >
            {/* <DesktopNav /> */}
            <NavbarDropdown />
            <Heading
              _hover={{
                color: "pink.400",
                cursor: "pointer",
                fontFamily: "Inter",
              }}
              size={"md"}
            >
              Brand
            </Heading>
            <Heading
              _hover={{ color: "pink.400", cursor: "pointer" }}
              size={"md"}
            >
              Glamox Fashion
            </Heading>
            <Heading
              _hover={{ color: "pink.400", cursor: "pointer" }}
              size={"md"}
            >
              Luxe
            </Heading>
            {/* <Heading
              _hover={{ color: "pink.400", cursor: "pointer" }}
              size={"md"}
            >
              Beauty Advice
            </Heading> */}
          </HStack>
        </Flex>

        {/*-------------------- Login/Signup and all (Flex-end)----------------------- */}
        <HStack
          // paddingRight={'1%'}
          border={"0px"}
          // flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          spacing={2}
          w={"45%"}
          justifyContent={{ base: "space-evenly", md: "space-evenly" }}
        >
          <InputGroup
            border={"0px"}
            width={{ md: "9rem", lg: "15rem" }}
            display={{ base: "none", md: "inline-flex" }}
            size={"sm"}
            gap={5}
          >
            <InputLeftElement
              pointerEvents="none"
              justifyContent={"center"}
              children={<SearchIcon color="gray.500" />}
            />
            <Input
              placeholder="Search on Glamox"
              width="100%"
              borderRadius={"5"}
              background={"pink.50"}
              border="1px"
              borderColor="gray.200"
            />
          </InputGroup>

          <Button
            onClick={() => navigate("/login")}
            colorScheme="pink"
            as={"a"}
            variant={"solid"}
            href={"#"}
            size={"sm"}
          >
            Login / Sign Up
          </Button>
          <Button
            onClick={() => navigate("/admin")}
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
];
