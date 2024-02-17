"use client";

import { useEffect, useState } from "react";

import { useGetDataV2 } from "@/hooks/useGetData";
import GreenLeaves from "@/app/(templates)/(green-leaves)/green-leaves";
import ReactLoading from "react-loading";

export default function Page({ params }: any) {
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  async function getData(slug: string) {
    try {
      const { data } = await useGetDataV2(slug);
      setData(data);
    } catch (error) {
      console.log("err", error);
      setNotFound(true);
    }
  }

  useEffect(() => {
    getData(params.slug);
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  return <TemplateSelection data={data} />;
}

function TemplateSelection({ data }: any) {
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // console.log("Test", data);
    if (data) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
  }, [data]);

  if (!isloaded) {
    return <Loading />;
  }

  switch (data.template as string) {
    case "green-leaves":
      return <GreenLeaves data={data} />;
  }

  return <NotFound />;
}

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff2da",
      }}
    >
      <ReactLoading delay={0} type="bubbles" color="rgb(128, 80, 68)" />
    </div>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000000",
        color: "white",
      }}
    >
      <h1>404 | Not Found</h1>
    </div>
  );
}
