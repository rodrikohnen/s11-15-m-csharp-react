
import { Roboto } from "next/font/google";

import NavBarRegister from "@/components/NavBarRegister";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function UserLayout({ children }) {
    return (
      <html lang="en">
        <body className={roboto.className}>
          <NavBarRegister />
          {children}
          
        </body>
      </html>
    );
  }
  