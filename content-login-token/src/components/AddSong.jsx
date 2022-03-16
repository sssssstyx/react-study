import React, { useEffect } from 'react'
import { AuthContext } from '../contexts/authContext'

const AddSong = () => {
    const { state, disPatch} = React.useContext(AuthContext)
    useEffect(function() {
        fetch('https://www.fastmock.site/mock/4f8c468ae7202f91850147535d932340/sbt/ali/login',{
            method: 'post',
            headers: {
                Authorization: `${state.token.t}`,
                "Content-Type": "application/json"
            },
            // 请求体
            body: JSON.stringify({
                username: '1111',
                password: '111'
            })
        })
    },[])
    return (
        <>
        
        </>
    )
}

export default AddSong