import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIBHAVA - Innovation Summit 2025 | SOE CUSAT",
  description: "Innovation Summit 2025 by School of Engineering, CUSAT",
  keywords: ["innovation", "summit", "CUSAT", "engineering", "technology"],
  icons: {
    icon: [
      { url: "/favicon/arw.svg", type: "image/svg+xml" },
      { url: "/favicon/arw.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon/arw.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/arw.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white`}>
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
