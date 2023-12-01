import classes from './Login.module.css'
import {Form, Button} from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
const Login = ({admin, changeAdmin}) => {

    const [reload, changeReload] = useState(0);
    const history = useHistory()
    
    // useEffect(()=>{
    //     fetch(`${process.env.REACT_APP_FETCH_LINK}/checkAdmin`, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }, 
    //         credentials: 'include'
    //     }).then((response)=>{
    //         return response.json()
    //     }).then((response)=>{
    //         console.log(response)
    //         if(response.status === true){
    //             history.push('/admin')
    //         }
    //     })
    // }, [reload])

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const obj = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        fetch(`${process.env.REACT_APP_FETCH_LINK}/loginAdmin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
            credentials: 'include'
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response);
            changeAdmin(true)
            history.push('/admin')
            // changeReload((prevState)=>{
            //     return prevState = prevState + 1
            // })
        })
    }

    return (
        
        <div className={classes.parentDiv}>
            <Form>
                <h3>Login/Signup Form</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={usernameRef} type="text" placeholder="Enter Username" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={submitHandler} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Login