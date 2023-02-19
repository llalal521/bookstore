import SideBar from "../js/SideBar";
import Title from "../js/titleFrom";
import Bookinfo from "../js/Bookinfo";
import React from 'react'

class BookDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.match.params.bookId
        }
    }
    render() {
        return (
            <div>
                <Title/>
                <SideBar/>
                <Bookinfo info={this.state.key}/>
            </div>
        );
    }
}

export default BookDetail;