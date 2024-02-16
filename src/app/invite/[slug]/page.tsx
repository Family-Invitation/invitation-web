"use client";

import Opening from "../../(templates)/(green-leaves)/(opening)/opening";
import Content from "../../(templates)/(green-leaves)/(content)/content";
import { useEffect, useState } from "react";
import { Kafka } from "kafkajs";
import useWebSocket, { useEventSource } from "react-use-websocket";
import { QueryClientProvider, queryClient } from "../../../../react-query";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useGetDataV2 } from "@/hooks/useGetData";
import GreenLeaves from "@/app/(templates)/(green-leaves)/green-leaves";

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

  return (
    <QueryClientProvider client={queryClient}>
      {TemplateSelection(data)}
    </QueryClientProvider>
  );
}

function TemplateSelection(data: any) {
  if (!data) {
    return <></>;
  }

  switch (data.template as string) {
    case "green-leaves":
      return <GreenLeaves data={data} />;
  }

  return <></>;
}
