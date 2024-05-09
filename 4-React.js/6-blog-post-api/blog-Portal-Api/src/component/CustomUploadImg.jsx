import { Upload } from 'antd'
import React, { useState } from 'react'
const { Dragger } = Upload;

function CustomUploadImg(props) {
    const { customRequestCallBack = () => { } } = props;
    const [fileName , setFileName] = useState(null)
    const customRequest = async (info) => {
        customRequestCallBack(info?.file)
        const basesixtyFourFile = await toBase64(info.file);
        setFileName({
            name: info?.file?.name,
            url:basesixtyFourFile,
        })
    }

  const toBase64 = (file) => {
    if (!file) {
      return;
    }
    return (
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
  
    )
  }

    const UploadProps = {
        name: "customFile",
        multiple: false,
        isImageUrl: true,
        showUploadList: false,
        accept:"*",
        maxCount: 1,
        customRequest: customRequest,
        onDrop: customRequest,
        ...props,
    }
  return (
    <div>
          <Dragger {...UploadProps}>
          <p className="ant-upload-drag-icon"></p>
        <p className="ant-upload-text">
          {fileName?.name ?? "Drag & Drop to Upload File"}
        </p>

        {fileName?.url && (
          <img
            src={fileName?.url}
            alt={fileName?.name}
            width={200}
            style={{ marginTop: 20 }}
          />
        )}

        {props.children}
          </Dragger>
    </div>
  )
}

export default CustomUploadImg
