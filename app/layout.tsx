import type { Metadata } from "next";
import { Anuphan , Poppins } from "next/font/google";
import "./globals.css";

// const prompt = Prompt({
//   variable: "--font-prompt",
//   subsets: ["latin"],
//   weight: "100"
// });

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // เลือกความหนาที่ใช้บ่อย
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

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
      <body className={`${poppins.variable} ${anuphan.variable} antialiased min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}