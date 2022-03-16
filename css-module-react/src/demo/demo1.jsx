import React from "react";
import style from'./demo1.module.css'

const ButtonDemo1 = () => {
    return (
        <>
            <div className="context">
                <button className={style.button}>Button1</button>按钮1
            </div>
        </>
    )
}

export default ButtonDemo1