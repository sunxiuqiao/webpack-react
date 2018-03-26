import React, {Component} from 'react'

class Main extends Component{
    constructor(props){
        super(props)
        this.state={

        }   
    }




    render(){
        return(
            <div>
                <Top/>
            </div>
        )
    }
}

export default Main

function Top(){
    return(
        <div>
            <div>hello world!</div>
        </div>
    )
}