import { BsMegaphone, BsPersonFill } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";

const HeroData = {
  advDescription: `Hello! MR.User Name , Welcome to our Delta Newa Advertisement programs, We are provide best ads for your business. We manage all the things only you need to provide your idea.`,
  advData: [
    {
      id: 1,
      icon: <BsPersonFill />,
      title: "Active Users",
      details: " 10k +",
    },
    {
      id: 2,
      icon: <BsMegaphone />,
      title: " Total Ads",
      details: " 50k +",
    },
  ],
  liveData: [
    {
      id: 1,
      icon: <BsPersonFill />,
      title: "Active Users",
      details: " 5k +",
    },
    {
      id: 2,
      icon: <MdLiveTv />,
      title: " Online Channels",
      details: " 20 +",
    },
  ],
};

export default HeroData;
