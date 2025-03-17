import { COLORS } from "@/utils/enum";
import { satisfy } from "@/utils/fonts";
import { CUSTOM_BANNER_PROPS } from "@/utils/types";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CustomBanner = ({ img, heading }: CUSTOM_BANNER_PROPS) => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: satisfy.style,
              fontSize: 60,
              color: COLORS.WHITE,
              textAlign: "center",
            }}
          >
            {heading}
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default CustomBanner;
