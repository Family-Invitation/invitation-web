import { Metadata } from "next";
import "../../globals.css";
import axios from "axios";
import { baseUrl } from "@/lib/constants";
// ..

export async function generateMetadata({ params }: any): Promise<Metadata> {
  console.log(params);

  try {
    const {
      data: {
        data: { metadata },
      },
    } = await axios.get(
      baseUrl + "/v1/invitation/" + params.slug + "/metadata"
    );

    console.log(metadata);
    return {
      title: metadata.title,
      description: metadata.description,
      icons: "https://www.familydecorative.com/logo.png",
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        images: metadata.images,
      },
    };
  } catch (error) {
    return {
      title: "Family Decorative",
      description: "",
      icons: "https://www.familydecorative.com/logo.png",
    };
  }
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
