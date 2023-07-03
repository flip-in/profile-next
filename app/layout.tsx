import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "William Price",
  description: "This is my profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
