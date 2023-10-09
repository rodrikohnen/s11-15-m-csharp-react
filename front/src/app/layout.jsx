import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mate Speak",
  description: "Aplicación para practicar conversación en otros idiomas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <NavBar />
      </header>
      <body className={inter.className}>{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
