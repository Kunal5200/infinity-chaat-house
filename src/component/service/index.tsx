import { COLORS } from "@/utils/enum";
import { roboto, satisfy } from "@/utils/fonts";
import { Container, Typography } from "@mui/material";
import React from "react";

const ServiceComponent = () => {
  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontFamily: satisfy.style,
            color: COLORS.PRIMARY,
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Our Service
        </Typography>
        <Typography
          sx={{
            fontFamily: roboto.style,
            color: COLORS.BLACK,
            fontSize: 40,
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
      </Container>
    </div>
  );
};

export default ServiceComponent;
