import React,{Component} from 'react';
import {HashRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import "./style/index.css"
class BuyCar extends Component{
	render(){
		return (
			<div>
				<img id="pic" src="http://b0.hucdn.com/party/2016/8/upload_7557af7a9f322613d77290d8c9a72a8a_208x213.png"/>
				<p id="unlogin">您还没登录，请先登录哦~</p>
				<NavLink to="/reg"><button id="cart-btn">登录贝贝</button></NavLink>
				<div id="middle">
					<img src="//h0.hucdn.com/open/201832/a455e163bad2ac29_32x32.png"/>&nbsp;
					<span>大家还买了</span>
				</div>
			</div>
		)
	}
}
export default BuyCar