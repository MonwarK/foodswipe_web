import { motion } from 'framer-motion';
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { auth } from '../firebase/Firebase';

function LoginScreen(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()

    const login = () => {
        auth.signInWithEmailAndPassword(
            email, password
        )
        .then(() => history.push("/"))
        .catch(err => alert(err))
    }

    const forgotPassword = () => {
        var email = prompt("What is your email?");

        auth.sendPasswordResetEmail(
            email
        )
        .then(() => alert("Please check your email."))
        .catch(err => alert(err))
    }

    return(
        <Container>
            <div className="text-white text-center mb-5">
              <h2>Lets start</h2>
              <p>Or <Strong onClick={() => history.push("/register")}>create an account</Strong> if not registered yet.</p>
            </div>
            <motion.form 
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={1500} 
                onSubmit={e => e.preventDefault()} 
                className="card p-4 mw-600 w-100"
            >
                <Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFWYU39hJtScHrzn1YXv63Fb_51rheL5CcfzLzSFyrvMuR2ghd3NyvrK2oUPEUmrJKCS_gh4AjjcYPoDx6Q:https://scalebranding.com/wp-content/uploads/2021/02/Fresh-Orange-Fruit-Logo.jpg&usqp=CAU"/>
                <div className="mb-3">
                    <label className="d-block">Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="d-block">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                </div>
                <button onClick={login} className="btn btn-success my-3">Login</button>
                <button onClick={forgotPassword} className="btn btn-link">Forgot password?</button>
            </motion.form>
        </Container>
    )
}

export default LoginScreen;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://github.com/MonwarK/FoodSwipe_Bootstrap/blob/main/images/login-background%20(1).jpg?raw=true");
    background-position: center;
    background-size: cover;
`

const Icon = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    background-color: #fff;
    top: -55px;
    left: 0;
    right: 0;
    border: 8px solid #fff;
    border-radius: 100%;
    margin: auto;
`

const Strong = styled.span`
    font-weight: bold;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`
