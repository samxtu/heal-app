import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// Chakra imports
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useAddCategoryMutation } from "../../generated/graphql";
import { useHistory } from "react-router-dom";

function AddCategory(props: any) {
  const toast = useToast({
    position: "top",
  });
  const [, addCategory] = useAddCategoryMutation();
  const [error, seterror] = useState("");
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful && error === "") {
      reset();
    }
  }, [isSubmitSuccessful, reset, error]);

  async function onSubmit(values: any) {
    seterror("");
    const args = {
      name: values.name,
      type: props.location.state.detail,
    };
    const { data } = await addCategory({ args });
    if (data?.addCategory.error) {
      console.log("The error cam eback: ", data.addCategory.error.message);
      return seterror(data?.addCategory.error.message);
    } else if (!data?.addCategory.error && values.addCategories)
      return history.push({
        pathname: "/admin/add-category?type=" + values.name,
      });
    else
      return toast({
        title: "Type added successful!",
        variant: "left-accent",
        status: "success",
        isClosable: true,
      });
  }
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  // const titleColor = useColorModeValue("gray.700", "blue.500");
  // const colorIcons = useColorModeValue("gray.700", "white");
  // const bgIcons = useColorModeValue("trasnparent", "navy.700");
  // const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  return (
    <Flex position="relative" mb="40px">
      <Flex
        // minH={{ md: "1000px" }}
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ md: "0px" }}
      >
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          mb="60px"
          mt={{ base: "50px", md: "20px" }}
        >
          <Flex
            zIndex="2"
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Add Type
            </Text>
            {error && (
              <Text mb="10px" color="red.500" textColor="red.300">
                {error}
              </Text>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mb={5} isInvalid={errors.name as any}>
                <FormLabel htmlFor="name">Type name</FormLabel>
                <Input
                  variant="filled"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Type Name"
                  mb="4px"
                  size="lg"
                  id="name"
                  {...register("name", {
                    required: "This is required",

                    pattern: {
                      value: /^[a-zA-Z- ]+$/,
                      message: "Type name can not have special characters",
                    },
                  })}
                />
                <FormErrorMessage mb="10px">
                  {errors.name && (errors.name.message as any)}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={5} isInvalid={errors.description as any}>
                <FormLabel htmlFor="description">Type description</FormLabel>
                <Input
                  variant="filled"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Type description"
                  mb="4px"
                  size="lg"
                  id="description"
                  {...register("description", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.description && (errors.description.message as any)}
                </FormErrorMessage>
              </FormControl>
              <FormControl display="flex" alignItems="center" mb="20px">
                <Switch
                  {...register("addCategories")}
                  id="addCategories"
                  colorScheme="blue"
                  me="10px"
                />
                <FormLabel htmlFor="addCategories" mb="0" fontWeight="normal">
                  Add Categories For This Type
                </FormLabel>
              </FormControl>
              <Button
                fontSize="14px"
                variant="dark"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Add Type
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddCategory;
