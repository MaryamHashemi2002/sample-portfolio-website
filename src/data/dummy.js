import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

export const links = [
  {
    links: [
      {
        key: "Home",
        name: "Home",
      },
    ],
  },

  {
    links: [
      {
        key: "port",
        name: "Portfolio",
      },
    ],
  },
  {
    links: [
      {
        key: "resume",
        name: "Resume",
      },
    ],
  },
  // {
  //   links: [
  //     {
  //       key: "con",
  //       name: "Contact",
  //     },
  //   ],
  // },
  {
    links: [
      {
        key: "tract",
        name: "Contract",
      },
    ],
  },
];

export const socialMedia = [
  {
    key: "Linkedin",
    icon: <AiFillLinkedin />,
    address: "https://www.linkedin.com/in/alireza-janbaz/",
  },
  {
    key: "Medium",
    icon: <BsMedium />,
    address: "https://medium.com/@alirezajanbaz69",
  },
  {
    key: "Telegram",
    icon: <FaTelegramPlane />,
    address: "https://www.blaiseposmyouck.com/",
  },
  {
    key: "Github",
    icon: <AiFillGithub />,
    address: "https://github.com/Alireza7997/",
  },
];
