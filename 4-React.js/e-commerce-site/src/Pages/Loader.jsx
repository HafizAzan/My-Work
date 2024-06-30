import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Space, Spin } from 'antd';

function Loader() {
    return (
        <div>
            <div style={{
                width: "100%", height: "100vh", background: "rgba(0, 0, 0, 0.7)", zIndex: "1070",
                position: "fixed",
                top: "0",
                left: "0",
            }}>
                <Spin
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                    }}
                    indicator={
                        <LoadingOutlined
                            style={{
                                fontSize: 48,
                            }}
                            spin
                        />
                    }
                />
            </div>
        </div>
    )
}

export default Loader
