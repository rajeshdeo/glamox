import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  CardBody,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
  Heading,
} from "@chakra-ui/react";

export const NavbarDropdown = () => {

  const dropdownData = [
    [
      ["Face", "Eyes", "Lips", "Tools/Brushes", "Top Brands", "Quick Links"],
      [
        "Face Primer",
        "Kajal",
        "Lipstick",
        "Face Brush",
        "Kay Beauty",
        "Nail Polish",
      ],
      [
        "Concealer",
        "Eyeliner",
        "Liquid Lipstick",
        "Eye Brush",
        "Huda Beauty",
        "Nail Art Kits",
      ],
      [
        "Foundation",
        "Mascara",
        "Lip Crayon",
        "Lip Brush",
        "Charlotte Tilbury",
        "Nail Care",
      ],
      [
        'Compact',
        'Eye Shadow',
        'Lip Gloss',
        'Brush Sets',
        'M.A.C',
        'Remover',
      ],
      [
        'Contour',
       ' Eye Brow',
        'Lip Liner',
        'Brush Cleaners',
        'Maybelline New',
        'Nail Primer',
      ]
    ],
    [
      [
        "Moisturizers",
        "Cleansers",
        "Masks",
        "Body Care",
        "Skin Tools",
        "Shop By Concern",
      ],
      [
        "Face Moisturizer",
        "Face Wash",
        "Sheet Masks",
        "Lotions",
        "Face Massagers",
        "Acne",
      ],
      [
        "Night Cream",
        "Micellar Water",
        "Sleeping Masks",
        "Body Butter",
        "Cleansing",
        "Dull Skin",
      ],
    ],
    [
      [
        "Hair Care",
        "Accessories",
        "Concern",
        "Trending",
        "Top Brands",
        "Quick Links",
      ],
      [
        "Shampoo",
        "Hair Brushes",
        " Hairfall",
        "Hair Growth",
        "Nykaa Naturals",
        "Combos @",
      ],
      [
        "Dry Shampoo",
        "Hair Combs",
        "Thinning",
        "Dandruff",
        "L'Oreal Paris",
        "Nykaa",
      ],
    ],
  ];

  const categories = [
    "Makup",
    "Skin",
    "Hair",
    "Fragrance",
    "Bath&Body",
    "Natural",
  ];
  return (
    /**
     * You may move the Popover outside Flex.
     */
    // <Flex justifyContent="center" mt={4}>
      <Popover placement={"auto"} isLazy trigger="hover">
        <PopoverTrigger>
          <Heading _hover={{color:'pink.400',cursor:'pointer'}} size={'sm'}>
            Categories
          </Heading>
        </PopoverTrigger>
        <PopoverContent
          _focus={{ boxShadown: "none" }}
          w={"90vw"} 
          margin={'0 5%'}
          boxShadow={"xl"}
          border={"none"}
        >
    
          <PopoverBody w="full">
            <Tabs isLazy colorScheme="green">
              <TabList>
                {categories.map((range, index) => {
                  return (
                    <Tab
                      key={index}
                      _focus={{ boxShadow: "none" }}
                      fontSize="xs"
                      fontWeight="bold"
                      w="50%"
                    >
                      {range}
                    </Tab>
                  );
                })}
              </TabList>
              <TabPanels>
                {dropdownData.map((a, k) => (
                  <TabPanel key={k}>
                    <TableContainer border={"0px"}>
                      <Table variant="unstyled">
                        <Tbody border={"0px"}>
                          {a.map((type, i) => {
                            return (
                              <Tr key={i} border={"0px"}>
                                {type.map((data, j) => (
                                  <Td
                                    fontSize={{md:'smaller',lg:'md'}}
                                    p={"0 0 1% 1%"}
                                    border={"0px"}
                                    key={j}
                                    fontWeight={i === 0 ? "bold" : "normal"}
                                    bg={j%2==1?'gray.100':"none"}
                                    _hover={{'fontWeight':'bold','color':'pink.400'}}
                                  >
                                    {data}
                                  </Td>
                                ))}
                              </Tr>
                            );
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                ))}
                
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    // </Flex>
  );
};
