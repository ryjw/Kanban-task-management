import { Plus_Jakarta_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.scss";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban Task Manager",
  description: "Your first stop for organisation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
