import { Heading } from "@/components/Heading";
import { Cog } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Heading
        title="Settings"
        description=""
        icon={Cog}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
    </div>
  );
}
