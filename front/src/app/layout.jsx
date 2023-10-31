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


const CSRNavbarRegister = dynamic(() => import("@/components/NavBarRegister"), {
  ssr: false,
});

const CSRNavbar = dynamic(() => import("@/components/NavBar"), {
  ssr: false,
})

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
      <body className={roboto.className}>
<<<<<<< HEAD
        {isAuthenticated ? <NavBarRegister /> : <NavBar />}
        {children}
        <Footer />
=======
        <CreateRoomProvider>
          {isAuthenticated ? <CSRNavbarRegister /> : <CSRNavbar />}
          {children}
          <Footer />
        </CreateRoomProvider>
>>>>>>> 26e1b37 (add: Improve logic for show the correct navbar)
      </body>
    </html>
  );
}
