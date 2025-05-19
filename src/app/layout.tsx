import "./globals.css";

import type { Metadata } from "next";
import RootProvider from "./_components/root-provider";

export const metadata: Metadata = {
  title: "가계부",
  description: "가계부를 관리해보자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="h-[100dvh]">
      <body className="antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
