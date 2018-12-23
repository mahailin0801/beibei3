import React,{Component} from "react";
import {HashRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import "./style/index.css";
import "../../common/css/reset.css"
import {connect} from 'react-redux';
import Swiper from "swiper";
import {
	banner_avtion
} from '../../action/actionCreater'
class My extends Component{
    render(){
    	let {bannerList} = this.props;
    	//console.log(bannerList)
        return (
            <div>
                <div id="top-block">
                    <div id="top-block-title">
                        <div id="rules">赚钱攻略></div>
                    </div>
                    <div className="property unlogin">
                        <span className="unlogin-text">你还没有登录，请先登录哦~</span>
                        <NavLink to="/login"><button className="unlogin-btn">立即登录</button></NavLink>
                    </div>
                 
                    <div className="block">
                        <div className="block__header">
                            <div className="swiper-container banner_container" ref="banner_container">
				                <div className="swiper-wrapper">
				                   {
				                       bannerList.map((item,index)=>{
				                           return  <div className="swiper-slide" key={index}>
				                            <img src={item.img}/>
				                           </div>
				                       })
				                   }
				                </div>
				                <div className="swiper-pagination"></div>
				            </div>
                        </div>
                        <div className="block_container">

                        </div>
                    </div>
                </div>
            </div>
        )
    } 
    componentDidMount(){
		this.props.getMyData();
		
		setTimeout(()=>{
            new Swiper(this.refs.banner_container,{
                loop:true,
                autoplay:true
            })
        },300)
	}
}

const mapStateToProps=(state)=>({
	bannerList:state.My.bannerList
})

const mapDispatchToProps=(dispatch)=>({
	getMyData(){
		dispatch(banner_avtion())
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(My)