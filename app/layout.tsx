import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opinion Orbit",
  description: "App that can share your opinions freely...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins} min-h-screen flex flex-col`}>
          {/* Navbar */}
          <Navbar />

          {/* Main Section */}
          <main className="flex-1 mx-auto container px-4 py-8">{children}</main>

          {/* Footer */}
          <Footer />

          {/* Toaster */}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
