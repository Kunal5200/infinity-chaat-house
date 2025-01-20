import { EmailOutlined, LocationOn, PhoneAndroid } from "@mui/icons-material";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const data = {
  headerLinks: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Awards & Recognition",
      url: "/awards",
    },
    {
      label: "Gallery",
      url: "/gallery",
    },
    {
      label: "About Us",
      url: "/about",
    },
    {
      label: "Contact Us",
      url: "/contact",
    },
  ],
  socialIcons: [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=100090065978318",
    },
    // {
    //   icon: X,
    // },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/edzu-edtech/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/edzu.in/",
    },
  ],
  footerContact: [
    {
      icon: LocationOn,
      label: "Delhi-Meerut Road,near Duhai Metro Station ",
    },
    {
      icon: PhoneAndroid,
      label: "+91 9354678205",
    },
    {
      icon: EmailOutlined,
      label: "kunalsharma5868@gmail.com",
    },
  ],
  footerLinks: [
    {
      heading: "Support",
      list: [
        {
          label: "Home Page",
        },
        {
          label: "Awards & Recognition",
        },
        {
          label: "Gallery",
        },
        {
          label: "About Us",
        },
        {
          label: "Contact Us",
        },
      ],
    },
    {
      heading: "UseFul Links",
      list: [
        {
          label: "Private Party",
        },
        {
          label: "Social Event",
        },
        {
          label: "Anniversary Celebrations",
        },
        {
          label: "Corporate Events",
        },
        {
          label: "Wedding Reception",
        },
      ],
    },
  ],

  choose: [
    {
      primary: "Experienced Chef",
      secondary:
        "Nunc si ultrices velit dolor sit justo amet iaculis interdum nam",
    },
    {
      primary: "Solid Team",
      secondary:
        "Nunc si ultrices velit dolor sit justo amet iaculis interdum nam",
    },
    {
      primary: "Best Cuisine",
      secondary:
        "Nunc si ultrices velit dolor sit justo amet iaculis interdum nam",
    },
    {
      primary: "24/7 Support",
      secondary:
        "Nunc si ultrices velit dolor sit justo amet iaculis interdum nam",
    },
  ],
};
