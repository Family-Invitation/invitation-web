"use client";

import Opening from "../../(opening)/opening";
import Content from "../../(content)/content";
import { useEffect, useState } from "react";
import { Kafka } from "kafkajs";
import useWebSocket, { useEventSource } from "react-use-websocket";
import { QueryClientProvider, queryClient } from "../../../../react-query";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// const kafka = new Kafka({
//   clientId: "next",
//   brokers: ["128.199.143.112:39092"],
// });

// const consumer = kafka.consumer({
//   groupId: "qa-group",
// });
// const run = async function (cb: (v: string) => void) {
//   await consumer.connect();
//   await consumer.subscribe({ topic: "quickstart-events", fromBeginning: true });

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       console.log({
//         partition,
//         offset: message.offset,
//         value: message.value?.toString(),
//       });

//       const v = message.value?.toString();

//       if (v) {
//         cb(v);
//       }
//     },
//   });
// };

export default function Page() {
  const [showOpening, setShowOpening] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Opening
          showOpening={showOpening}
          showContent={showContent}
          setShowOpening={setShowOpening}
          setShowContent={setShowContent}
        />
        {showContent && <Content showContent={showContent} />}
      </main>
    </QueryClientProvider>
  );
}
