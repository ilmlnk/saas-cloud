import React from "react";
import { Card } from "./ui/Card";
import FilePreviewBlock from "./ui/FilePreviewBlock";
import { useState } from "react";
import { Button } from "./ui/Button";

interface UploadedFilesPanelProps {
  uploadedFiles: File[];
}

const UploadedFilesPanel: React.FC<UploadedFilesPanelProps> = ({
  uploadedFiles,
}) => {

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Uploaded files</h2>
      <div className="flex p-8 list-disc border rounded-lg gap-x-4 bg-slate-300">
        {uploadedFiles.map((file, index) => (
          <FilePreviewBlock file={file} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UploadedFilesPanel;
