import type { Metadata } from "next";
import type { Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const baskerville = localFont({
  src: "./fonts/baskerville-display-pt.otf",
  variable: "--font-baskerville",
  weight: "100 900",
})
const robotoSlab = localFont({
  src: "./fonts/RobotoSlab-VariableFont_wght.ttf",
  variable: "--font-roboto-slab",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Zun Yan",
  description: "ресторан китайской кухни",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baskerville.variable} ${robotoSlab.variable} antialiased`}
      >
        <main className="scroll-smooth">
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}// className="container mx-auto"
