import React, { Component } from 'react';

class SliderArrow extends Component{
    constructor(props){
        super(props)

        this.onHandleArrowClick = this.onHandleArrowClick.bind(this)
    }


    onHandleArrowClick=()=>{
        
    }
    render(){
        return(
            <div>
                <span ></span>
                <span ></span>
            </div>
        )
    }
}

export default SliderArrow