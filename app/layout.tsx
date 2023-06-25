import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "app/(shared)/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
