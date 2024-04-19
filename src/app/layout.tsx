import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource-variable/pixelify-sans";
import "./globals.css";
import { Container } from "react-bootstrap";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "CS Career Quiz",
  description: "Find out the best CS career for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={
            "pt-5 d-flex align-items-center justify-content-center flex-column"
          }
        >
          <Container id="text-container">{children}</Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
