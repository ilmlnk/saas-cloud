"use client"

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function Home() {
  const router = useRouter();

  return (
    <div className="mt-3">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Explore the power of Cloud Computing!
        </h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">
          Create. Generate. Save.
        </p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex items-center justify-between p-4 "
          >
            <div className="flex items-center p-4 transition duration-150 cursor-pointer gap-x-4 border-black/5 hover:shadow-md">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
