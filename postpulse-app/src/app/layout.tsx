import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Chivo_Mono as FontMono, Chivo as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontMono = FontMono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "PostPulse App",
  description: "Augment your presence with PostPulse!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
