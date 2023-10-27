"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";
import { useAuthStore } from "@/context/authUser";
import NavBarRegister from "@/components/NavBarRegister";
import { CreateRoomProvider } from "@/context/createRoom";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

/* export const metadata = {
  title: "Mate Speak",
  description: "Aplicación para practicar conversación en otros idiomas.",
};
 */
export default function RootLayout({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <CreateRoomProvider>
          {isAuthenticated ? <NavBarRegister /> : <NavBar />}
          {children}
          <Footer />
        </CreateRoomProvider>
      </body>
    </html>
  );
}
