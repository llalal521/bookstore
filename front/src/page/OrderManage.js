import React from 'react';
import 'antd/dist/antd.css';
import Title from "../js/titleFrom";
import SideBar from "../js/SideBar";
import '../css/Books.css'
import {Table, Button, Input} from 'antd'
import SearchBar from "../js/SearchBar";
import {NavLink} from "react-router-dom";
import {FileImageOutlined, BookOutlined, UserOutlined} from '@ant-design/icons';

const { TextArea } = Input;

let OrderArray =
    [];

let Var_List = []

class OrderManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderArray: OrderArray,
            hasreg: false,
            filterText: '',
            columns: [
                {
                    title: 'time' ,
                    dataIndex: 'time',
                    key: 'time',
                    render :(text)=>{
                        return(
                            this.renderTime(text)
                        )
                    }
                },
                {
                    title: 'user',
                    dataIndex: 'user',
                    key: 'user',
                    render :(text)=>{
                        return(
                            text.username
                        )
                    }
                },
                {
                    title: 'total_price',
                    dataIndex: 'total_price',
                    key: 'price',
                    render :(text)=>{
                        return(
                            this.renderPrice(text.toString())
                        )
                    }
                },
                {
                    title: 'operation',
                    render :(text, record, index)=>{
                        return(
                            <NavLink to={{pathname: "/Order/"+record.id}}>
                                <Button icon={<BookOutlined/>}>订单详情</Button>
                            </NavLink>
                        )
                    }
                }

            ],
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({filterText: filterText});
    }


    renderTime = (timeString) =>{
        let i = 0
        let array = []
        for(i; i < timeString.length; ++i){
            if(i !== 10 && i <= 18)
                array.push(timeString[i])
            if(i === 10)
                array.push(' ')
        }
        return array
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

    getOrders = () => {
        if(this.state.hasreg === false) {
            fetch("http://localhost:8080//getallOrder")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        OrderArray: data,
                        hasreg: true
                    })
                })
        }
        else
            return;
    }

    createList = (text) =>{
        const List = []
        let judge = false
        this.state.OrderArray.map((row, rowidx)=>{
            row.item_list.map((rows,rowidx)=>{
                if(rows.book.title.indexOf(text) === -1)
                    return
                else    judge = true
            })
            if(judge === true)
                List.push(row)
            judge = false
        })
        Var_List = List
        return(
            <div id={"table"}>
                <Table
                    columns={this.state.columns}
                    dataSource={List} />
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
                {this.getOrders()}
                {this.createList(this.state.filterText)}
            </div>
        )
    }
}

export default OrderManage;