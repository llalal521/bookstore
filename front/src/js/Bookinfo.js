import React from 'react'
import {Button, Input} from "antd";
import 'antd/dist/antd.css'
import '../css/Bookinfo.css'
import {HeartOutlined , MoneyCollectOutlined} from '@ant-design/icons';

const { TextArea } = Input;

class Bookinfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editState: 0,
            hasgot: false,
            Book: 0,
            click: false,
            num: 0,
            id: 0,
            bookid: 0,
            price:"",
            title: "",
            author: "",
            img: "",
            current_stock: "",
            total_stock: "",
            classname: "",
            description: ""
        }
    }

    updateState = (id, bookid)=>{
        if(this.state.click == false) {
            this.setState({click: true, id: id, bookid: bookid})
        }
    }

    updateCart = () => {
        const data = {id: this.state.id, bookid: this.state.bookid.toString(), num: this.state.num}
        console.log(data)
        fetch("http://localhost:8080/cart",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response)=>response.text())
            .then((data)=>{
                console.log("!!!!!!!!!!!!!!!!!!")
                console.log('Success: ', data);
                this.setState({click: false})
            })
    }

    updateNum=(e)=>{
        console.log(e.target.value)
        this.setState({num: e.target.value})
    }

    getBooks = () => {
        if(this.state.hasgot == false) {
            fetch("http://localhost:8080/getOne/?bookId=" + this.props.info)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        Book: data,
                        hasgot: true,
                        price: data.price.toString(),
                        title: data.title,
                        author: data.author,
                        img: data.img,
                        current_stock: data.current_stock,
                        total_stock: data.total_stock,
                        classname: data.classname,
                        description: data.info
                    })
                })
        }
        else
            return;
    }

    renderPrice = (priceString) =>{
        let i = 0
        let a = '.'
        let array = []
        let result
        let String = priceString
        for(i;i < String.length; ++i){
            if(i == String.length - 2) {
                array.push(a);
                array.push(String[i]);
            }
            else
                array.push(String[i]);
        }
        result = array.join('')
        return result
    }

    renderUserDetail = () =>{
        let result = []
        let book = this.state.Book
                result.push(
                    <div>
                        <img src={book.img} className="Bookimg"/>
                        <div id={"card"}>
                            <ul>
                                {book.title}
                                <li>作者：{book.author}</li>
                                <li>价格：{"$" + this.renderPrice(this.state.price)}</li>
                                <li>库存：{book.current_stock + "/" + book.total_stock}</li>
                                <li>分类：{book.classname}</li>
                                <li>介绍：{book.info}</li>
                            </ul>
                        <Button id = "pay" type={"primary"} icon={<MoneyCollectOutlined />}>立即下单</Button>
                        <Button id = "cart" onClick={()=>this.updateState(localStorage.getItem('id'),book.id)} icon={<HeartOutlined />}>加入购物车</Button>
                        </div>
                    </div>
                )
        console.log(this.state.price);
        return result;
    }

    renderUser = () =>{
        return(
            <div>
                {this.getBooks()}
                {this.renderUserDetail()}
                <div className={["addEditComp",this.state.click?'isvisible':'invisible'].join(' ')}>
                    <select onChange={this.updateNum.bind(this)}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                    <Button onClick={this.updateCart.bind(this)}>确定</Button>
                </div>
            </div>
        )
    }

    renderManageDetail =() =>{
        let result = []
        let book = this.state.Book
        result.push(
            <div>
                <img src={book.img} className="Bookimg"/>
                <div id={"card"}>
                    <ul>
                        {book.title}
                        <li>作者：{book.author}</li>
                        <li>价格：{"$" + this.renderPrice(this.state.price)}</li>
                        <li>库存：{book.current_stock + "/" + book.total_stock}</li>
                        <li>分类：{book.classname}</li>
                        <li>介绍：{book.info}</li>
                    </ul>
                    <Button id = "cart" onClick={()=>{this.setEdit()}}>修改信息</Button>
                </div>
            </div>
        )
        return result;
    }

    setEdit=()=>{
        this.setState({
            editState: 1
        })
    }

    cancelEdit=()=>{
        this.setState({
            editState: 0
        })
    }

    renderManage =() =>{
        return(
            <div>
                {this.getBooks()}
                {this.renderManageDetail()}
            </div>
        )
    }

    renderEdit =() =>{
        return(
            <div>
                {this.getBooks()}
                {this.renderEditDetail()}
            </div>
        )
    }

    updateTitle =(e)=>{
        let Book = this.state.Book
        Book.title = e.target.value
        this.setState({
            Book: Book
        })
    }
    updateAuthor =(e)=>{
        let Book = this.state.Book
        Book.author = e.target.value
        this.setState({
            Book: Book
        })
    }
    updatePrice =(e)=>{
        this.setState({
            price: e.target.value
        })
    }
    updateCurrent_stock =(e)=>{
        let Book = this.state.Book
        Book.current_stock = e.target.value
        this.setState({
            Book: Book
        })
    }
    updateTotal_stock =(e)=>{
        let Book = this.state.Book
        Book.total_stock = e.target.value
        this.setState({
            Book: Book
        })
    }
    updateImg =(e)=>{
        let Book = this.state.Book
        Book.img = e.target.value
        this.setState({
            Book: Book
        })
    }
    updateClass =(e)=>{
        let Book = this.state.Book
        Book.classname = e.target.value
        this.setState({
            Book: Book
        })
    }
    updateDescription =(e)=>{
        console.log(e.target.value)
        let Book = this.state.Book
        Book.info = e.target.value
        this.setState({
            Book: Book
        })
    }

    cancelModify=()=>{
        let book = this.state.Book
        book.title = this.state.title
        book.author = this.state.author
        book.current_stock = this.state.current_stock
        book.total_stock = this.state.total_stock
        book.info = this.state.description
        book.img = this.state.img
        this.setState({
            editState: 0,
            Book: book,
            price: book.price.toString()
        })
    }

    storeBook =()=>{
        let book = this.state.Book
        if(book.title===""||book.author===""||this.state.price===""||book.current_stock===""||book.total_stock===""||book.description===""||book.img===""||book.classname ===""){
            alert("信息不全")
            return
        }
        book.price = this.state.price
        fetch("http://localhost:8080/modifyBook", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        })
            .then(response => response.json())
            .then((data)=>{
                this.setState({
                    editState: 0,
                    title: data.title,
                    author: data.author,
                    price: data.price.toString(),
                    current_stock: data.current_stock,
                    total_stock: data.total_stock,
                    description: data.info,
                    img: data.img,
                    classname: data.classname,
                })
            });
    }

    renderEditDetail =()=>{
        let result = []
        let book = this.state.Book
        result.push(
            <div>
                <div id={"card1"}>
                    <ul>
                        <li>题目:<Input value={book.title} onChange={this.updateTitle.bind(this)}/></li>
                        <li>图片url：<Input value={book.img} onChange={this.updateImg.bind(this)}/></li>
                        <li>作者: <Input value={book.author} onChange={this.updateAuthor.bind(this)}/></li>
                        <li>价格: <Input value={this.state.price} onChange={this.updatePrice.bind(this)}/></li>
                        <li>现有库存：<Input value={book.current_stock} onChange={this.updateCurrent_stock.bind(this)}/></li>
                        <li>总库存：<Input value={book.total_stock} onChange={this.updateTotal_stock.bind(this)}/></li>
                        <li>分类：<Input value={book.classname} onChange={this.updateClass.bind(this)}/></li>
                        <li>介绍：<TextArea value={book.info} onChange={this.updateDescription.bind(this)}/></li>
                    </ul>
                    <Button id = "pay" onClick={()=>{this.storeBook()}}>保存</Button>
                    <Button id = "cart" onClick={()=>{this.cancelModify()}}>取消</Button>
                </div>
            </div>
        )
        return result;
    }

    render = () =>{
        if(localStorage.getItem("type") === '0'){
            return(this.renderUser())
        }
        if(this.state.editState === 0){
            return(this.renderManage())
        }
        return(this.renderEdit())
    }
}

export default Bookinfo;