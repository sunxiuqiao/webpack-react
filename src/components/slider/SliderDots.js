import React, { Component } from 'react';

class SliderDots extends Component{
    constructor(props){
        super(props)
    }

    onHandDotClick=()=>{

    }



    render(){

        let dotNodes = []
        let {count, nowLocal } = this.props
        for(let i = 0;i<count;i++){
            dotNodes[i] = (
                <span
                    key = {'dot' + 1}
                    onClick = {this.onHandDotClick}>
                </span>
            )
        }
        return(
            <div>
                {dotNodes}
            </div>
        )
    }
}

export default SliderDots