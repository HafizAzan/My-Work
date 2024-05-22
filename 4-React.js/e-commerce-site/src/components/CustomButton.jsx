import { Button } from 'antd';
import React from 'react';

function CustomButton({ show, className, type, btnName, onClick, htmlType, loading }) {
  return (
    <>
      {show === false ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            htmlType={htmlType}
            className={className}
            type={type}
            loading={loading}
            onClick={onClick}
          >
            {btnName}
            <span style={{ paddingLeft: "10px" }}>&rarr;</span>
          </Button>

        </div>
      ) : (
        <Button
          htmlType={htmlType}
          className={className}
          type={type}
          loading={loading}
          onClick={onClick}
        >
          {btnName}
        </Button>
      )}
    </>
  );
}

export default CustomButton;
