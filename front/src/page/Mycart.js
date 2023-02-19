import React from 'react'
import Title from "../js/titleFrom";
import SideBar from "../js/SideBar"
import '../css/Mycart.css'
import moment from 'moment'
import {Button} from "antd";
import {Checkbox} from "antd";
import {HeartOutlined , MoneyCollectOutlined, DeleteOutlined} from '@ant-design/icons';

let cart = []
let judge = []
let ini = false

class MyCart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasini: 0,
            cart: cart,
            hasgot: false,
            total_price: 0
        }
    }

    updateTotal_price = (rowid) => {
        if(judge[rowid] === false)
            judge[rowid] = true
        else    judge[rowid] = false;
        let i = 0
        let total = 0
        this.state.cart.forEach(item => {
            console.log(item.num)
            if(judge[i] === true)
                total = total + item.book.price*item.num
            console.log(total)
            i++
        })
        this.setState({
            total_price: total
        })
    }

    initialNum = () => {
        if(this.state.hasini === 0) {
            if(this.state.hasgot) {
                judge = []
                this.state.cart.forEach(item => {
                    judge.push(false)
                })
                this.setState({
                    hasini: 1
                })
            }
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

    getCartInfo = () => {
        if(this.state.hasgot === false) {
            fetch("http://localhost:8080/cart?id="+localStorage.getItem('id'), {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        cart: data,
                        hasgot: true,
                    })
                })
        }
        else
            return;
    }

    createOrder = () =>{
        let time = new Date().getTime()
        const body = this.getBody()
        const data = {id: localStorage.getItem("id"), time: time, body: body, total_price: this.state.total_price}
        fetch('http://localhost:8080/createorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log("create success!")
                alert("订单已收到，正在加急处理")
                this.TransferCtoO()
            })
            .catch(error=>console.log(error))
    }

    getBody = () =>{
        let i = 0
        let body = []
        this.state.cart.forEach(item => {
            if(judge[i] === true){
                body.push(item)
            }
            i++
        })
        return body
    }

    clearCart = () => {
        fetch("http://localhost:8080/clear?id="+localStorage.getItem('id'))
            .then(response => response.text())
            .then(data => {
                this.setState({
                    cart: cart,
                    hasgot: 0,
                    hasini: false
                })
            })
    }

    clearOneTuple = (i) =>{
        console.log(i)
        let data = {id: i}
        fetch("http://localhost:8080/clearone",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(data => {
                this.setState({
                        cart: cart,
                        hasgot: false,
                        hasini: 0
                    }
                )
            })
    }

    ClearTuples = (i) =>{
        let data = {id: i}
        fetch("http://localhost:8080/clearone",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(data => {
                this.setState({
                    hasini: 0,
                    hasgot: false
                })
            })
    }

    TransferCtoO = () =>{
        let i = 0
        this.state.cart.forEach(item => {
            if(judge[i] === true){
                console.log(item)
                this.ClearTuples(item.id)
            }
            i++
        })
        this.setState({
            total_price: 0
        })
        window.location.reload()
    }

    renderCart() {
        let result = []
        result.push(
            <div className={"good"}>
                <table>
                    <tr>
                        <td id={"books"}>

                        </td>
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
                            操作
                        </td>
                    </tr>
                </table>
            </div>
        )
        this.state.cart.map((row, rowidx) => {
        result.push(
            <div className={"book1"}>
                <tr>
                    <td id={"books"}>
                        <Checkbox onChange={() => this.updateTotal_price(rowidx)} defaultChecked={false}>加入订单</Checkbox>
                    </td>
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
                        {console.log()}
                        <Button icon={<DeleteOutlined/>} onClick={() => this.clearOneTuple(row.id)}>删除</Button>
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
                {this.getCartInfo()}
                {this.initialNum()}
            <Title />
            <SideBar />
                <div className={"cart"}>
                    {this.renderCart()}
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
                                <Button icon = {<MoneyCollectOutlined/>} onClick={()=>this.createOrder()}>立即下单</Button>
                            </td>
                            <td id={"price"}>
                            </td>
                            <td id={"num"}>
                            </td>
                            <td id={"ope"}>
                                <Button icon = {<DeleteOutlined/>}  onClick={()=>this.clearCart()}>清空购物车</Button>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;
