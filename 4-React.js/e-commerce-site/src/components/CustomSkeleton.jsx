import React, { useState } from 'react';
import { DotChartOutlined } from '@ant-design/icons';
import { Divider, Skeleton, Space } from 'antd';
const CustomSkeletonLoader = ({ loader }) => {
    return (
        <>{loader && (
            <>
                <Space>
                    <Skeleton.Image />
                </Space>
                <br />
                <Skeleton.Button />
                <br />
                <Skeleton.Input />
            </>
        )}
        </>

    );
};
export default CustomSkeletonLoader;