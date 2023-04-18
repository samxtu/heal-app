// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "../../assets/img/BackgroundCard1.png";
// Custom components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import IconBox from "../../components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "../../components/Icons/Icons";
import { HSeparator } from "../../components/Separator/Separator";
import BillingRow from "../../components/Tables/BillingRow";
import InvoicesRow from "../../components/Tables/InvoicesRow";
import TransactionRow from "../../components/Tables/TransactionRow";
import React from "react";
import {
  FaPaypal,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaWallet,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "../../variables/general";

function Billing() {
  // Chakra color mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "transparent");
  const { colorMode } = useColorMode();

  console.log(colorMode);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr">
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
          >
            <Card p="16px" mt="24px">
              <CardHeader>
                <Flex
                  justify="space-between"
                  align="center"
                  minHeight="60px"
                  w="100%"
                >
                  <Text fontSize="lg" color={textColor} fontWeight="bold">
                    Payment Method
                  </Text>
                  <Button variant={colorMode === "dark" ? "primary" : "dark"}>
                    ADD A NEW CARD
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  align="center"
                  w="100%"
                  justify="center"
                  py="1rem"
                >
                  <Flex
                    p="1rem"
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    borderRadius="15px"
                    width="100%"
                    border="1px solid"
                    borderColor={borderColor}
                    align="center"
                    mb={{ sm: "24px", md: "0px" }}
                    me={{ sm: "0px", md: "24px" }}
                  >
                    <IconBox me="10px" w="25px" h="22px">
                      <MastercardIcon w="100%" h="100%" />
                    </IconBox>
                    <Text color="gray.400" fontSize="md" fontWeight="semibold">
                      7812 2139 0823 XXXX
                    </Text>
                    <Spacer />
                    <Button p="0px" w="16px" h="16px" variant="no-effects">
                      <Icon
                        as={FaPencilAlt}
                        color={colorMode === "dark" && "white"}
                      />
                    </Button>
                  </Flex>
                  <Flex
                    p="16px"
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    borderRadius="15px"
                    width="100%"
                    border="1px solid"
                    borderColor={borderColor}
                    align="center"
                  >
                    <IconBox me="10px" w="25px" h="25px">
                      <VisaIcon w="100%" h="100%" />
                    </IconBox>
                    <Text color="gray.400" fontSize="md" fontWeight="semibold">
                      7812 2139 0823 XXXX
                    </Text>
                    <Spacer />
                    <Button
                      p="0px"
                      bg="transparent"
                      w="16px"
                      h="16px"
                      variant="no-effects"
                    >
                      <Icon
                        as={FaPencilAlt}
                        color={colorMode === "dark" && "white"}
                      />
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
        </Box>
        <Card
          p="22px"
          my={{ sm: "24px", lg: "0px" }}
          ms={{ sm: "0px", lg: "24px" }}
        >
          <CardHeader>
            <Flex justify="space-between" align="center" mb="1rem" w="100%">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Invoices
              </Text>
              <Button
                variant="outlined"
                color={colorMode === "dark" && "white"}
                borderColor={colorMode === "dark" && "white"}
                _hover={colorMode === "dark" && "none"}
                minW="110px"
                maxH="35px"
              >
                VIEW ALL
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" w="100%">
              {invoicesData.map((row, idx) => {
                return (
                  <InvoicesRow
                    date={row.date}
                    code={row.code}
                    price={row.price}
                    logo={row.logo}
                    format={row.format}
                    key={idx}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
          <Flex direction="column">
            <CardHeader py="12px">
              <Text color={textColor} fontSize="lg" fontWeight="bold">
                Billing Information
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
                {billingData.map((row, key) => {
                  return (
                    <BillingRow
                      name={row.name}
                      company={row.company}
                      email={row.email}
                      number={row.number}
                      key={key}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Flex>
        </Card>
        <Card my="24px" ms={{ lg: "24px" }}>
          <CardHeader mb="12px">
            <Flex direction="column" w="100%">
              <Flex
                direction={{ sm: "column", lg: "row" }}
                justify={{ sm: "center", lg: "space-between" }}
                align={{ sm: "center" }}
                w="100%"
                my={{ md: "12px" }}
              >
                <Text
                  color={textColor}
                  fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                  fontWeight="bold"
                >
                  Your Transactions
                </Text>
                <Flex align="center">
                  <Icon
                    as={FaRegCalendarAlt}
                    color="gray.400"
                    fontSize="md"
                    me="6px"
                  ></Icon>
                  <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                    23 - 30 March 2022
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" w="100%">
              <Text
                color="gray.400"
                fontSize={{ sm: "sm", md: "md" }}
                fontWeight="semibold"
                my="12px"
              >
                NEWEST
              </Text>
              {newestTransactions.map((row, idx) => {
                return (
                  <TransactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                    key={idx}
                  />
                );
              })}
              <Text
                color="gray.400"
                fontSize={{ sm: "sm", md: "md" }}
                fontWeight="semibold"
                my="12px"
              >
                OLDER
              </Text>
              {olderTransactions.map((row, idx) => {
                return (
                  <TransactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                    key={idx}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Billing;
