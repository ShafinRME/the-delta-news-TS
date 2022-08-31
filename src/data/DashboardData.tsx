import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaChartLine,
  FaEnvelopeOpenText,
  FaFileInvoice,
  FaLandmark,
  FaNewspaper,
  FaShopify,
  FaTachometerAlt,
  FaUser,
  FaUserCircle,
  FaVoteYea,
} from "react-icons/fa";

const dashboardData = {
  app: [
    {
      id: 1,
      icon: <FaTachometerAlt />,
      text: "App",
      path: "",
    },

    {
      id: 2,
      icon: <FaShopify />,
      text: "E-commerce",
      path: "Ecommerce",
    },
    {
      id: 3,
      icon: <FaChartLine />,
      text: "Analytics",
      path: "analytics",
    },
    {
      id: 4,
      icon: <FaLandmark />,
      text: "Banking",
      path: "banking",
    },
    {
      id: 5,
      icon: <FaCalendarCheck />,
      text: "Booking",
      path: "booking",
    },
  ],
  management: [
    {
      id: 1,
      icon: <FaUserCircle />,
      title: "Profile",
      menus: [
        {
          id: 1,
          text: "Profile",
          path: "profile",
        },
        {
          id: 2,
          text: "List",
          path: "profile",
        },
      ],
    },
    {
      id: 2,
      icon: <FaUser />,
      title: "user",
      menus: [
        {
          id: 1,
          text: "List",
          path: "allUser",
        },
        {
          id: 2,
          text: "Details",
          path: "profile",
        },
      ],
    },
    {
      id: 3,
      icon: <FaNewspaper />,
      title: "News",
      menus: [
        {
          id: 1,
          text: "Add",
          path: "addNews",
        },
        {
          id: 2,
          text: " All News",
          path: "moderatorNewsList",
        },
        {
          id: 3,
          text: "All News",
          path: "adminNewsList",
        },
      ],
    },
    {
      id: 4,
      icon: <FaFileInvoice />,
      title: "Invoice",
      menus: [
        {
          id: 1,
          text: "Add",
          path: "addNews",
        },
        {
          id: 2,
          text: "List",
          path: "newsList",
        },
      ],
    },
    {
      id: 5,
      icon: <FaVoteYea />,
      title: "Voting",
      menus: [
        {
          id: 1,
          text: "Add",
          path: "addNews",
        },
        {
          id: 2,
          text: "List",
          path: "newsList",
        },
      ],
    },
  ],
  mails: [
    {
      id: 1,
      icon: <FaEnvelopeOpenText />,
      text: "Mail",
      path: "dashboard",
    },

    {
      id: 2,
      icon: <FaCalendarAlt />,
      text: "Calender",
      path: "calender",
    },
  ],
};

export default dashboardData;
