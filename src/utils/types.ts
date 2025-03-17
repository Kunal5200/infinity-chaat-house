import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface LIST {
  label?: string;
  value?: string;
}

export interface BANNER_PROPS {
  img: string;
  subHeading?: string;
  heading: string;
  description: string;
  onClick?: () => void;
  buttonText: string;
}

export interface SERVICE_CARD_PROPS {
  img: StaticImageData;
  heading: string;
  description: string;
}

export interface CUSTOM_BANNER_PROPS {
  img: string;

  heading: string;
}

export interface ABOUT_PROPS {
  img1: StaticImageData;
  img2?: StaticImport | string ;
  heading: string;
  subHeading: string;
  description: string;
}
