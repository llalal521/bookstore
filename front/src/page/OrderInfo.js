import React from 'react'
import Title from "../js/titleFrom";
import SideBar from "../js/SideBar"
import '../css/Mycart.css'
import moment from 'moment'
import {Button, Checkbox} from "antd";
import {DeleteOutlined, MoneyCollectOutlined} from "@ant-design/icons";


class OrderInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            orderList: [],
            hasGot: 0,
            hasChange: 0,
            total_price: 0,
            key: this.props.match.params.orderId
        }
    }

    getList = () =>{
        const arg = {id: localStorage.getItem('id')}
        if(this.state.hasGot === 0) {
            fetch("http://localhost:8080/orderInfo?id="+localStorage.getItem('id')+"&order_id="+this.state.key, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        orderList: data,
                        hasGot: 1,
                    })
                })
        }
        else
            return;
    }

    renderOrder = (a) => {
        let result = []
        result.push(
            <div className={"good"}>
                <table>
                    <tr>
                        <td id={"books"}>
                            书籍
                        </td>
                        <td id={"price"}>
                            单价
                        </td>
                        <td id={"num"}>
                            数目
                        </td>
                        <td id={"ope"}>
                            条目总价
                        </td>
                    </tr>
                </table>
            </div>
        )
        this.state.orderList.map((row, rowidx) => {
            result.push(
                <div className={"book1"}>
                    <tr>
                        <td id={"books"}>
                            <img src={row.book.img} width={"120px"}/>
                        </td>
                        <td id={"price"}>
                            {this.renderPrice(row.book.price.toString())}
                        </td>
                        <td id={"num"}>
                            {row.num}
                        </td>
                        <td id={"ope"}>
                            {this.renderPrice((row.num * row.book.price).toString())}
                        </td>
                    </tr>
                </div>
            )

        })
        return result;
    }

    renderPrice = (priceString) =>{
        console.log(this.state)
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

    getTotal = () =>{
        if(this.state.hasChange === 0) {
            fetch("http://localhost:8080/total?id="+this.state.key, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        total_price: data,
                        hasChange: 1,
                    })
                })
        }
        else
            return;
    }

    render = () => {
        return(
            <div>
                {this.getList()}
                {this.getTotal()}
                <Title />
                <SideBar />
                <div className={"cart"}>
                    {this.renderOrder()}
                    <div className={"sum"}>
                        <tr>
                            <td width={"560px"}>
                            </td>
                            <td width={"120px"}>
                                总计：{this.renderPrice(this.state.total_price.toString())}
                            </td>
                        </tr>
                    </div>
                    <div className={"button"}>
                        <tr>
                            <td id={"books"}>
                            </td>
                            <td id={"price"}>
                            </td>
                            <td id={"num"}>
                            </td>
                            <td id={"ope"}>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderInfo;