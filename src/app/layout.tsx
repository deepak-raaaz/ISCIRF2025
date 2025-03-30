import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISCIRF 2025 | International Symposium on Computational Intelligence and Research Frontiers",
  description: "Join us at ISCIRF 2025, an international symposium on computational intelligence and research frontiers. Hosted by Haldia Institute of Technology, featuring keynote speakers and research presentations.",
  keywords: "ISCIRF 2025, computational intelligence, research frontiers, Haldia Institute of Technology, international symposium, conference, keynote speakers",
  authors: [{ name: "Haldia Institute of Technology" }],
  creator: "Haldia Institute of Technology",
  publisher: "Haldia Institute of Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iscirf2025.com",
    siteName: "ISCIRF 2025",
    title: "ISCIRF 2025 | International Symposium on Computational Intelligence and Research Frontiers",
    description: "Join us at ISCIRF 2025, an international symposium on computational intelligence and research frontiers. Hosted by Haldia Institute of Technology.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISCIRF 2025 Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISCIRF 2025 | International Symposium on Computational Intelligence and Research Frontiers",
    description: "Join us at ISCIRF 2025, an international symposium on computational intelligence and research frontiers. Hosted by Haldia Institute of Technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth !light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
