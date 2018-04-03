import React,{Component} from 'react'

const style={
    top:{
        display:'block',
        height:28,
        fontSize:12,
        backgroundColor:'#545652',
        lineDisplay:1.62,
        display:'block',
        minWidth:950,
        color:'#d5d5d5',
        cursor:'pointer',
       
    },
    top1:{
        display:'block',
        margin:0,
        padding:0
    },
    top_item:{
        display:'inline-block',
        listStyle:'none',
        paddingTop:5
    },
    top_item_a:{
        textDecorationLine:'none',
        color:'#d5d5d5',
        fontFamily:'Helvetica, Arial, sans-serif',
        height:28,
        marginRight:12
    },
    top_download:{
        position:'relative',
        float:'right',
        marginRight:119,
        fontFamily:'Helvetica, Arial, sans-serif',
        marginTop:-27
    },
    top_login_div:{
        float:'right',
        marginRight:-214,
        marginTop:-27
    },
    top_login:{
        textDecorationLine:'none',
        paddingLeft:12,
        paddingRight:12,
        display:'inline-block',
        fontFamily:'Helvetica, Arial, sans-serif',
        color:'#d5d5d5',
        height:28
    }   
}

class Top extends Component{
    constructor(props){
        super(props)
        this.state={
            hover:false
        }

        this.toggleHover = this.toggleHover.bind(this)
    }

    toggleHover=()=>{
        this.setState({hover:!this.state.hover})
    }

    

    render(){
        const fontColorno={
            textDecorationLine:'none',
            color:'#d5d5d5',
            fontFamily:'Helvetica, Arial, sans-serif',
            height:28,
            marginRight:12
        }
    
        const fontColorHover={
            textDecorationLine:'none',
            color:'white',
            fontFamily:'Helvetica, Arial, sans-serif',
            height:28,
            marginRight:12
        }
        let top_items =['豆瓣', '读书','电影','音乐', '同城', '小组', '阅读', 'FM', '时间', '市集', '更多']
        let fontColor
        if(!this.state.hover){
            fontColor=fontColorno
        }else{
            fontColor=fontColorHover
        }
        return(
            <div style={style.top}>
                <div style={style.top1}>
                    <div>
                        <ul>
                            {
                                top_items.map((item,i)=>{
                                    return<li key={i} style={style.top_item}><a href='' style={fontColor} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{item}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <div style={style.top_download}>
                        <a href='' style={style.top_login}>下载豆瓣客户端</a>
                    </div>
                    <div style={style.top_login_div}>
                        <a href='' style={style.top_login}>登录</a>
                        <a href='' style={style.top_login}>注册</a>
                    </div>
                </div>
            </div>   
        )
    }
}

export default Top