import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/context/Providers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthyStellar | Decentralized Medical Records",
  description: "Secure, decentralized medical record management powered by the Stellar network.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}
            style={{ background: 'var(--bg-base)', color: 'var(--text-1)', minHeight: '100vh' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
