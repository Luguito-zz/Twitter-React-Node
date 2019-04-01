import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import './Login.scss';

const Login = () => {
    return(
        <div className="main-login-size">
            <div className="arrow-top"></div>
            <div>
                <Button href="http://localhost:8080/oauth_request"
                className="b-circle">
                    <i className="fab fa-twitter"></i> 
                </Button>
            </div>
            <div className="arrow-bottom"></div>
        </div>
    )
}

export default Login;