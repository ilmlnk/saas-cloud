import React, { useState } from 'react';

interface MultiFileUploadProps {
  onFilesUpload: (files: FileList) => void;
}

const MultiFileUpload: React.FC<MultiFileUploadProps> = ({ onFilesUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    onFilesUpload(files);
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onFilesUpload(files);
    }
  };

  return (
    <div
      className={`flex flex-col items-center w-[70%] p-8 border-2 border-dashed rounded-lg ${
        isDragging ? 'border-blue-500' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging ? (
        <p className="text-blue-500">Drop files here</p>
      ) : (
        <>
          <p className="mb-4 text-gray-500">Drop files here or</p>
          <label className="px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer">
            Choose files
            <input type="file" className="hidden" multiple onChange={handleFileInput} />
          </label>
        </>
      )}
    </div>
  );
};

export default MultiFileUpload;
