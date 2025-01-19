import React from "react";
import Header from "./header";
import { useMediaQuery } from "@mui/material";
import { LayoutProps } from "@/utils/types";
import MobileHeader from "./mobileHeader";
import Footer from "./footer";
const Layout = ({ children }: LayoutProps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {phone ? <MobileHeader /> : <Header />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
