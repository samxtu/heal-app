import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

interface IAppProps {
  query: any;
}

const Login: React.FunctionComponent<IAppProps> = ({ query }) => {
  const [, login] = useLoginMutation();
  const [general, setGeneral] = React.useState("");
  const history = useHistory();

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <GridItem colStart={2} colEnd={5} style={{ maxWidth: 450 }}>
        <Heading as="h2" color="teal" textAlign="center" mb={4}>
          <Icon as={FaUserCircle} mr={3} />
          Login To Your Account
        </Heading>
        {general ? (
          <Text mb={4} color="red.500">
            {general}
          </Text>
        ) : null}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            console.log("values", values);
            const user = await login({ params: values });
            if (user.data?.login.error) {
              console.log(
                "cant login there is an error: ",
                user.data.login.error.message
              );
              setGeneral(user.data.login.error.message);
              // let newSchema = Yup.object().cast({
              //   [user.data.login.error.target]: user.data.login.error.message,
              // });
              // if (newSchema) {
              //   setErrors(newSchema);
              //   console.log("errorrs: ", newSchema);
              // }
            } else if (user.data?.login.user) {
              // worked
              history.replace({
                pathname: "/",
                // query.includes("next=")
                //   ? query.split("next=")[1]
                //   :
              });
            }
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Enter a valid email address!")
              .required("Required"),
            password: Yup.string()
              .min(3, "Must be 3 or more characters!")
              .max(20, "Must be 20 characters or less!")
              .required("Required"),
            general: Yup.string(),
          })}
          validateOnChange={false}
        >
          {(props) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.submitForm();
              }}
            >
              <VStack>
                <InputField
                  error={props.errors.email}
                  fluid
                  name="email"
                  touched={props.touched.email}
                  label="Email"
                  placeholder="E-mail address"
                  type="email"
                  mt="4"
                />
                <InputField
                  error={props.errors.password}
                  fluid
                  name="password"
                  label="password"
                  touched={props.touched.password}
                  placeholder="Password"
                  type="password"
                  mt="4"
                />
              </VStack>
              {/* </Form.Group> */}

              <Button
                isLoading={props.isSubmitting}
                color="teal"
                size="lg"
                type="submit"
                width="full"
                mt={6}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
        <Text mt={4}>
          Forgot password?{" "}
          <Link to="/forgot-password" color="teal">
            Recover
          </Link>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Login;
