import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "Family Decorative",
    description: "Solusi Undangan Digital kamu!",
    icons: "https://www.familydecorative.com/logo.png",
    openGraph: {
      title: "Family Decorative",
      description: "Solusi Undangan Digital kamu!",
      //   images: metadata.images,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Josefin+Sans:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </body>
    </html>
  );
}
