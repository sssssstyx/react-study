import React from 'react';

export const AuthContext = React.createContext();

export const authInitialState = {
    isAuthenticated: false,
    user: null,
    token: null  // 每次请求时都会带上
}

export const authReducer = (state,action) => {
    switch(action.type) {
        case "LOGIN":
            // localStorage
            localStorage.setItem("user",JSON.stringify(action.payload.user))
            localStorage.setItem("user",JSON.stringify(action.payload.token))
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token // 令牌
            }
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        
    }
}