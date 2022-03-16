import React from "react";

// 接口 父组件App和子组件 Hello
// type 类型
interface Props {
    userName:string
    
}
export const HelloComponent:React.FC<Props> = ({userName}) => {
    return (
        <>

        </>
    )
}