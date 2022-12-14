// import {
//   BsPencilSquare,
//   BsBoxArrowInRight,
//   BsGear,
//   BsBoxArrowInLeft,
//   BsSuitHeart,
//   BsFillPersonPlusFill,
// } from "react-icons/bs";
import {
  BiCog,
  BiEdit,
  BiLogInCircle,
  BiLogOutCircle,
  BiUserPlus,
} from "react-icons/bi";

const headerData = {
  menuItems: [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "International",
      path: "/international",
    },
    {
      text: "Bangladesh",
      path: "/bangladesh",
    },
    {
      text: "Business",
      path: "/business",
    },
    // {
    //   text: "Contact",
    //   path: "/contact",
    // },
    {
      text: "Entertainment",
      path: "/entertainment",
    },
    {
      text: "Environment",
      path: "/environment",
    },

    // {
    //   text: "Photo",
    //   path: "/photo",
    // },
    {
      text: "Sports",
      path: "/sports",
    },
    {
      text: "Tech",
      path: "/tech",
    },
    // {
    //   text: "Videos",
    //   path: "/videos",
    // },
    // {
    //   text: "Weather",
    //   path: "/weather",
    // },
    {
      text: "Live News",
      path: "/liveNews",
    },
  ],
  usersItem: [
    {
      text: "Edit",
      icon: <BiEdit />,
      path: "/",
    },

    {
      text: "Setting",
      icon: <BiCog />,
      path: "/",
    },
    {
      text: "Logout",
      icon: <BiLogOutCircle />,
      path: "/",
    },
    {
      text: "Login",
      icon: <BiLogInCircle />,
      path: "/login",
    },
    {
      text: "Signup",
      icon: <BiUserPlus />,
      path: "/signup",
    },
  ],
};

export default headerData;
