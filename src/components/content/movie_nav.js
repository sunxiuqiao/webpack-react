import React, {Component} from 'react'
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton'
import { relative } from 'path';

const styles={
    nav:{
        display:'block',
        minWidth:1040,
        width: '100%',
        overFlow:'hidden',
        marginBottom:40,
        height:115,
        fontSize:13,
        backgroundColor:'#f0f3f5'
    },
    nav_wrap:{
        borderColor: '#e3ebec',
        borderBottom: '1px solid #e5ebe4',
        display: 'block',
        height: '64%'
    },
    nav_top:{
        display:'block',
        width:1040,
        margin:'0 auto',
        position:'relative',
        padding: '10 0 5',
        overFlow:'visible !important',
        zoom:1,
       

    },
    nav_top_logo:{
        float:'left',
        marginRight:13,
        width:145,
        height:56,
        backgroundImage:'url(static/img/lg_movie_a12_2.png)',
        backgroundRepeat:'no-repeat',
        marginTop: 10,
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
        backgroundRepeat: 'no-repeat'
    },
    nav_bottom:{
        width: 1040,
        margin: '0 auto',
        overflow: 'hidden',
        zoom:1,
        paddingBottom: 0,
    },
    label_query:{
       position: 'absolute',
       left: 11,
       top:10,
       lineHeight: 30,
       cursor: 'text',
       width: 'auto',
       color:'#bbb'
    },
    search_text:{
       float: 'left',
       width: 470,
       height: 34,
       textAlign: 'center',
       marginRight: -3,
       cursor: 'text',
    },
    input_text:{
        background: '#fff',
        width: '96%',
        height: 30,
        margin: 0,
        textAlign: 'left',
        paddingLeft: 10,
        outline: 'none'
    },
    div_btn:{
        position: 'relative',
        left: -1,
        width: 37,
        height: 34,
        zoom:1,
        overflow: 'hidden',
        lineHeight: 1.62
    },
    input_btn:{
       width: '100%',
       height: '100%',
       fontSize: 0,
       padding: '35 0 0 0',
       overflow: 'hidden',
        cursor: 'pointer',
        backgroundImage: 'url(static/img/nav_mv_bg)',
        marginRight: 3,
        verticalAlign: 'middle',
    },
    items_ul:{
        margin:'9 0',
        listStyle: 'none',
        padding: 0,
        fontSize: 14
    },
    items:{
        display: 'inline-block',
        listStyle: 'none',
        marginRight: 25,
        
    },
    item_text:{
        color: '#27a',
        textDecorationLine: 'none', 
    }
}


class Movie_Nav extends Component{
    constructor(props){
        super(props)
    }


    render(){
        let items = ['我看', '影讯&购票', '选电影', '电视剧', '排行榜', '分类', '影评', '2017年度榜单', '2017观影报告']
        return(
            <div style={styles.nav} >
                <div style={styles.nav_wrap}>
                    <div style={styles.nav_top}>
                        <div style={styles.nav_top_logo} >
                            <a href='' sytle={styles.nav_top_logo_a}>豆瓣电影</a></div>
                        </div>
                    <div style={styles.nav_right}>
                        <from method='get' action='https://movie.douban.com/subject_search'>

                            <div style={styles.search_text}>
                                <input style={styles.input_text} id='inp_query' name='seatch_text' size='22' maxLength='60' placeholder='搜索电影、电视剧、综艺、影人' valueAutCoomplete='off' />
                            </div>
                            <div style={styles.div_btn}>
                                <input style={styles.input_btn} type='submit' value='搜索' />
                            </div>
                            
                        </from>
                       
                    </div>
                </div>
               
               
                <div style={styles.nav_bottom}>
                    <ul style={styles.items_ul}>
                       {
                           items.map((item,i)=>{
                               return(<li key={i} style={styles.items}><a style={styles.item_text} href=''>{item}</a></li>)
                           })
                       }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Movie_Nav

