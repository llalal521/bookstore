import React from 'react';
import 'antd/dist/antd.css';
import { Card , Pagination} from 'antd';
import '../css/Books.css'
import {NavLink} from 'react-router-dom'

const {Meta} = Card;

const BookArray =
    [];

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BookArray: BookArray,
            hasreg: false
        }
    }

    getBooks = (e) => {
        if(this.state.hasreg === false) {
            fetch("http://localhost:8080?page="+e)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        BookArray: data,
                        hasreg: true
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

    createCard = (text) => {
        let result = [];
        this.state.BookArray.map((row, rowidx)=>{
            if(row.title.indexOf(text) === -1) {
                return;
            }
            result.push(
                <li>
                    <NavLink to={{pathname: "/BookDetail/"+row.id}}>
                        <Card
                            className="Book"
                            hoverable
                            cover={<img src={row.img} id="Bookimg"/>}
                        >
                            <Meta title={row.title} description={this.renderPrice(row.price.toString())}></Meta>
                        </Card>
                    </NavLink>
                </li>
            )
        })
        return result;
    }

    updateBooks = (page, pageSize) =>{
        fetch("http://localhost:8080?page="+page)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    BookArray: data,
                })
            })
    }

    render() {
        const filterText = this.props.filterText;
        return (
            <div className={'Books'}>
                <ul className={'BookList'}>
                    {this.getBooks(1)}
                    {this.createCard(filterText)}
                </ul>
                <Pagination className={"page"} defaultCurrent={1} onChange={this.updateBooks} total={50}/>
            </div>
        )
    }
}


export default Books;