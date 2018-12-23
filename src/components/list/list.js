import React,{Component,Fragment} from 'react';
import "./style/index.css"
import {connect} from 'react-redux';

import Head from './children/head'
import NavScroll from './children/navScroll'
import NavPic from './children/pics'
import AllNews from './children/allNews'
import {
	pic_avtion,
	news_avtion,
	goods_avtion
} from '../../action/actionCreater'

import BScroll from "better-scroll";

class List extends Component{
	constructor(){
 		super();
 		this.state={
 			flag:false
 		}
 	}
	render(){
		let flag= this.state;
		let {picList,newList} = this.props;
		return(
			<Fragment>
				{flag?<NavPic picList={picList}/>:""}
				<div className="wrapper" ref="wrapper">
					<div className="content">
						<Head />
						<NavScroll/>
						{flag?"":<NavPic picList={picList}/>}
						<AllNews newList={newList}/>	
					</div>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
        this.props.getHomeData();
        this.scroll = new BScroll(this.refs.wrapper,{
            click:true,
            pullUpLoad:true,
            probeType:2
        });
       
       	this.scroll.on("pullingUp",()=>{
            this.props.getHomeGoodsList(this.props.page)
        })
       	
       	
       	this.scroll.on("scroll",(offset)=>{
       		//console.log(offset)
            if(offset.y <= -182){
               this.setstate={
               		flag:true
               }
            }else{
                this.setstate={
               		flag:false
               }
            }
        })
    }
    componentDidUpdate(){
        //重新计算高度
        this.scroll.refresh();
        //当数据加载完毕以后通知better-scroll可以进行下一次上拉加载
        this.scroll.finishPullUp();
    }
}

const mapStateToProps=(state)=>({
	picList:state.ListPic.picList,
	newList:state.ListPic.newList,
	page:state.ListPic.page
})

const mapDispatchToProps=(dispatch)=>({
	getHomeData(){
		dispatch(pic_avtion())
		dispatch(news_avtion())
	},
	getHomeGoodsList(params){
        dispatch(goods_avtion(params))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List)