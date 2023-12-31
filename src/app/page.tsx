"use client";

import Opening from "./(opening)/opening";
import Content from "./(content)/content";
import { useEffect, useState } from "react";
import { Kafka } from "kafkajs";
import useWebSocket, { useEventSource } from "react-use-websocket";

const kafka = new Kafka({
  clientId: "next",
  brokers: ["128.199.143.112:39092"],
});

const consumer = kafka.consumer({
  groupId: "qa-group",
});
const run = async function (cb: (v: string) => void) {
  await consumer.connect();
  await consumer.subscribe({ topic: "quickstart-events", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value?.toString(),
      });

      const v = message.value?.toString();

      if (v) {
        cb(v);
      }
    },
  });
};

export default function Page() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {}, []);

  return (
    <main>
      {showOpening && <Opening setShowOpening={setShowOpening} />}
      <Content />
    </main>
  );
}
