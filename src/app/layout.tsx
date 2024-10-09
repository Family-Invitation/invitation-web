import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
