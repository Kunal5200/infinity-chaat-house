import { COLORS } from "@/utils/enum";
import { roboto, satisfy } from "@/utils/fonts";
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./serviceCard";
import { SERVICE_DATA } from "@/assests/service";
import banner from "@/banner/bg-1.png";
const ServiceComponent = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        height: { lg: "200vh", xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: { xs: 5 },
      }}
    >
      <Container>
        <Typography
          sx={{
            fontFamily: satisfy.style,
            color: COLORS.PRIMARY,
            fontSize: { lg: 25, xs: 20 },
            textAlign: "center",
          }}
        >
          Our Service
        </Typography>
        <Typography
          sx={{
            fontFamily: roboto.style,
            color: COLORS.BLACK,
            fontSize: { lg: 40, xs: 30 },
            textAlign: "center",
            mt: 2,
          }}
        >
          The catering with the royal touch
        </Typography>
        <Typography
          sx={{
            fontFamily: roboto.style,
            color: COLORS.BLACK,
            fontSize: 15,
            textAlign: "center",
            mt: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Grid2 container mt={4} spacing={4}>
          {SERVICE_DATA.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
              <ServiceCard
                img={val.img}
                heading={val.heading}
                description={val.description}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default ServiceComponent;
