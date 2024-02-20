"use client";
import { useEffect, useState } from "react";
import Content from "./(content)/content";
import Opening from "./(opening)/opening";
import AOS from "aos";
import { QueryClientProvider, queryClient } from "../../../../react-query";

export default function CreamyLatte({ data }: any) {
  const [showOpening, setShowOpening] = useState(false);
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
          data={data}
        />
        {showContent && <Content showContent={showContent} data={data} />}
      </main>
    </QueryClientProvider>
  );
}
