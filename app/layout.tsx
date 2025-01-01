import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import "easymde/dist/easymde.min.css"

const workSans = localFont({
    src: [
        {
            path: './fonts/workSans/WorkSans-Black.ttf',
            weight: "900",
            style: "normal"
        },
        {
            path: './fonts/workSans/WorkSans-ExtraBold.ttf',
            weight: "800",
            style: "normal"
        },
        {
            path: './fonts/workSans/WorkSans-Bold.ttf',
            weight: "700",
            style: "normal"
        },
        {
            path: './fonts/workSans/WorkSans-SemiBold.ttf',
            weight: "600",
            style: "normal"
        },
        {
            path: './fonts/workSans/WorkSans-Medium.ttf',
            weight: "500",
            style: "normal"
        },
        {
            path: './fonts/workSans/WorkSans-Regular.ttf',
            weight: "400",
            style: "normal"
        },
    ],
    variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: "SHOP.CO - Ecommerce website",
  description: "Shop the Best Deals on Electronics, Fashion & More | MyStore",
    openGraph: {
        title: "SHOP.CO - Ecommerce website",
        description: "Discover the latest electronics, fashion, and home goods at unbeatable prices.",
        url: "https://sequence-expense-tracker.vercel.app/",
    },
    twitter: {
        card: "summary_large_image",
        title: "SHOP.CO - Ecommerce website",
        description: "Shop the Best Deals on Electronics, Fashion & More | MyStore",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${workSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
