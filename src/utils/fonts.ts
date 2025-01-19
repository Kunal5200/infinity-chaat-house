import {
  Kanit,
  Merriweather_Sans,
  Roboto_Slab,
  Satisfy,
} from "next/font/google";
export const roboto = Roboto_Slab({
  weight: "variable",
  subsets: ["greek"],
});

export const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese"],
});

export const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});
