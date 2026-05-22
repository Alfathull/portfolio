import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miftah Alfathul Rizky — Portfolio",
  description:
    "Full Stack Developer & QA Engineer — Building enterprise-grade web systems end-to-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden leading-[1.7]">{children}</body>
    </html>
  );
}
