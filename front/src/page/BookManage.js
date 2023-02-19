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

let BookArray =
    [];

let Var_List = []

class BookManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BookArray: BookArray,
            hasreg: false,
            filterText: '',
            columns: [
                {
                    title: 'img',
                    dataIndex: 'img',
                    key: 'img',
                    render : (img)=>{
                        return(
                            <img src={img} id={"manageBook"} />
                        )
                    }
                },
                {
                    title: 'title',
                    dataIndex: 'title',
                    key: 'title',
                },
                {
                    title: 'author',
                    dataIndex: 'author',
                    key: 'author'
                },
                {
                    title: 'class',
                    dataIndex: 'classname'
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
                    title: 'current_stock',
                    dataIndex: 'current_stock',
                    key: 'current_stock',
                },
                {
                    title: "total_stock" ,
                    dataIndex: 'total_stock',
                    key: 'total_stock',
                },
                {
                    title: 'description',
                    dataIndex: 'description',
                    key: 'description',
                    render : ()=>{
                        return "..."
                    }
                },
                {
                    title: 'operation',
                    key: 'operation',
                    render : (text, record, index)=>{
                        return(
                            <NavLink to={{pathname: "/BookDetail/"+record.id}}>
                                <Button>书籍详情</Button>
                            </NavLink>
                        )
                    }
                },
                {
                    title: 'operation',
                    key: 'operation1',
                    render : (text, record, index)=>{
                        return(
                            <Button onClick={()=>this.deleteOne(record.id)}>删除</Button>
                        )
                    }
                }
            ],
            addState: 0,
            title: "",
            author: '',
            price: '',
            current_stock: '',
            total_stock: '',
            description: "",
            imgUrl: ""
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({filterText: filterText});
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

    deleteOne = (e) =>{
        let id = e
        fetch("http://localhost:8080/deleteBook?id="+ id)
            .then(response => response.text())
            .then(data => {
                this.setState({
                    hasreg: false
                }
            )
            })
    }

    getBooks = () => {
        if(this.state.hasreg === false) {
            fetch("http://localhost:8080/ManageBook")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        BookArray: data,
                        hasreg: true
                    })
                })
        }
        else
            return;
    }

    createList = (text) =>{
        const List = []
        this.state.BookArray.map((row, rowidx)=>{
            if(row.title.indexOf(text) === -1) {
                return;
            }
            List.push(row)
        })
        Var_List = List
        return(
            <div id={"table"}>
                <Table
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.info}</p>,
                    }}
                    columns={this.state.columns}
                    dataSource={List} />
            </div>
        )
    }

    addBook = () =>{
        this.setState({
            addState: 1
        })
    }

    setImg =(e) =>{
        this.setState({
            imgUrl: e.target.value
        })
    }

    setTitle =(e) =>{
        this.setState({
            title: e.target.value
        })
    }

    setAuthor =(e) =>{
        this.setState({
            author: e.target.value
        })
    }

    setPrice =(e) =>{
        this.setState({
            price: e.target.value
        })
    }

    setCurrent_stock =(e) =>{
        this.setState({
            current_stock: e.target.value
        })
    }

    setTotal_stock =(e) =>{
        this.setState({
            total_stock: e.target.value
        })
    }

    setDescription =(e) =>{
        this.setState({
            description: e.target.value
        })
    }

    setClassname =(e)=>{
        this.setState({
            classname: e.target.value
        })
    }

    cancelAdd =()=>{
        this.setState({
            addState: 0,
            title: "",
            author: '',
            price: '',
            classname: "",
            current_stock: '',
            total_stock: '',
            description: "",
            imgUrl: ""
        })
    }

    handIn =()=>{
        if(this.state.title===""||this.state.author===""||this.state.price===""||this.state.current_stock===""||this.state.total_stock===""||this.state.description===""||this.state.imgUrl===""||this.state.className ===""){
            alert("信息不全")
            return
        }
        const data = {title: this.state.title, author: this.state.author, price: this.state.price,
        current_stock: this.state.current_stock, total_stock: this.state.total_stock, imgUrl: this.state.imgUrl,
        description: this.state.description, classname: this.state.classname}
        fetch("http://localhost:8080/addBook", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then((data)=>{
                this.setState({
                    addState: 0,
                    title: "",
                    author: "",
                    price: "",
                    current_stock: "",
                    total_stock: "",
                    description: "",
                    imgUrl: "",
                    classname: "",
                })
                window.location.reload()
            });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}/>
                    <Title/>
                    <SideBar/>
                    <div  id={"add"}>
                        <Button onClick={()=>this.addBook()}>增加一本书</Button>
                    </div>
                    {this.getBooks()}
                    {this.createList(this.state.filterText)}
                    <div id="register-holder" className={this.state.addState === 0?'disappear':'appear'}>
                        <div id="register-form">
                            <Input onChange={this.setImg.bind(this)} value={this.state.imgUrl} size={"small"} placeholder={"imgUrl"} prefix={<FileImageOutlined/>}/>
                            <br/>
                            <br/>
                            <Input onChange={this.setTitle.bind(this)} value={this.state.title} size={"small"} placeholder={"title"} prefix={<BookOutlined/>}/>
                            <br/>
                            <br/>
                            <Input onChange={this.setAuthor.bind(this)} value={this.state.author} size={"small"} placeholder={"author"} prefix={<UserOutlined/>}/>
                            <br/>
                            <br/>
                            <Input onChange={this.setCurrent_stock.bind(this)} value={this.state.current_stock} size={"small"} placeholder={"current_stock"} prefix={<BookOutlined/>}/>
                            <br/>
                            <br/>
                            <Input onChange={this.setTotal_stock.bind(this)} value={this.state.total_stock} size={"small"} placeholder={"total_stock"} prefix={<BookOutlined/>}/>
                            <br/>
                            <br/>
                            <Input onChange={this.setPrice.bind(this)} value={this.state.price} size={"small"} placeholder={"price"} prefix={<FileImageOutlined/>}/>
                            <br/>
                            <br/>
                            <Input onChange={this.setClassname.bind(this)} value={this.state.classname} size={"small"} placeholder={"classname"} prefix={<FileImageOutlined/>}/>
                            <br/>
                            <br/>
                            <TextArea onChange={this.setDescription.bind(this)} rows={4} value={this.state.description} size={"small"} placeholder={"description"} prefix={<FileImageOutlined/>}/>
                            <br/>
                            <br/>
                            <Button onClick={()=>{this.handIn()}}>
                                提交
                            </Button>
                            <Button id={"button"} onClick={()=>{this.cancelAdd()}}>
                                取消
                            </Button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default BookManage;