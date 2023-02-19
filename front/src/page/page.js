import React from 'react'
import Title from '../js/titleFrom'
import SideBar from "../js/SideBar";
import SearchBar from "../js/SearchBar";
import BookCarousel from "../js/BookCarousel";
import Books from "../js/Books";

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(filterText){
        this.setState({filterText: filterText});
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}/>
                <BookCarousel/>
                <Books filterText={this.state.filterText}/>
                <Title/>
                <SideBar/>
            </div>
        );
    }
}

export default HomePage;