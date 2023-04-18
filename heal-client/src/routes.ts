import React from "react";
import Dashboard from "./views/Dashboard/Dashboard";
import Tables from "./views/Dashboard/Tables";
import Billing from "./views/Dashboard/Billing";
import RTLPage from "./views/RTL/RTLPage";
import Profile from "./views/Dashboard/Profile";
import SignIn from "./pages/login";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./components/Icons/Icons";
import { ComponentWithAs } from "@chakra-ui/system";
import { IconProps } from "@chakra-ui/react";
import Forgot_password from "./pages/forgot-password";

interface DashRoute {
  path: string;
  name: string;
  rtlName: string;
  icon: ComponentWithAs<"svg", IconProps>;
  component: React.ComponentType;
  layout: string;
  category?: string;
  state?: string;
  views?: Array<DashRoute>;
  secondaryNavbar?: boolean;
}

const dashRoutes: Array<any> = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Right to Left not usable",
    icon: HomeIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "Right to Left not usable",
    icon: StatsIcon,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "Right to Left not usable",
    icon: CreditIcon,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "DISABLED",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "Right to Left not usable",
        icon: PersonIcon,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/login",
        name: "Sign In",
        rtlName: "Right to Left not usable",
        icon: DocumentIcon,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
];

export default dashRoutes;
