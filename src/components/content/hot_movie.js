import React, {Component} from 'react'
import MovieDetail from './movie_detial'
import { Z_BLOCK } from 'zlib';


const styles={
    img:{
        height:270,
        width:675,
        fontsize:13,
        display:'block'
    }
}


class HotMovie extends Component{
    constructor(props){
        super(props)
    }

    render(){

       
        return(
            <div>
                <div>
                    <p>正在热映
                        <span><a href=''>全部正在热映>></a></span>
                        <span><a href=''>即将上映>></a></span>
                    </p>
                    <div>
                        <span></span>
                        "/"
                        <span></span>
                    </div>
                    <div>
                        <a href=''></a>
                        <a href=''></a>
                    </div>
                </div>
                <hr/>
                <div style={styles.img}>
                    <MovieDetail/>
                </div>

            </div>
        )
    }
}

export default HotMovie