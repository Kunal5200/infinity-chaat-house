import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import service1 from "@/service/service-1.jpg";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { SERVICE_CARD_PROPS } from "@/utils/types";
import { Bookmark, BookmarkOutlined } from "@mui/icons-material";
const ServiceCard = ({ img, heading, description }: SERVICE_CARD_PROPS) => {
  return (
    <div>
      <Card sx={{ boxShadow: "0px 0px 4px 4px rgb(0,0,0,0.10)" }}>
        <Image src={img} alt="" height={200} className="img-fluid" />
        <CardContent>
          <Typography
            sx={{
              fontSize: 25,
              color: COLORS.BLACK,
              textAlign: "center",
              fontWeight: 550,
              fontFamily: roboto.style,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: roboto.style,
              mt: 1,
            }}
          >
            {description}
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                p: 1,
                backgroundColor: COLORS.PRIMARY,
                border: `2px solid ${COLORS.PRIMARY}`,
                borderRadius: 0,
                mt: 2,
                fontSize: 14,
                width: 140,
                color: COLORS.WHITE,
                ":hover": {
                  color: COLORS.PRIMARY,
                  backgroundColor: COLORS.TRANSPARENT,
                },
              }}
              startIcon={<BookmarkOutlined />}
            >
              Book Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
