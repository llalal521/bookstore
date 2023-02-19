import React from 'react'
import '../css/Register.css'
import 'antd/dist/antd.css';
import { Input, Form} from 'antd';
import {NavLink} from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';

let emailPattern =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

class RegisterPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: "",
            password2: "",
            e_mail: "",
            exist: 0,
            pattern: 0,
            id: 0
        }
        this.textInput = React.createRef()
    }

    handleUChange = (e) =>{
        this.setState({username: e.target.value})
    }

    handlePChange = (e) =>{
        this.setState({password: e.target.value})
    }

    handlePChange2 = (e) =>{
        this.setState({password2: e.target.value})
    }

    handleEChange = (e) =>{
        this.setState({e_mail: e.target.value, pattern: 0})
    }

    register = () =>{
        if(this.state.password === ""||this.state.username === ""||this.state.e_mail ===""){
            alert("信息不全")
            return
        }
        if(this.state.password !== this.state.password2){
            alert("两次密码输入不一致")
            return
        }
        if(this.state.exist === 1){
            alert("用户名已存在")
            return
        }
        if(this.state.pattern === 1){
            alert("邮箱格式不正确")
            return
        }
        else {
            const data = {username: this.state.username, password: this.state.password, e_mail: this.state.e_mail}
            console.log(data)
            fetch("http://localhost:8080/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then((data) => {
                    localStorage.setItem('id', data.toString())
                    console.log(data)
                    window.location.replace("http://localhost:3000/#/Login")
                });
        }
    }

    handleJChange = (e) => { //在确认框失去焦点时调用
        if (e.target.value !== "" && e.target.value !== this.state.password) {
            alert("两次密码输入不一致")
        }
    }

    judgeExist = (e) => {
        fetch("http://localhost:8080/Judge?username=" + e.target.value, {
            method: 'GET',
        })
            .then(response => response.json())
            .then((data) => {
                if (data === 0) {
                    alert("用户名已存在，抱歉")
                    this.setState({
                        exist: 1
                    })
                }
                else{
                    this.setState({
                        exist: 0
                    })
                }
            })
    }

    testPattern = (e) =>{
        if(this.state.e_mail != "" && !emailPattern.test(this.state.e_mail)){
            alert("邮箱格式不正确！");
            this.setState({
                pattern: 1
            })
        }
    }

    render() {
        return (
            <div id={"bg"}>
                <div id="login-box">
                    <h1>Register</h1>
                    <Input type="text" placeholder="new userName" prefix={<UserOutlined/>} size={"small"}
                           onChange={this.handleUChange.bind(this)} defaultValue={this.state.username} onBlur={this.judgeExist.bind(this)}/>
                    <br/>
                    <br/>
                    <Input type="password" placeholder="your Password" prefix={<LockOutlined/>} size={"small"}
                           onChange={this.handlePChange.bind(this)} defaultValue={this.state.password}/>
                    <br/>
                    <br/>
                    <Input type="password" placeholder="your Password again" prefix={<LockOutlined/>} size={"small"}
                           onChange={this.handlePChange2.bind(this)} defaultValue={this.state.password} ref={this.textInput}
                           onBlur={this.handleJChange.bind(this)}/>
                    <br/>
                    <br/>
                    <Input type="email" placeholder="your e-mail" prefix={<MailOutlined/>} size={"small"}
                               onChange={this.handleEChange.bind(this)} defaultValue={this.state.e_mail} onBlur={this.testPattern.bind(this)}/>
                    <button onClick={() => this.register()}>Register</button>
                </div>
            </div>
        )
    }
}

export default RegisterPage