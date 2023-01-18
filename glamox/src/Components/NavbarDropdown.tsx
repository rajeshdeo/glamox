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
} from "@chakra-ui/react";

export const NavbarDropdown = () => {
  // const dropdownMakupData = [
  //   ["Face Primer", "Kajal", "Lipstick", "Face Brush", "Kay Beauty", "Combos@"],
  //   [
  //     "Concealer",
  //     "Eyeliner",
  //     "Liquid Lipstick",
  //     "Eye Brush",
  //     "Huda Beauty",
  //     "Nykaa",
  //   ],
  //   [
  //     "Foundation",
  //     "Mascara",
  //     "Lip Crayon",
  //     "Lip Brush",
  //     "Charlotte Tilbury",
  //     "New Launches",
  //   ],
  // ];

  

  const dropdownData = [
    [
      [
        'Face',
        'Eyes',
        'Lips',
        'Tools/Brushes',
        'Top Brands',
        'Quick Links',
      ],
      [
        "Face Primer",
        "Kajal",
        "Lipstick",
        "Face Brush",
        "Kay Beauty",
        "Combos@",
      ],
      [
        "Concealer",
        "Eyeliner",
        "Liquid Lipstick",
        "Eye Brush",
        "Huda Beauty",
        "Nykaa",
      ],
      [
        "Foundation",
        "Mascara",
        "Lip Crayon",
        "Lip Brush",
        "Charlotte Tilbury",
        "New Launches",
      ],
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
        'Hair Care',
        'Accessories',
        'Concern',
        'Trending',
        'Top Brands',
        'Quick Links'
      ],
      [
        'Shampoo',
        'Hair Brushes',
       ' Hairfall',
        'Hair Growth',
        'Nykaa Naturals',
        'Combos @',
      ],
      [
        'Dry Shampoo',
        'Hair Combs',
        'Thinning',
        'Dandruff',
        "L'Oreal Paris",
        'Nykaa'
      ]
    ]
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
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy trigger="hover">
        <PopoverTrigger>
          <Button
            // rightIcon={<ChevronDownIcon />}
            colorScheme="green"
            w="fit-content"
          >
            Categories
          </Button>
        </PopoverTrigger>
        <PopoverContent
          _focus={{ boxShadown: "none" }}
          w={"90vw"}
          boxShadow={"xl"}
          border={"none"}
        >
          {/* <PopoverArrow /> */}
          {/* <PopoverCloseButton /> */}
          {/* <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader> */}
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
                    <TableContainer border={'1px'}>
                      <Table variant='unstyled'>                     
                        <Tbody border={'1px'}>                          
                          {a.map((type, i) => {
                            return (
                              <Tr key={i} border={'1px'}>
                                {type.map((data, j) => (
                                  <Td border={'1px'} key={j} fontWeight={i===0?'bold':'normal'}>{data}</Td>
                                ))}
                              </Tr>
                            );
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                ))}

                {/* <TabPanel>
                  <TableContainer>
                    <Table variant="unstyled" colorScheme="teal">
                      <Tbody>
                        <Tr>
                          <Th>Face</Th>
                          <Th>Eyes</Th>
                          <Th>Lips</Th>
                          <Th>Tools & Brushes</Th>
                          <Th>Top Brands</Th>
                          <Th>Quick Links</Th>
                        </Tr>
                        {dropdownMakupData.map((type, i) => {
                          return (
                            <Tr key={i}>
                              {type.map((data, j) => (
                                <Td key={j}>{data}</Td>
                              ))}
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                  {/* You can add your content here. */}
                {/* </TabPanel>
                <TabPanel>
                  <TableContainer>
                    <Table variant="unstyled" colorScheme="teal">
                      <Tbody>
                        <Tr>
                          <Th>Moisturizers</Th>
                          <Th>Cleansers</Th>
                          <Th>Masks</Th>
                          <Th>Toners</Th>
                          <Th>Body Care</Th>
                          <Th>Shop by Concern</Th>
                        </Tr>
                        {dropdownMakupData.map((type, i) => {
                          return (
                            <Tr key={i}>
                              {type.map((data, j) => (
                                <Td key={j}>{data}</Td>
                              ))}
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel> */} */
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
