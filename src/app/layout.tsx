import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { AssetPathStyles } from "@/components/layout/asset-path-styles";
import { Providers } from "@/components/providers";
import "./globals.css";
import "../styles/studio-page.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SprintIQ AI — Objective to Delivery Plan",
  description: "Turn business objectives into initiatives, roadmaps, epics, and executive briefings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full`}>
      <head>
        <AssetPathStyles />
      </head>
      <body className="studio-app h-full overflow-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
