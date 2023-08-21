import { Heading } from "@/components/Heading";
import { Cloud } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Heading
        title="Cloud Storage"
        description="Save all what you want."
        icon={Cloud}
        iconColor="text-violet-700"
        bgColor="bg-violet-700/10"
      />
    </div>
  );
}
