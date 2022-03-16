import React, { useEffect } from 'react'
import './App.css'
import { AuthContext, authInitialState, authReducer, } from './contexts/authContext'
import Header from './components/Header'
import AddSong from './components/AddSong'

function App() {
const [state,disPatch] = React.useReducer(authReducer,authInitialState);
useEffect(() => {
  setTimeout(() => {
    disPatch({type: "LOGIN",payload: {user: 'njy',token: {t: '11111'}}})
  },1000)
  
},[])
  return (
    <AuthContext.Provider value={{
      state,
      disPatch
    }}>
    <Header />
    {state.isAuthenticated && <AddSong />}
    </AuthContext.Provider>
  )
}

export default App
