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
const evolventa = localFont({
  src: "./fonts/Evolventa-Regular.ttf",
  variable: "--font-evolventa",
  weight: "100 900"
})
const evolventaBold = localFont({
  src: "./fonts/Evolventa-Bold.ttf",
  variable: "--font-evolventa-bold",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Zun Yan - ресторан китайской кухни",
  description: "Ресторан Zun Yan — это уголок настоящего Китая в самом сердце Владивостока, неподалёку от многофункционального комплекса «Аквамарин». С мая 2024 года мы дарим нашим гостям уникальную возможность насладиться атмосферой восточного гостеприимства.",
  keywords: "Zun Yan, Зун Ян, ресторан, китайская кухня, ресторан китайской кухни, Го Боа Жоу, Губаджоу, бар, морепродукты, устрицы, крабы, морепродукты из аквариума, свинина в кисло-сладком соусе, курица в кисло сладком соусе, креветки, кальмар, салат из куриного мяса, свиной язык ,салат Харбин, харбинский салат, яблоки в карамели, чак чак, чак чак из яйца, рис, рис с овощами, ресторан китайской кухни во Владивостоке",
  robots: "index,follow",
  openGraph: {
    title: 'Zun Yan - ресторан китайской кухни',
    description: "Ресторан Zun Yan — это уголок настоящего Китая в самом сердце Владивостока, неподалёку от многофункционального комплекса «Аквамарин». С мая 2024 года мы дарим нашим гостям уникальную возможность насладиться атмосферой восточного гостеприимства.",
  },

};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

//image alt description


//JSON-LD ?

//robots gotovo
//sitemap gotovo
//metategs gotovo
//og description gotovo
//<meta name="robots" content="index,follow"> gotovo
//keywords gotovo
//title gotovo
//descripton gotovo
//code seo gotovo

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${evolventa.variable} ${evolventaBold.variable} ${geistMono.variable} ${baskerville.variable} ${robotoSlab.variable} antialiased`}
      >
        <main className="scroll-smooth">
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}