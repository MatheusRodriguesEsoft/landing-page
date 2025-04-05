import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";

import "./globals.css";
import 'animate.css';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { ActionsProvider } from "@/context/ActionsContext";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Softtor",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${chakraPetch.variable} font-normal flex flex-col items-center bg-white dark:bg-dark-color`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActionsProvider>
            <Header />
            {children}
            <Footer />
          </ActionsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
