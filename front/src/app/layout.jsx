import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={roboto.className}>{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
