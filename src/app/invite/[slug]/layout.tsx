import { Metadata } from "next";
import "../../globals.css";
import axios from "axios";
import { baseUrl } from "@/lib/constants";
import { Suspense } from "react";
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
  return <Suspense fallback={<div></div>}>{children}</Suspense>;
}
