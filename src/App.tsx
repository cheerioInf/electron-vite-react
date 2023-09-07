import { useState } from "react";
import Update from "@/components/update";
import logoVite from "./assets/logo-vite.svg";
import logoElectron from "./assets/logo-electron.svg";
import "./App.scss";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

function App() {
  const [count, setCount] = useState(0);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    customRequest: (options) => {
      const { onSuccess, onError, file } = options;
      console.log(file);
      onSuccess!("done");
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} 上传成功`);
      } else if (status === "error") {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  return (
    <div className="App">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或者拖动上传 .xlsx 文件</p>
        <p className="ant-upload-hint">支持单个或多个 .xlsx 文件上传</p>
      </Dragger>
    </div>
  );
}

export default App;
