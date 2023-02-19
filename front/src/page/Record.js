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

class Record extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasGot: false,
            Record: [],
            columns: [
                {
                    title: 'id' ,
                    render :(text, record, index)=>{
                        return(
                            index+1
                        )
                    }
                },
                {
                    title: 'img' ,
                    dataIndex: 'img',
                    key: 'time',
                    render :(text)=>{
                        return(
                            <img src={text} id={"bookManage"} />
                        )
                    }
                },
                {
                    title: 'title',
                    dataIndex: 'title',
                    key: 'user',
                },
                {
                    title: 'price',
                    dataIndex: 'price',
                    key: 'price',
                    render :(text)=>{
                        return(
                            this.renderPrice(text.toString())
                        )
                    }
                },
                {
                    title: 'author',
                    dataIndex: 'author',
                    key: 'price',
                },
                {
                    title: 'num',
                    dataIndex: 'num',
                    key: 'price',
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
            fetch("http://localhost:8080/Record?id="+localStorage.getItem("id"), {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        Record: data,
                        hasGot: true,
                    })
                })
        }
        else
            return;
    }

    updateRecord = (value)=>{
        let start = value[0].toDate().getTime()
        let end = value[1].toDate().getTime()
        fetch("http://localhost:8080/updateRecord?start="+start+"&end="+end+"&id="+localStorage.getItem("id"), {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    Record: data,
                })
            })
    }

    renderfooter = () =>{
        let price = 0
        let num = 0
        this.state.Record.map((row,rowidx)=>{
            num = num + row.num
            price = price + row.num * row.price
        })
        return(
            <div>
                <p>共{num}本</p>
                <p>总价{this.renderPrice(price.toString())}</p>
            </div>
        )
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
                        onOk={this.updateRecord}
                    />
                </Space>
                <div id={"table"}>
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.Record}
                        footer={
                            this.renderfooter
                        }/>
                </div>
            </div>
        )
    }
}

export default Record;