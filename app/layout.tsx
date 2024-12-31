
import "./globals.css";
import { ThemeProvider } from "../components/providers/Theme-Provider";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
export const metadata = {
  title: "Mg Kaung",
  description:
    "I am a versatile full-stack developer skilled in building dynamic, user-centric web applications from front-end design to back-end architecture.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className="bg-background"
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
