import * as React from "react";
import { ChakraProvider, Box, Grid } from "@chakra-ui/react";
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Provider } from "urql";
import client from "./utils/CreateUrqlClient";
import AuthRoute from "./utils/AuthRoute";
import UnAuthRoute from "./utils/UnAuthRoute";
import theme from "./theme/theme";
import AdminLayout from "./layouts/Admin";
import Login from "./pages/login";
import Forgot_password from "./pages/forgot-password";
import Reset_password from "./pages/reset-password";

export const App = () => (
  <Provider value={client}>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Router>
            <Switch>
              {/* protected routes  */}
              <AuthRoute
                exact
                path="/admin/dashboard"
                component={AdminLayout}
              />
              <AuthRoute exact path="/admin/tables" component={AdminLayout} />
              <AuthRoute exact path="/admin/billing" component={AdminLayout} />
              <AuthRoute exact path="/admin/profile" component={AdminLayout} />

              {/* Unprotected routes */}
              <UnAuthRoute exact path="/login" component={Login} user="user" />
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
              <Redirect from={`/`} to="/admin/dashboard" />
            </Switch>
          </Router>
        </Grid>
      </Box>
    </ChakraProvider>
  </Provider>
);
