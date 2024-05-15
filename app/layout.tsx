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
      <body className="main-theme">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
