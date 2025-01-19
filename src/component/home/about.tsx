import { COLORS } from "@/utils/enum";
import { roboto, satisfy } from "@/utils/fonts";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import homeAbout from "@/banner/home-about.jpg";
import tomato from "@/banner/tomato-basil.png";
const About = () => {
  return (
    <div>
      <Container>
        <Grid2 container spacing={10}>
          <Grid2 size={6}>
            <Typography
              sx={{
                fontSize: 25,
                fontFamily: satisfy.style,
                color: COLORS.PRIMARY,
                letterSpacing: 2,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: 45,
                fontFamily: roboto.style,
                mt: 1,
              }}
            >
              Catering is not just all about food. It’s about excellent service
              as well
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: roboto.style,
                mt: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Button
              sx={{
                fontFamily: roboto.style,
                backgroundColor: COLORS.PRIMARY,
                border: `2px solid ${COLORS.PRIMARY}`,
                color: COLORS.WHITE,
                ":hover": {
                  color: COLORS.PRIMARY,
                  backgroundColor: COLORS.TRANSPARENT,
                },
                borderRadius: 0,
                mt: 2,
                p: 1.5,
                width: 200,
              }}
            >
              Discover More
            </Button>
          </Grid2>
          <Grid2 size={6}>
            <Box sx={{ position: "relative" }}>
              <Image src={homeAbout} alt="" className="img-fluid" />
              <Box sx={{ position: "absolute", bottom: -50, left:-60 }}>
                <Image src={tomato} alt="" width={200} />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default About;
