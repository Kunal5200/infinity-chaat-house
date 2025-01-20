import { data } from "@/assests/data";
import logo from "@/logo/ith-logo.png";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const changePath = (path: string) => {
    router.push(path);
    setOpen(false);
  };
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        // setScrollPosition(currentScroll);
        setIsScrolling(currentScroll > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div>
      <Container
        sx={{
          position: isScrolling ? "relative" : "relative",
          top: 0,
          width: "100%",
          pt: 1,
          pb: 1,
          zIndex: 99,
          // backgroundColor: isScrolling ? "#00000050" : COLORS.TRANSPARENT,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={logo} alt="" width={70} />
          <IconButton onClick={() => setOpen(true)}>
            <Menu sx={{ fontSize: 30, color: COLORS.BLACK }} />
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "70%",
          },
        }}
      >
        <Box sx={{ textAlign: "end" }}>
          <IconButton onClick={() => setOpen(false)}>
            <Close htmlColor={COLORS.PRIMARY} />
          </IconButton>
        </Box>
        <List sx={{ mt: 5 }}>
          {data.headerLinks.map((val, i) => (
            <List>
              <ListItemButton key={i} onClick={() => changePath(val.url)}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        textAlign: "start",
                        fontSize: 20,
                        textTransform: "uppercase",
                        fontFamily: roboto.style,
                      }}
                    >
                      {val.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
