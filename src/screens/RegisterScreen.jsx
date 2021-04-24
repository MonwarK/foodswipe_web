import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { auth } from '../firebase/Firebase'

function RegisterScreen() {

    const history = useHistory();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const register = () => {
        if(password === confirmPassword){
            auth.createUserWithEmailAndPassword(
                email,
                password
            )
            .then(() => history.push("/"))
            .catch(err => alert(err))
        } else{
            alert("Passwords do not match")
        }
    }

    return (
        <Container>
            <motion.form
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={1500} 
                onSubmit={e => e.preventDefault()} 
                className="card p-4 mw-600 w-100"
            >
                <h2 className="text-center">Register</h2>
                <div className="mb-3">
                    <label className="d-block">First name</label>
                    <input required type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="d-block">Surname</label>
                    <input required type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="d-block">Email</label>
                    <input required onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="d-block">Password</label>
                    <input required onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="d-block">Confirm Password</label>
                    <input required onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control" />
                </div>
                <button className="btn btn-success my-3" onClick={register}>Register</button>
                <button className="btn btn-link" onClick={() => history.push("/login")}>Already have an account? Click here to sign in</button>
            </motion.form>
        </Container>
    )
}

export default RegisterScreen

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