import React from 'react';
import { Button, Upload, UploadFile, notification } from "antd";

export const UploadButton: React.FC = () => {
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const onUploadSuccess = async (options: any) => {
        try {
            // await Api.files.uploadFile(options);

            setFileList([]);

            window.location.reload();
        } catch (err) {
            notification.error({
                message: "Error!",
                description: "It is not possible to upload files!",
                duration: 2,
            });
        }
    }

    return (
        <div>

        </div>
    );
}