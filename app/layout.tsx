import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebula — The operating system for AI-native teams",
  description:
    "Build, deploy, and observe production-grade agent workflows in minutes without the glue code.",
  metadataBase: new URL("https://nebula.example.com"),
  openGraph: {
    title: "Nebula — The operating system for AI-native teams",
    description:
      "Build, deploy, and observe production-grade agent workflows in minutes.",
    type: "website",
  },
};

// SSR markup ships with .dark on <html> (the default). This script only removes
// it when the user has explicitly chosen light — so first-visit and returning
// dark-mode users see no flash.
const themeInitScript = `
(function() {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
