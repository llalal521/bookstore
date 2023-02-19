import imgURL from '../png/logo.png'
import '../css/titleForm.css'
import React from "react";
import {NavLink} from "react-router-dom";

class Title extends React.Component{
    constructor(props) {
        super(props);
    }

    Logout = () => {
        localStorage.removeItem('id')
    }

    render() {
        return (
            <div className={'upBack'}>
                <img src={imgURL} id={'logo'}/>
                <ul className={'e2'}>
                    <li>
                        <NavLink to={"/"}>
                            <a onClick={()=>this.Logout}>退出</a>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Title;