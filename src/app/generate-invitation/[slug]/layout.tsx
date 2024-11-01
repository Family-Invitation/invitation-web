import { Metadata } from "next";
import "../../globals.css";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "Generate Invitation",
    description: "Generate Invitation for your invitation",
    icons: "https://www.familydecorative.com/logo.png",
    openGraph: {
      title: "Generate Invitation",
      description: "Generate Invitation for your invitation",
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
    <body>
      {/* <Navbar /> */}
      {children}
      {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script> */}
    </body>
  );
}
