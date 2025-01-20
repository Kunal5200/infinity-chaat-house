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
