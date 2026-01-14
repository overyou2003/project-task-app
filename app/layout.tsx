import type { Metadata } from "next";
import { Anuphan , Prompt } from "next/font/google"; // นำเข้าฟอนต์ใหม่
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "100"
});

const anuphan = Anuphan({
  variable: "--font-anuphan",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "TaskApp",
  description: "Modern Task Management",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} ${anuphan.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}