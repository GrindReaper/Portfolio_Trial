
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Paul Tiwan | IT Professional",
  description:
    "Portfolio of Aaron Paul Tiwan, IT Professional specializing in technology, systems, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
