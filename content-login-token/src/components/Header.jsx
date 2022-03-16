import React from 'react'
import { AuthContext } from '../contexts/authContext'

const Header = () => {
    const { state,disPatch } = React.useContext(AuthContext)
    // console.log(state);
    return (
        <>
        Header
        {state.isAuthenticated?(<div>登陆了        
            <button onClick={() => disPatch({
            type: 'LOGOUT'
        })}>退出</button></div>)
        
        :(<div>未登录</div>)}

        </>
    )
}

export default Header