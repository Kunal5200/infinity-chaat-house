import Banner from "@/component/banner";
import { Box } from "@mui/material";
import Head from "next/head";
import heroImage from "@/banner/hero-banner.jpg";
import About from "@/component/home/about";
import ServiceComponent from "@/component/service";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Banner
          img={heroImage.src}
          heading="Where taste meets excellence service."
          description="Vulputate rutrum tempus eleifend faucibus vehicula taciti potenti facilisis ante consectetuer vitae nisl"
          buttonText="Discover More"
          subHeading="Welcome to Infinity Chaat House"
        />
        <Box sx={{ pt: 7 }}>
          <About />
        </Box>
        <Box sx={{ pt: 15 }}>
          <ServiceComponent />
        </Box>
      </Box>
    </>
  );
}
