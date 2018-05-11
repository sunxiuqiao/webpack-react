import React, {Component} from 'react'
import { ListItem } from 'material-ui';

class SliderItem extends  Component{
    constructor(props){
        super(props)
    }

    render(){
        let {count, item } = this.props
        let width = 100/count +'%'
        reutrn(
            <ul>
                <li style={{width: width}}>
                    <img src={item.src} alt={item.alt}/>
                </li>
            </ul>
        )
    }
}

export default SliderItem