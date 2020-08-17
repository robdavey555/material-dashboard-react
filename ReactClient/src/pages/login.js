import React from 'react'
import { signinRedirect } from '../services/userService'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Login() {
    const user = useSelector(state => state.auth.user)

    function login() {
        signinRedirect()
    }

    return (
        (user) ?
            (<Redirect to={'/'} />)
            :
            (
                <Redirect to={signinRedirect()} />
            )
    )
}

export default Login