import {
  AiOutlineDashboard,
  AiOutlineNodeIndex,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { IoSchoolOutline } from "react-icons/io5";
import { BsHospital } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { LiaUsersCogSolid } from "react-icons/lia";

export const sideMenus = [
  {
    title: "Dashboard",
    menus: [
      {
        icon: <AiOutlineDashboard />,
        title: "Simple Dashboard",
        url: "#",
      },
      {
        icon: <AiOutlineShoppingCart />,
        title: "E-commerce",
        url: "#",
      },
      {
        icon: <BsHospital />,
        title: "Hospital Management",
        url: "#",
      },
      {
        icon: <IoSchoolOutline />,
        title: "School Management",
        url: "#",
      },
    ],
  },

  {
    title: "Pages",
    menus: [
      {
        icon: <BiCategory />,
        title: "Category",
        url: "#",
      },
      {
        icon: <AiOutlineNodeIndex />,
        title: "Product",
        url: "#",
      },
      {
        icon: <LiaUsersCogSolid />,
        title: "Employee",
        url: "#",
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
    val: "$872145",
    progressVal: "90",
    color: "#8F2D2D",
  },
  {
    title: "Total Selas",
    val: "$9751456",
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
