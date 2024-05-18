import { Button } from 'antd'
import React from 'react'

function CustomButton({type,btnName}) {
  return (
    <>
       <Button className={type}>{btnName}</Button>
    </>
  )
}

export default CustomButton
