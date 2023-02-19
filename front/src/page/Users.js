import React from 'react';
import 'antd/dist/antd.css';
import Title from "../js/titleFrom";
import SideBar from "../js/SideBar";
import { Card } from 'antd';
import '../css/Books.css'
import {Table, Button} from 'antd'
import {NavLink} from 'react-router-dom'
import SearchBar from "../js/SearchBar";

const {Meta} = Card;

let UserArray =
    [];

let Var_List = []

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserArray: UserArray,
            hasreg: false,
            filterText: '',
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                    editable: true
                },
                {
                    title: '用户名',
                    dataIndex: 'username',
                    key: 'name',
                },
                {
                    title: '邮箱',
                    dataIndex: 'e_mail',
                    key: 'e_mail',
                },
                {
                    title: '权限',
                    dataIndex: 'type',
                    key: 'type',
                    render: (text, record, index) => {
                        if(text === 0)
                            return( "普通用户" )
                        return( "管理员" )
                    }
                },
                {
                    title: "状态",
                    dataIndex: 'status',
                    key: 'state',
                    render: (state, record, index) => {
                        if(state === 0)
                            return(
                                <Button onClick={()=>this.forbidUser(index)}>禁用</Button>
                            )
                        return(<Button type="primary" onClick={()=>this.forbidUser(index)}>解除禁用</Button>)
                    }
                }
            ]
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({filterText: filterText});
    }

    forbidUser = (i) =>{ //禁用或者解禁
        const data = {id: Var_List[i].id}
        fetch("http://localhost:8080/forbidOne", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(data => {
                UserArray = this.state.UserArray
                console.log(data)
                let m = 0
                let n = 0
                UserArray.map((row,rowidx) => {
                    if(row.id === Var_List[i].id){
                        n = m
                    }
                    m++
                })
                console.log(UserArray)
                console.log(n)
                if(data === '0')
                    UserArray[n].status = 0
                if(data === '1')
                    UserArray[n].status = 1
                console.log(UserArray)
                this.setState({
                    UserArray: UserArray
                })
            })
    }

    getUsers = () => {
        if(this.state.hasreg === false) {
            fetch("http://localhost:8080/getUser")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        UserArray: data,
                        hasreg: true
                    })
                    console.log(this.state.UserArray)
                })
        }
        else
            return;
    }

    createList = (text) =>{
        const List = []
        this.state.UserArray.map((row, rowidx)=>{
            if(row.username.indexOf(text) === -1) {
                return;
            }
            List.push(row)
        })
        console.log(List)
        Var_List = List
        return(
            <div id={"table"}>
                <Table columns={this.state.columns} dataSource={List} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}/>
                <Title/>
                <SideBar/>
                {this.getUsers()}
                {this.createList(this.state.filterText)}
            </div>
        )
    }
}

export default Users;