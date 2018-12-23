import React,{Component} from "react";
import {HashRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import "./style/index.css";
import "../../common/css/reset.css"

class Login extends Component{
    render(){
        return (
            <div>
				
				<div className="con">
				<i className="iconfont loginicon1">&#xe601;</i>
                <input className="in" type="text" placeholder="请输入手机号码/邮箱"/>
				<i className="iconfont loginicon2">&#xe678;</i>
				<input className="in" type="password" placeholder="请输入6-16位密码"/>
				</div>
				<input className="in tcode" type="text" placeholder="请输入4位验证码"/>
				<button className="login-btn">立即登录</button>
				<div className="rem">
						<NavLink to="/reg">
		        			<span>新人注册</span>
        				</NavLink>
					<span>手机号快速登录</span>
					<span>忘记密码</span>
				</div>
			</div>
        )
    }  
}
export default Login;