import { data } from "@/assests/data";
import logo from "@/logo/ith-logo.png";
import { Close, Menu } from "@mui/icons-material";
import {
  Box,
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
import { useState } from "react";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const changePath = (path: string) => {
    router.push(path);
    setOpen(false);
  };
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={1}
      >
        <Image src={logo} alt="" width={100} />
        <IconButton onClick={() => setOpen(true)}>
          <Menu sx={{ fontSize: 30 }} />
        </IconButton>
      </Stack>

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
            <Close />
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
                        fontSize: 25,
                        textTransform: "uppercase",
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
