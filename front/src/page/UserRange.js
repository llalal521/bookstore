import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/BookRange.css'
import Title from "../js/titleFrom";
import SideBar from "../js/SideBar";
import {Button, DatePicker, Space, Table} from 'antd';
import {NavLink} from "react-router-dom";
import {BookOutlined} from "@ant-design/icons";

const { RangePicker } = DatePicker;

class UserRange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasGot: false,
            UserRange: [],
            columns: [
                {
                    title: 'range' ,
                    render :(text, record, index)=>{
                        return(
                            index+1
                        )
                    }
                },
                {
                    title: 'username' ,
                    dataIndex: 'username',
                    key: 'time',
                },
                {
                    title: 'total_price',
                    dataIndex: 'total_Price',
                    key: 'price',
                    render :(text)=>{
                        return(
                            this.renderPrice(text.toString())
                        )
                    }
                }
            ],
        }
    }

    renderPrice = (priceString) =>{
        let i = 0
        let a = '.'
        let array = []
        let result
        array.push('$')
        let String = priceString
        for(i;i < String.length; ++i){
            if(i === String.length - 2) {
                array.push(a);
                array.push(String[i]);
            }
            else
                array.push(String[i]);
        }
        result = array.join('')
        return result
    }

    getInitialRange=()=>{
        if(this.state.hasGot === false) {
            fetch("http://localhost:8080/UserRange", {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        UserRange: data,
                        hasGot: true,
                    })
                })
        }
        else
            return;
    }

    updateRange = (value)=>{
        let start = value[0].toDate().getTime()
        let end = value[1].toDate().getTime()
        fetch("http://localhost:8080/updateUserRange?start="+start+"&end="+end, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    UserRange: data,
                })
            })
    }

    render = () => {
        return (
            <div>
                {console.log(this)}
                {this.getInitialRange()}
                <Title/>
                <SideBar/>
                <Space id={"time"} direction="vertical" size={12}>
                    <RangePicker
                        showTime={{format: 'HH:mm'}}
                        format="YYYY-MM-DD HH:mm"
                        onOk={this.updateRange}
                    />
                </Space>
                <div id={"table"}>
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.UserRange} />
                </div>
            </div>
        )
    }
}

export default UserRange;