import { Content, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mlock",
  description: "mlock : smart luggage station",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Mlock - Smart Luggage Station",
    description: "mlock : smart luggage station",
    url: "https://mlock.in",
    type: "website",
    images: [
      {
        url: "https://mlock.in/favicon.ico",
        alt: "Mlock Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mlock",
              url: "https://mlock.in",
              logo: "https://mlock.in/favicon.ico",
              description: "mlock : smart luggage station",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
