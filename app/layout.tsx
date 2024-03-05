import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Newsletter Sign-up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-screen", roboto.className)}>
        <div className="background-container bg-pale-navy flex min-h-screen items-center justify-center text-dark-navy">
          <div className="card-conainer flex items-stretch justify-stretch">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
