import FloatingIcons from "@/components/FloatingIcons";
import "./globals.css";
import { Montserrat } from "next/font/google";

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
      <body className={`${montserrat.className}  antialiased`}>
        {children}
        <FloatingIcons />
      </body>
    </html>
  );
}
