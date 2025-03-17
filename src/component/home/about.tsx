import { COLORS } from "@/utils/enum";
import { roboto, satisfy } from "@/utils/fonts";
import { ABOUT_PROPS } from "@/utils/types";
import {
  Box,
  Button,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
const AboutComponent = ({
  subHeading,
  heading,
  description,
  img1,
  img2,
}: ABOUT_PROPS) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Container>
        <Grid2 container spacing={10}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 25, xs: 20 },
                fontFamily: satisfy.style,
                color: COLORS.PRIMARY,
                letterSpacing: 2,
              }}
            >
              {subHeading}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 45, xs: 30 },
                fontFamily: roboto.style,
                mt: 1,
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: roboto.style,
                mt: 2,
              }}
            >
              {description}
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
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Box sx={{ position: "relative" }}>
              <Image src={img1} alt="" className="img-fluid" />
              {img2 && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { lg: -50, xs: -20 },
                    left: { lg: -60, xs: -10 },
                  }}
                >
                  <Image src={img2} alt="" width={phone ? 100 : 200} />
                </Box>
              )}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default AboutComponent;
