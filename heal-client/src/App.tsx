import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Provider } from "urql";
import client from "./utils/CreateUrqlClient";
import home from "./pages/home";
import Login from "./pages/login";
import Forgot_password from "./pages/forgot-password";
import Reset_password from "./pages/reset-password";
import AuthRoute from "./utils/AuthRoute";
import UnAuthRoute from "./utils/UnAuthRoute";

export const App = () => (
  <Provider value={client}>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Router>
            <Switch>
              <AuthRoute exact path="/" component={home} />
              {/* <AuthRoute exact path="/roles" component={Roles} />
              <AuthRoute exact path="/users" component={Users} /> */}
              <UnAuthRoute exact path="/login" component={Login} user="user"/>
              <UnAuthRoute
                exact
                path="/forgot-password"
                component={Forgot_password}
              />
              <UnAuthRoute
                exact
                path="/reset-password"
                component={Reset_password}
              />
            </Switch>
          </Router>
        </Grid>
      </Box>
    </ChakraProvider>
  </Provider>
);
