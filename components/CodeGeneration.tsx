import React, { useState } from "react";
import axios from "axios";
import handler from "@/app/api/conversation/route";
import Empty from "./ui/Empty";
import Loader from "./Loader";

interface CodeGenerationProps {
  query: string;
}

interface EdenAiResponse {
    message: string;
}

const CodeGeneration = async (isLoading: boolean, props: CodeGenerationProps) => {
  const { query } = props;
  const [messages, setMessages] = useState<EdenAiResponse[]>([]);

  const response = await fetch(
    `https://api.edenai.run/v1/pretrained/text/gpt-3?text=${query}`,
    {
      headers: {
        Authorization: `Bearer
                ${process.env.EDEN_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  setMessages([...messages, data]);


  return (
  <div className="mt-4 space-y-4">
    {true && (
        <div className="flex items-center justify-center w-full p-8 rounded-lg bg-muted">
            <Loader/>
        </div>
    )}
    {messages.length === 0 && !isLoading && (
        <div>
            <Empty label="No conversation started." />
        </div>
    )}
    <div>
        
    </div>
  </div>
  );
};

export default CodeGeneration;