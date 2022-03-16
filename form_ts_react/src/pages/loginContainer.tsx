import REact, { useEffect, useState } from 'react'
import { isValidLogin } from '../api/login'
import { LoginEntity } from '../model/login'
import { useHistory } from 'react-router-dom'
// @material-ui react-native android
import { Card, CardHeader,CardContent }from '@material-ui/core'
import { createStyles,makeStyles } from '@material-ui/styles'
import { LoginComponent } from './login.component'

const useFormStyle = makeStyles((theme) => 
    createStyles({
        card: {
            maxwidth: 400,
            margin: "0 auto"
        }
    })
)
export const LoginContainer = () => {
    // 单页应用接管路由的一切
    const history = useHistory()
    const classes = useFormStyle()
    // useEffect(() => {
    //     handleLogin({
    //         login: 'admin',
    //         password: 'test'
    //     })
    // })

    const loginSuccessed = (isValid:boolean) => {
        if(isValid) {
            history.push('/pageB')
        } else {
            console.log('出错了');
            
        }
    }
    const handleLogin = (login:LoginEntity) => {
        // isValidLogin(login)
        // let loginSuccessed = await isValidLogin(login)
        isValidLogin(login).then(loginSuccessed)
    }
    return (
        <>
        <Card className={classes.card}>
            <CardHeader title="login" />
            <CardContent>
                <LoginComponent onLogin={handleLogin} />
            </CardContent>
        </Card>
        </>
      )
}