import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import bgImage from "@/banner/hero-banner.jpg";
import { COLORS } from "@/utils/enum";
import { roboto, satisfy } from "@/utils/fonts";
import { BANNER_PROPS } from "@/utils/types";
const Banner = ({
  img,
  subHeading,
  heading,
  description,
  buttonText,
  onClick,
}: BANNER_PROPS) => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#00000030",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Container>
            <Grid2 container>
              <Grid2 size={6}>
                <Typography
                  sx={{
                    color: COLORS.PRIMARY,
                    fontSize: 25,
                    fontFamily: satisfy.style,
                  }}
                >
                  {subHeading}
                </Typography>
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: 50,
                    fontFamily: roboto.style,
                    mt: 2,
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: 20,
                    fontFamily: roboto.style,
                    mt: 2,
                  }}
                >
                  {description}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius: 0,
                    p: 2,
                    color: COLORS.WHITE,
                    mt: 2,
                    width: 200,
                    border: `2px solid ${COLORS.PRIMARY}`,
                    ":hover": {
                      color: COLORS.PRIMARY,
                      backgroundColor: COLORS.TRANSPARENT,
                    },
                    fontFamily: roboto.style,
                    fontWeight: 550,
                  }}
                  onClick={onClick}
                >
                  {buttonText}
                </Button>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
