import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--inter",
});
export const metadata = {
  title: "Peps XP ",
  description: "Peps XP | Get your dream decor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  antialiased`}>{children}</body>
    </html>
  );
}
