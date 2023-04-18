// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  // useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import React from "react";
import TypesTableRow from "../../components/Tables/TypesTableRow";
import { FaPlus } from "react-icons/fa";
import { SearchBar } from "../../components/Navbars/SearchBar/SearchBar";
import { useGetTypesQuery } from "../../generated/graphql";
import { Link } from "react-router-dom";

function Types() {
  const [{ data, fetching }] = useGetTypesQuery({
    requestPolicy: "cache-and-network",
  });
  // const { colorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="0px 0px 8px 0px">
          <Flex
            direction={{ sm: "column", md: "row" }}
            mb="12px"
            maxH="330px"
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="blur(21px)"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="1.5px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Text>System Types</Text>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
              <SearchBar placeholder="Search types ..." />

              <Link to="/admin/add-type">
                <Button p="2px" bg="transparent" variant="no-effects">
                  <Flex
                    align="center"
                    w={{ lg: "135px" }}
                    borderRadius="15px"
                    justifyContent="center"
                    py="10px"
                    cursor="pointer"
                  >
                    <Icon
                      as={FaPlus}
                      color={textColor}
                      fontSize="xs"
                      mr="4px"
                    />
                    <Text fontSize="xs" color={textColor} fontWeight="bold">
                      ADD NEW TYPE
                    </Text>
                  </Flex>
                </Button>
              </Link>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" borderColor={borderColor} color="gray.400">
                  Type
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Description
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Category Count
                </Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {!fetching &&
                data?.getTypes &&
                data?.getTypes.map((row, index, arr) => {
                  return (
                    <TypesTableRow
                      name={row.name}
                      count={row.category.length}
                      description={row.description}
                      isLast={index === arr.length - 1 ? true : false}
                      key={row.id}
                    />
                  );
                })}
            </Tbody>
          </Table>
          {!fetching && !data?.getTypes && (
            <Link to="/admin/add-type">
              <Button
                left={40}
                m="80px"
                p="80px"
                bg="transparent"
                border="1px solid lightgray"
                borderRadius="15px"
                minHeight={{ sm: "200px", md: "100%" }}
              >
                <Flex direction="column" justifyContent="center" align="center">
                  <Icon
                    as={FaPlus}
                    mb={10}
                    color={textColor}
                    fontSize="lg"
                    mr="12px"
                  />
                  <Text fontSize="lg" color={textColor} fontWeight="bold">
                    No Types In DB, Add One Now
                  </Text>
                </Flex>
              </Button>
            </Link>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Types;
