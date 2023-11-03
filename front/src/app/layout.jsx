"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
import { CreateRoomProvider } from "@/context/createRoom";
import useLoginStore from "@/context/loginStore";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CSRNavbarRegister = dynamic(() => import("@/components/NavBarRegister"), {
  ssr: false,
});

const CSRNavbar = dynamic(() => import("@/components/NavBar"), {
  ssr: false,
});

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

/* export const metadata = {
  title: "Mate Speak",
  description: "Aplicación para practicar conversación en otros idiomas.",
};
 */
export default function RootLayout({ children }) {
  const isAuthenticated = useLoginStore((state) => state.isAuth);
  const isAuthenticated = useLoginStore((state) => state.isAuth);

  return (
    <html lang="en">
      <body className={`flex flex-col ${roboto.className}`}>
        <CreateRoomProvider>
          {isAuthenticated ? <CSRNavbarRegister /> : <CSRNavbar />}
          {children}
          <Footer />
        </CreateRoomProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
