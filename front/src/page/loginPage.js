import React from 'react'
import '../css/Login.css'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import {NavLink, Prompt} from "react-router-dom";
import { UserOutlined, LockOutlined} from '@ant-design/icons';


class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            id: 0,
            username: "",
            password: ""
        }
    }

    handleUChange = (e) =>{
        this.setState({username: e.target.value})
    }

    handlePChange = (e) =>{
        this.setState({password: e.target.value})
    }

    handleLogin = (username,password) =>{
        const data = {username, password}
        fetch("http://localhost:8080/Login?username="+username+"&password="+password, {
            method: 'GET',
        })
            .then(response=>response.json())
            .then(data => {
                console.log(data)
                if(data.id !== -1) {
                    if(data.status === 1){
                        window.location.replace("http://localhost:3000")
                        alert("用户已被禁用")
                    }
                    else{
                        localStorage.setItem("id", data.id)
                        localStorage.setItem("type", data.type)
                        console.log(data)
                        if(data.type === 0)
                             window.location.assign("http://localhost:3000/#/Login")
                        else    window.location.assign("http://localhost:3000/#/BookManage")
                    }
                }
                else{
                    if(data.id === -1) {
                        this.setState({id: data})
                        window.location.replace("http://localhost:3000")
                        alert("Please identify your information!")
                    }
                }
            })
    }

    render() {
        return (
            <div id={"bg"}>
                <div id="login-box">
                    <h1>Login</h1>
                        <Input type="text" placeholder="UserName" prefix={<UserOutlined />}
                               onChange={this.handleUChange.bind(this)} defaultValue={this.state.username}/>
                        <br/>
                        <br/>
                        <Input type="password" placeholder="UserPassword" prefix={<LockOutlined/>}
                               onChange={this.handlePChange.bind(this)} defaultValue={this.state.password}/>
                        <br/>
                        <br/>
                        <a href={'/'}>forget password?</a>
                    <br/>
                        <button onClick={()=>this.handleLogin(this.state.username, this.state.password)}>Sign in</button>
                    <div id = "ask">
                        <NavLink to={'Register'}>
                            <a>register now!</a>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage