import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const play_pen = Playpen_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paws and Claws Adoption Emporium",
  description: "A website for adopting pets. Please, adopt!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={play_pen.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
