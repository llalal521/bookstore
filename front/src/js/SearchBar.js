import '../css/SearchBar.css'
import React from "react";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value)
    }

    render(){
        const filterText = this.props.filterText;
        return (
            <div id = 'searchBar'>
                <input type={'search'} name={'search'} placeholder={'请输入书名'} value={filterText}
                onChange={this.handleFilterTextChange}/>
                <div id={'search'}>搜索</div>
            </div>
        );
    }
}

export default SearchBar