
import React, {Component} from 'react'
import Top from './content/main_top'
import Movie_Nav from './content/movie_nav'


class Main extends Component{
    constructor(props){
        super(props) 
    }




    render(){
        return(
            <div>
                <Top/>
                <Movie_Nav/>
            </div>
        )
    }
}

export default Main

