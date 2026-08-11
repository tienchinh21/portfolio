import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/providers";
import { geistMono, geistSans, incognito, pixelifySans } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import MotionConfigWrapper from "@/components/motion-config";
import FloatingAvatar from "@/components/floating-avatar";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "portfolio",
    "developer portfolio",
    "creative",
    "fullstack",
    "nextjs",
  ],

  openGraph: {
    images: [
      {
        url: "/og-image.png",
        alt: "Ares's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto font-sans antialiased max-w-full overflow-x-hidden",
          geistSans.variable,
          geistMono.variable,
          incognito.variable,
          pixelifySans.variable,
        )}
      >
        <Providers>
          <SmoothScrollProvider>
            <MotionConfigWrapper>
              <ScrollProgress />
              <BackToTop />
              <FloatingAvatar />
              {children}
            </MotionConfigWrapper>
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
