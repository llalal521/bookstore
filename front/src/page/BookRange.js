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

class BookRange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasGot: false,
            BookRange: [],
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
            fetch("http://localhost:8080/BookRange", {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        BookRange: data,
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
        fetch("http://localhost:8080/updateBookRange?start="+start+"&end="+end, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    BookRange: data,
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
                    dataSource={this.state.BookRange} />
                </div>
                </div>
        )
    }
}

export default BookRange;