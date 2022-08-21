// import {
//   BsPencilSquare,
//   BsBoxArrowInRight,
//   BsGear,
//   BsBoxArrowInLeft,
//   BsSuitHeart,
//   BsFillPersonPlusFill,
// } from "react-icons/bs";
import {
  BiLogInCircle,
  BiLogOutCircle,
  BiUserPlus,
  BiCog,
  BiEdit,
} from "react-icons/bi";

const headerData = {
  menuItems: [
    {
      text: "Home",
      path: "/",
    },

    {
      text: "Sports",
      path: "/sports",
    },
    {
      text: "Tech",
      path: "/tech",
    },
    {
      text: "Health",
      path: "/health",
    },
    {
      text: "Books",
      path: "/books",
    },
    {
      text: "Business",
      path: "/business",
    },
    {
      text: "Contact",
      path: "/contact",
    },

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
