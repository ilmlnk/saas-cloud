import React from 'react';
import { Button } from './Button';

interface FilePreviewBlockProps {
  file: File;
}

const FilePreviewBlock: React.FC<FilePreviewBlockProps> = ({ file }) => {
  const isImage = file.type.startsWith('image/');
  const isText = file.type.startsWith('text/');

  return (
    <div className="p-4 border rounded-lg bg-slate-200">
      <h2 className="mb-4 text-lg font-semibold">{file.name}</h2>
      <Button variant="destructive">Delete</Button>
    </div>
  );
};

export default FilePreviewBlock;
