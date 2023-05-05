import Footer from "./components/navigation/footer/Footer";
import TopNavigation from "./components/navigation/header/TopNavigation";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Lulo",
  description: "The missing community platform for Open Source",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-slate-50 dark:bg-neutral-950'>
        <TopNavigation />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
