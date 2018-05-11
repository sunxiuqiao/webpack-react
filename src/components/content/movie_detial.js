import React, {Component} from 'react'
import {ajax,get} from 'jquery'

const styles={
    ul:{
        listStyle:'none',
        padding:0,
        margin:20,
        textDecorationLine:'none',
        float:'left',
        display:'inline-block'
    },
    li:{
        height:161,
        width:115,
    },
    li2:{
        listStyle:'none',
        display:'inline-block',
        padding:6,
        marginBottom:15,

    }
}

class MovieDetial extends Component{
    constructor(props){
        super(props)
        this.getMovieDetail = this.getMovieDetail.bind(this)
    }

    getMovieDetail=()=>{
        var title,rating,image
        var subjects=[]
       
        ajax({
            type:'get',
            dataType: 'jsonp',
            url:'',
            success:(res)=>{
                subjects = res
                console.log(subjects)
            }
        }) 
    }

    render(){
        return(
            <div>
                <ul style={styles.ul}>
                   <li style={styles.li2}><img  style={styles.li}src='static/hotmovie/p2384211640.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2516079193.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2516578307.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2517033932.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2517753454.webp'/></li>
                   <li style={styles.li2}><img  style={styles.li} src='static/hotmovie/p2518236317.webp'/></li>
                   <li style={styles.li2}><img  style={styles.li} src='static/hotmovie/p2518856022.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2518945837.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2519994468.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2520197352.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2520198192.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2520200484.webp'/></li>
                   <li style={styles.li2}><img  style={styles.li} src='static/hotmovie/p2520457270.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2520543845.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2520931773.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2521033758.webp'/></li>
                   <li style={styles.li2}><img style={styles.li} src='static/hotmovie/p2521118750.webp'/></li>
                   <li style={styles.li2}><img  style={styles.li} src='static/hotmovie/p2521271645.webp'/></li>
                </ul>
            </div>
        )
    }
}

export default MovieDetial