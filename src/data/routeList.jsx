// Pages
import {
  ECommerceDashboard,
  Category,
  CategoryCreate,
  Profile,
  EditProfile,
} from "../data/page";


export const backendRoute = [
  {
    path: "/profile",
    title: "Profile",
    component: Profile,
  },
  {
    path: "/edit-profile",
    title: "Edit Profile",
    component: EditProfile,
  },
  {
    path: "/pages/category/list",
    title: "Category",
    component: Category,
  },
  {
    path: "/pages/category/create",
    title: "Category Create",
    component: CategoryCreate,
  },
  {
    path: "/e-commerce",
    title: "ECommerce Dashboard",
    component: ECommerceDashboard,
  },
  {
    path: "/",
    title: "ECommerce Dashboard",
    component: ECommerceDashboard,
  },

  {
    path: "/pages/product/list",
    title: "Product",
    component: Category,
  },
  {
    path: "/pages/product/create",
    title: "Product Create",
    component: CategoryCreate,
  },
];

export const frontRoute = [
  {
    path: "/front",
    title: "ECommerce Dashboard",
    component: CategoryCreate,
  },
];


