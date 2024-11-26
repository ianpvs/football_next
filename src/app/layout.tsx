import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saiba Fut",
  description: "Principais notícias de futebol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
