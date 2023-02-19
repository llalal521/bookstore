import React from 'react'
import Title from "../js/titleFrom";
import SideBar from "../js/SideBar"
import '../css/Mycart.css'
import moment from 'moment'
import {Button} from "antd";
import {Checkbox} from "antd";
import {BookOutlined, DeleteOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

let info = []

class Myorder extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            hasgot: false,
            order: info
        }
    }
    getOrder = () => {
        if(this.state.hasgot === false){
            fetch("http://localhost:8080/order?id="+localStorage.getItem('id'), {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        order: data,
                        hasgot: true,
                    })
                })
        }
    }

    renderPrice = (priceString) =>{
        console.log(priceString)
        let i = 0
        let a = '.'
        let array = []
        let result
        array.push('$')
        for(i;i < priceString.length; ++i){
            if(i === priceString.length - 2) {
                array.push(a);
                array.push(priceString[i]);
            }
            else
                array.push(priceString[i]);
        }
        result = array.join('')
        console.log(result)
        return result
    }

    renderTime = (timeString) =>{
        console.log(timeString)
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

    deleteOrder = (i) =>{
        let data = {id: i}
        fetch("http://localhost:8080/clearorder",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                        order: [],
                        hasgot: false
                    }
                )
            })
    }

    renderTable = () => {
        let result = []
        result.push(
            <div className={"good"}>
                <table>
                    <tr>
                        <td id={"books"}>
                            订单序列
                        </td>
                        <td id={"price"}>
                            时间
                        </td>
                        <td id={"num"}>
                            总价
                        </td>
                        <td id={"ope"}>
                            详情
                        </td>
                        <td id={"ope"}>
                            操作
                        </td>
                    </tr>
                </table>
            </div>
        )
        this.state.order.map((row, rowidx) => {
            result.push(
                <div className={"book1"}>
                    <tr>
                        <td id={"books"}>
                            {row.id}
                        </td>
                        <td id={"num"}>
                            {this.renderTime(row.time)}
                        </td>
                        <td id={"price"}>
                            {this.renderPrice(row.total_price.toString())}
                        </td>
                        <td id={"ope"}>
                            <NavLink to={{pathname: "/Order/"+row.id}}>
                                <Button icon={<BookOutlined/>}>订单详情</Button>
                            </NavLink>
                        </td>
                        <td id={"ope"}>
                            <Button icon={<DeleteOutlined/>} onClick={()=>this.deleteOrder(row.id)}>取消订单</Button>
                        </td>
                    </tr>
                </div>
            )

        })
        return result;
    }

    render(){
        return(
            <div>
                {this.getOrder()}
                <Title/>
                <SideBar/>
                <div className={"cart"}>{this.renderTable()}</div>
            </div>
        )
    }
}

export default Myorder;