import React from 'react'
import {NavLink} from "react-router-dom";
import Title from "./titleFrom";
import '../css/SideBar.css'
import {Menu} from 'antd'
import 'antd/dist/antd.css'
import {
    UserOutlined,
    ShoppingOutlined,
    SearchOutlined,
    ReadOutlined
} from '@ant-design/icons';

class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }
    renderUser = () => {
        return(
            <div id = "sideBar">
                <Menu style={{ width: 150 }}
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                >
                    <Menu.Item key="1" icon={<ReadOutlined />}>
                        <NavLink to={{pathname: "/Login"}}></NavLink>
                        Books
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingOutlined />}>
                        <NavLink to={{pathname: "/MyCart"}}></  NavLink>
                        My Cart
                    </Menu.Item>
                    <Menu.Item key = "3" icon={<UserOutlined/>}>
                        <NavLink to={{pathname: "/Myorder"}}></NavLink>
                        My Order
                    </Menu.Item>
                    <Menu.Item key = "4" icon={<SearchOutlined/>}>
                        <NavLink to={{pathname: "/Record"}}/>
                        Record
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
    renderManage = () =>{
        return(
            <div id = "sideBar">
                <Menu style={{ width: 150 }}
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                >
                    <Menu.Item key="1" icon={<ReadOutlined />}>
                        <NavLink to={{pathname: "/BookManage"}}></NavLink>
                        Books
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingOutlined />}>
                        <NavLink to={{pathname: "/UserManage"}}></  NavLink>
                        Users
                    </Menu.Item>
                    <Menu.Item key = "3" icon={<UserOutlined/>}>
                        <NavLink to={{pathname: "/OrderManage"}}></NavLink>
                        Orders
                    </Menu.Item>
                    <Menu.Item key = "4" icon={<SearchOutlined/>}>
                        <NavLink to={{pathname: "/BookRange"}}/>
                        BookRange
                    </Menu.Item>
                    <Menu.Item key = "5" icon={<SearchOutlined/>}>
                        <NavLink to={{pathname: "/UserRange"}}/>
                        UserRange
                    </Menu.Item>
                </Menu>
            </div>
        );
    }

    render = () =>{
        console.log(localStorage.getItem("type"))
        if(localStorage.getItem("type") === '1')
            return(
                <div>
                    {this.renderManage()}
                </div>
            )
        else
            return(
                <div>
                    {this.renderUser()}
                </div>
            )
    }
}

export default SideBar