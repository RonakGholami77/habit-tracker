import type { Metadata } from "next";
import "./globals.css";
import "@/styles/typography.css";
import HeaderComponent from "@/components/header/header.component";

export const metadata: Metadata = {
  title: "Tracker",
  description: "habit tracker ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <header>
          <HeaderComponent />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}