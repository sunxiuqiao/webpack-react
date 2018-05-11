import React, {Component} from 'react';

import SliderItem from './SliderItem'
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'

class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {
            nowLocal: 0,
        }
        this.turn = this.turn.bind(this)
        this.startPlay = this.startPlay.bind(this)
        this.speed = 1
        this.delay = 2
        this.pause = true
        this.autoPlay = true
        this.dots = true
        this.arrows = true
        this.items = []
        this.autoPlayFlag = null
    }

    turn = (n) =>{
        let nowNode = this.state.nowLocal + n
        if(nowNode < 0){
            nowNode = nowNode + this.props.items.length
        }
        if(nowNode > this.props.items.length){
            nowNode = nowNode - this.props.items.length
        }
        this.setState({nowLocal: nowNode})
    }

    startPlay = () =>{
       if(this.props.autoPlay){
           this.props.autoPlayFlag = setInterval(()=>{
               this.turn(1)
           },this.props.delay * 1000)
       }
    }

    pausePlay = () =>{
        clearInterval(this.props.autoPlayFlag)
    }

    componentDidMount = ()=>{
        this.startPlay()
    }

    render(){

        let count = this.props.items.length
        let itemNode = this.props.items.map((item,index)=>{
            return<SliderItem item = {item} count = {count} key={'item' + index}/>
        })

        let arrowsNode = <SliderArrow turn = {this.turn}/>
        let dotsNode = <SliderDots turn = {this.turn} nowLocal = {this.state.nowLocal}/>


        retrun(
            <div onMouseOver = {this.props.pause?this.pausePlay:null} onMouseOut = {this.props.pause?this.startPlay:null}>
                <ul>
                    {itemNode}
                    {this.props.arrows?arrowsNode:null}
                    {this.props.dots?dotsNode:null}
                </ul>      
            </div>
        )
    }
}

export default Slider