import {Carousel} from 'antd'
import React from 'react'
import '../css/BookCarousel.css'
import 'antd/dist/antd.css'
import imgURL1 from '../png/jaina.png'
import imgURL2 from '../png/dragon.png'
import imgURL3 from '../png/silvanas.png'

class BookCarousel extends React.Component{
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render(){
        return (
            <div id={'caro'}>
                <Carousel autoplay>
                    <div><img src={imgURL1} alt={"logo"}/></div>
                    <div><img src={imgURL2} alt={"logo"}/></div>
                    <div><img src={imgURL3} alt={"logo"}/></div>
                </Carousel>
            </div>
        )
    }
}

export default BookCarousel;
