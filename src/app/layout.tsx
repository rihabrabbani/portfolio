import type { Metadata } from "next";
import ClientWrapper from "./clientwrapper"
import {
  Raleway,
  Cormorant_Garamond,
  Abril_Fatface,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rihab Rabbani | Full-Stack Developer",
  description:
    "Portfolio of Rihab Rabbani, a Full-Stack Developer specializing in MERN stack development.",
  keywords:
    "full stack developer, web developer, MERN stack, React, Node.js, JavaScript, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${raleway.variable} ${cormorant.variable} ${abrilFatface.variable} ${playfair.variable} ${poppins.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
