import React, { useState } from 'react'
import c from "./Login.module.css"
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [link, setLink] = useState()

    if (user === "" && password === "") {
        setLink("/home")
        console.log(link);
    }

    const click = (e) => {
        e.preventDefault()
        if (user === "" && password === "") {
            console.log(value, password);
        } else {
            prompt("Wrong your username or password")
        }
        console.log(value, password);

    }
    return (
        <div className={c.Login}>
            <form onSubmit={click}>
                <h3>
                    Login
                </h3>
                <hr />
                <div className="r">
                <label><p><span>*</span>&nbsp;Login</p>
                    <Input value={user} onChange={(e) => setUser(e.target.value)} className="ant-input input" type="text" />
                </label><br />
                <br />
                <label>
                    <p><span>*</span>&nbsp;Password</p>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="ant-input input" />
                </label>
                </div>
                <Link to="/home">
                    <center>
                    <Button className='pp' type="primary">Kiris</Button></center>
                </Link>
            </form>
        </div>
    )
}

export default Login