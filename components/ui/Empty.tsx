import React, { FC } from "react";
import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty: FC<EmptyProps> = ({ label }: EmptyProps) => {
  return (
  <div className="flex flex-col items-center justify-center h-full p-20">
    <div className="relative h-72 w-72">
        <Image 
        alt="Empty"
        fill 
        src="/empty.png"/>
    </div>
    <p className="text-sm text-center text-muted-foreground">{label}</p>
  </div>
  );
};

export default Empty;
