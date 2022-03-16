import React from "react"
import { LoginEntity } from "../model/login"

interface PropsForm {
    onLogin: (login:LoginEntity) => void
}

export const LoginComponent: React.FC<PropsForm> = () => {
    return (
        <>
        </>
    )
}