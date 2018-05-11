
import React, {Component} from 'react'
import Top from './content/main_top'
import Movie_Nav from './content/movie_nav'
import HotMovie from './content/hot_movie'


class Main extends Component{
    constructor(props){
        super(props) 
    }




    render(){
        return(
            <div>
                <Top/>
                <Movie_Nav/>
                <HotMovie/>
            </div>
        )
    }
}

export default Main

