"use client";

import DragAndDropFileUpload from "@/components/DragAndDropFile";
import { Heading } from "@/components/Heading";
import { LanguagesIcon } from "lucide-react";
import { useState } from "react";
import UploadedFilesPanel from "@/components/UploadedFilePanel";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const handleFilesUpload = (files: FileList) => {
    // send files on server
    const fileList = Array.from(files);
    fileList.forEach((file) => {
      console.log("Загружен файл:", file.name);
    });
    setUploadedFiles(fileList);
  };
  return (
    <div>
      <Heading
        title="Document Translation"
        description="Advanced document translator."
        icon={LanguagesIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="flex flex-col items-center space-y-4">
        <DragAndDropFileUpload onFilesUpload={handleFilesUpload} />
        {uploadedFiles.length > 0 && (
        <div className="p-4 border rounded-lg shadow-md w-[70%]">
            <UploadedFilesPanel uploadedFiles={uploadedFiles} />
            <Button variant="destructive" className="flex mt-4 list-disc">Delete all Files</Button>
            <Button className="flex mt-4 space-x-4 list-disc flex-inline">Translate</Button>
        </div>
        )}
      </div>
    </div>
  );
}
