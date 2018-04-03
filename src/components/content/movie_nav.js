import React, {Component} from 'react'
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton'

const styles={
    nav:{
        display:'block',
        minWidth:1040,
        overFlow:'hidden',
        marginBottom:40,
        height:115,
        fontSize:13,
        backgroundColor:'#f0f3f5'
    },
    nav_top:{
        display:'block',
        width:1040,
        margin:'auto',
        position:'relative',
        paddingTop:10,
        paddingBottom:5,
        overFlow:'visible !important'

    },
    nav_top_logo:{
        float:'left',
        marginRight:13,
        width:145,
        height:56,
        backgroundImage:'url(static/img/lg_movie_a12_2.png)',
        backgroundRepeat:'no-repeat'
    },
    nav_top_logo_a:{
        textDecorationLine:'none',  
        inlineHeight:100,
        overFlow:'hidden',
        lineHeight:10

    },
    nav_right:{
        marginLeft:145,
        zoom:1,
        paddingTop:10,
        paddingBottom:15,
        position:'relative',
        overFlow:'visible !important'
    },
    nav_search:{
       float:'left',
       width:470,
       height:34,
       textAilgn:'center',
       marginRight:-3,
       cursor:'text',
       backgroundImage: 'url(static/img/nav_mv_bg.png)',
    }
}


class Movie_Nav extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div style={styles.nav} >
                <div style={styles.nav_top}>
                    
                    <div >
                        <div style={styles.nav_top_logo} >
                        <a href='' sytle={styles.nav_top_logo_a}>豆瓣电影</a></div>
                    </div>
                    <div sytle={styles.nav_right}>
                        <from method='get'>
                            <div>
                                <input/>
                            </div>
                            <div>
                                <input/>
                            </div>
                        </from>
                    </div>
                
                 
                </div>
                <hr/>
                <div></div>
            </div>
        )
    }
}

export default Movie_Nav

