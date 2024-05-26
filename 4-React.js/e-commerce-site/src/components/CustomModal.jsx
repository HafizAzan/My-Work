import { Drawer, Spin } from 'antd'
import React from 'react'

function CustomModal({ setLoading, loading, open, setOpen }) {
    return (
        <>
            <Drawer
                open={open}
                title={<p>Products</p>}
                placement="right"
                onClose={() => setOpen(false)}
            >
                {loading ? (
                    <Spin style={{ textAlign: "center", width: "100%" }} />
                ) : (
                    <div style={{ width: "55%" }}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </div>
                )}
            </Drawer>

        </>
    )
}

export default CustomModal
