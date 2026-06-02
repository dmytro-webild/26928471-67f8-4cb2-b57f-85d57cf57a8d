import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Smash Burger Bonanza - Creative Smash Burgers Food Truck',
  description: 'Experience the juiciest, most creative smash burgers from our retro diner-style food truck. Fresh ingredients, secret sauces, and a super fun vibe!',
  keywords: ["smash burgers, food truck, retro diner, creative burgers, gourmet burgers, street food, delicious burgers, custom burgers, local food"],
  openGraph: {
    "title": "Smash Burger Bonanza - Creative Smash Burgers Food Truck",
    "description": "Experience the juiciest, most creative smash burgers from our retro diner-style food truck. Fresh ingredients, secret sauces, and a super fun vibe!",
    "url": "https://www.smashburgerbonanza.com",
    "siteName": "Smash Burger Bonanza",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-woman-eating-burger-street-cafe-close-up_169016-43761.jpg",
        "alt": "Smash Burger Bonanza food truck with a delicious burger"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Smash Burger Bonanza - Creative Smash Burgers Food Truck",
    "description": "Experience the juiciest, most creative smash burgers from our retro diner-style food truck. Fresh ingredients, secret sauces, and a super fun vibe!",
    "images": [
      "http://img.b2bpic.net/free-photo/young-woman-eating-burger-street-cafe-close-up_169016-43761.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
