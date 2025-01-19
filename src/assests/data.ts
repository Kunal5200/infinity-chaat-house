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
      label: "194-A, Prakash Industrial Estate, Uttar Pradesh ",
    },
    {
      icon: PhoneAndroid,
      label: "+91 9560021531",
    },
    {
      icon: EmailOutlined,
      label: "edzuedtech@gmail.com",
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
          label: "Privacy Policy",
        },
        {
          label: "Refund Policy",
        },
        {
          label: "Privacy Policy",
        },
        {
          label: "Terms and Conditions",
        },
      ],
    },
    {
      heading: "UseFul Links",
      list: [
        {
          label: "Web Development",
        },
        {
          label: "Artificial Intelligence",
        },
        {
          label: "Data Science",
        },
        {
          label: "Machine Learning",
        },
        {
          label: "Mobile App Development",
        },
        // {
        //   label: "Digital Marketing",
        // },
        // {
        //   label: "Finance",
        // },
        // {
        //   label: "Human Resource",
        // },
        // {
        //   label: "Combo Packs",
        // },
      ],
    },
  ],
};
