import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tixly",
  description: "Ticketing Platform App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ConvexClientProvider>
          <ClerkProvider>
            <Header />
            <SyncUserWithConvex />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
