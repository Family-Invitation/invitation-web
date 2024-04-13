import { Metadata } from "next";
import "../../globals.css";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  console.log(params);

  return {
    title: "Generate URL",
    description: "Generate URL for your invitation",
    icons: "https://www.familydecorative.com/logo.png",
    openGraph: {
      title: "Generate URL",
      description: "Generate URL for your invitation",
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
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        /> */}
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script> */}
      </body>
    </html>
  );
}
