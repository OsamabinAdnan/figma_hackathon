import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "The Morent",
  description: "Cars Rental Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-100vw max-w-full container antialiased`}
      > <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
