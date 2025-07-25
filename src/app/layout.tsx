import "@/shared/styles/index.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import RootProvider from "./_components/root-provider";
import { cn } from "@/shared/utils/style";

export const metadata: Metadata = {
  title: "가계부",
  description: "가계부를 관리해보자",
};

const pretendard = localFont({
  src: "../shared/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          pretendard.className,
          "h-[100dvh] antialiased bg-gray-600"
        )}
      >
        <RootProvider>
          <div className="mx-auto max-w-[430px] w-full h-full flex flex-col">
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
