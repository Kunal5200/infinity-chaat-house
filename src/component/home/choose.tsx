import { data } from "@/assests/data";
import { COLORS } from "@/utils/enum";
import { roboto, satisfy } from "@/utils/fonts";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import choose1 from "@/banner/choose-1.jpg";
import choose2 from "@/banner/choose-2.jpg";
import React from "react";
import Image from "next/image";

const Choose = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ mb: 4 }}>
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                color: COLORS.PRIMARY,
                fontSize: { lg: 25, xs: 20 },
                fontFamily: satisfy.style,
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontSize: { lg: 40, xs: 30 },
                fontFamily: roboto.style,
                mt: 1,
              }}
            >
              Great food, great service, anywhere anytime
            </Typography>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontSize: 14,
                fontFamily: roboto.style,
                mt: 1,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Grid2 container spacing={2}>
              {data.choose.map((val, i) => (
                <Grid2 size={{ lg: 6, xs: 12 }} key={i}>
                  <List>
                    <ListItem sx={{ alignItems: "flex-start" }} disablePadding>
                      <ListItemAvatar sx={{ minWidth: 35, mt: 1 }}>
                        <CheckCircle htmlColor={COLORS.PRIMARY} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: roboto.style,
                              fontSize: 20,
                              mb: 1,
                            }}
                          >
                            {val.primary}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            sx={{ fontFamily: roboto.style, fontSize: 13 }}
                          >
                            {val.secondary}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 6 }}>
            <Image
              src={choose1}
              alt=""
              width={phone ? 400 : 550}
              height={phone ? 200 : 450}
              style={{ objectFit: "cover" }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Choose;
