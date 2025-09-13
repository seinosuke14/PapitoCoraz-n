import type { Metadata } from "next";
import "../styles/globals.scss";
import Navbar from "@/sections/home/navbar/navbar";


export const metadata: Metadata = {
  title: "Papito Corazon",
  description: "Aplicacion web, enfocada en la informacion de pension de alimentos",
  icons: {
    icon: '/images/papitocorazonLogo.png',         
    apple: '/images/papitocorazonLogo.png',        
    shortcut: '/images/papitocorazonLogo.png', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
