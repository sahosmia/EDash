// React Icons
import {
  AiOutlineDashboard,
  AiOutlineNodeIndex,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { IoSchoolOutline } from "react-icons/io5";
import { BsHospital } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { LiaUsersCogSolid } from "react-icons/lia";
import { MdOutlineErrorOutline, MdOutlineAccountCircle } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";

export const sideMenus = [
  {
    title: "Dashboard",
    menus: [
      {
        icon: <AiOutlineDashboard />,
        title: "Simple Dashboard",
        url: "/",
      },
      {
        icon: <AiOutlineShoppingCart />,
        title: "E-commerce",
        url: "e-commerce",
      },
    ],
  },

  {
    title: "Pages",
    menus: [
      {
        icon: <BiCategory />,
        title: "Category",
        url: "pages/category",
        subMenus: [
          {
            title: "Product List",
            url: "pages/category/list",
          },
          {
            title: "Product Create",
            url: "pages/category/create",
          },
        ],
      },
      {
        icon: <AiOutlineNodeIndex />,
        title: "Product",
        url: "pages/product",
        subMenus: [
          {
            title: "Product List",
            url: "pages/product/list",
          },
          {
            title: "Product Create",
            url: "pages/product/create",
          },
        ],
      },
      {
        icon: <MdOutlineErrorOutline />,
        title: "Not Found",
        url: "/not-found",
      },
      {
        icon: <AiOutlineShoppingCart />,
        title: "front",
        url: "/front",
      },
    ],
  },

  {
    title: "Authentication",
    menus: [
      {
        icon: <PiSignInBold />,
        title: "Sign Up",
        url: "/signup",
      },

      {
        icon: <MdOutlineAccountCircle />,
        title: "Profile",
        url: "/profile",
      },
    ],
  },
];

export const revinueDatas = [
  {
    title: "Total Revinue",
    val: "$4500",
    progressVal: "60",
    color: "#1180b0",
  },
  {
    title: "Total Earning",
    val: "$8725",
    progressVal: "90",
    color: "#8F2D2D",
  },
  {
    title: "Total Selas",
    val: "$975",
    progressVal: "82",
    color: "#0f3460",
  },
  {
    title: "Total Order",
    val: "200",
    progressVal: "70",
    color: "#edb05a",
  },
];

export const colors = [
  "#333",
  "#d60000",
  "#d67900",
  "#b200d6",
  "#004fd6",
  "#8334eb",
  "#34aeeb",
  "#2aad3b",
  "#ad2a6c",
];

export const users = [
  { id: 1, name: "Admin", email: "admin@gmail.com", password: "123456" },
  { id: 2, name: "Sahos Mia", email: "sahosmia@gmail.com", password: "123456" },
];
