import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3rd + Taylor | B2B Growth Agency",
  description: "3rd + Taylor helps B2B tech companies build pipeline, convert buyers, and scale revenue with the Campaign Engine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.className} ${bricolage.variable}`}>
      <head>
        {/* GHL External Form Tracking — auto-captures native form submissions */}
        {/* Confirm the exact script src from GHL: Settings → Tracking Scripts */}
        <Script
          id="ghl-tracking"
          src="https://cdn.leadconnectorhq.com/loader.js"
          data-resources-url="https://cdn.leadconnectorhq.com/loader.js"
          data-location-id="g5Zvn5MGlJX8DOVSpLCI"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKV2XC6D');`,
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKV2XC6D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
