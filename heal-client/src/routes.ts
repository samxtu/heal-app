import React from "react";
import Dashboard from "./views/Dashboard/Dashboard";
import Tables from "./views/Dashboard/Tables";
import Billing from "./views/Dashboard/Billing";
import Profile from "./views/Dashboard/Profile";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  SuperpowersIcon,
  AccountDetailsOutlineIcon,
  IconBuildingUser,
  IconUserDoctor,
  HospitalUser,
  ListSettingsFillIcon,
  PathDivideIcon,
  IconCogPlay,
  IconBxsCategoryAlt,
  DivideOutlineIcon,
  // DocumentIcon,
  // RocketIcon,
  // SupportIcon,
} from "./components/Icons/Icons";
import { ComponentWithAs } from "@chakra-ui/system";
import { IconProps } from "@chakra-ui/react";
import Types from "./views/Dashboard/Types";
import AddType from "./views/Dashboard/AddType";
import AddCategory from "./views/Dashboard/AddCategory";

interface DashRoute {
  path?: string;
  name: string;
  icon?: ComponentWithAs<"svg", IconProps> | string;
  component?: React.ComponentType;
  layout?: string;
  category?: string;
  state?: string;
  views?: Array<DashRoute>;
  secondaryNavbar?: boolean;
  depth: number;
  appear: boolean;
}

const superAdminRoutes: Array<DashRoute> = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    category: "account",
    state: "pageCollapse",
    appear: true,
    depth: 1,
    views: [
      {
        path: "/dashboard",
        name: "Super Admin",
        icon: SuperpowersIcon,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/employee",
        name: "Employee",
        icon: IconUserDoctor,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/hqemployee",
        name: "HqEmployee",
        icon: IconBuildingUser,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/user",
        name: "User",
        icon: HospitalUser,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
    ],
  },
  {
    name: "Settings",
    icon: ListSettingsFillIcon,
    category: "account",
    state: "pageCollapse",
    depth: 1,
    appear: true,
    views: [
      {
        path: "/roles",
        name: "Roles",
        icon: PathDivideIcon,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/permissions",
        name: "Permissions",
        icon: IconCogPlay,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/types",
        name: "Types",
        icon: IconBxsCategoryAlt,
        secondaryNavbar: true,
        component: Types,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/add-type",
        name: "Add Type",
        icon: "IconBxsCategoryAlt",
        secondaryNavbar: true,
        component: AddType,
        layout: "/admin",
        depth: 2,
        appear: false,
      },
      {
        path: "/categories",
        name: "Categories",
        icon: DivideOutlineIcon,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/add-category",
        name: "Add Category",
        icon: DivideOutlineIcon,
        secondaryNavbar: true,
        component: AddCategory,
        layout: "/admin",
        depth: 2,
        appear: false,
      },
    ],
  },
  {
    name: "ACCOUNT",
    icon: AccountDetailsOutlineIcon,
    category: "account",
    state: "pageCollapse",
    depth: 1,
    appear: true,
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: PersonIcon,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/tables",
        name: "Tables",
        icon: StatsIcon,
        component: Tables,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
      {
        path: "/billing",
        name: "Billing",
        icon: CreditIcon,
        component: Billing,
        layout: "/admin",
        depth: 2,
        appear: true,
      },
    ],
  },
];

export default superAdminRoutes;
