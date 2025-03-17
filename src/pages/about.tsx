import { Box } from "@mui/material";
import React from "react";
import banner from "@/banner/about-banner.jpg";
import CustomBanner from "@/component/customBanner";
import AboutComponent from "@/component/home/about";
import aboutbanner from "@/banner/about-bg.jpg";
const About = () => {
  return (
    <Box>
      <CustomBanner img={banner.src} heading="About Us" />
      <Box sx={{ mt: 8 }}>
        <AboutComponent
          img1={aboutbanner}
          heading="Catering is not just all about food. It’s about excellent service as well"
          subHeading="About Us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
      </Box>
    </Box>
  );
};

export default About;
