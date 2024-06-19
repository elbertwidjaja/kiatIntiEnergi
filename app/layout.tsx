/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./index.scss";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Kiat Inti Energi",
  description: "PT Kiat Inti Energi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KSNQQ26V');
              `,
          }}
        />
      </head>
      <body className="main-theme">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSNQQ26V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
