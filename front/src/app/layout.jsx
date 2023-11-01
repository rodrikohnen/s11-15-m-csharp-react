"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
<<<<<<< HEAD
import NavBar from "@/components/NavBar";
import { useAuthStore } from "@/context/authUser";
import NavBarRegister from "@/components/NavBarRegister";
=======
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

>>>>>>> 26e1b37 (add: Improve logic for show the correct navbar)
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

/* export const metadata = {
  title: "Mate Speak",
  description: "Aplicación para practicar conversación en otros idiomas.",
};
 */
export default function RootLayout({ children }) {
  const isAuthenticated = useLoginStore((state) => state.isAuth);

  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={roboto.className}>
<<<<<<< HEAD
        {isAuthenticated ? <NavBarRegister /> : <NavBar />}
        {children}
        <Footer />
=======
=======
      <body className={`flex flex-col ${roboto.className}`}>
>>>>>>> a6024b4 (Change: Correcciones)
        <CreateRoomProvider>
          {isAuthenticated ? <CSRNavbarRegister /> : <CSRNavbar />}
          {children}
          <Footer />
        </CreateRoomProvider>
<<<<<<< HEAD
>>>>>>> 26e1b37 (add: Improve logic for show the correct navbar)
=======
        <ToastContainer />
>>>>>>> bc73c91 (Add: Toastify in Login and Tutor Form)
      </body>
    </html>
  );
}
