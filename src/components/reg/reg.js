import React,{Component} from "react";
import "./style/index.css";
import "../../common/css/reset.css";

class Reg extends Component{
    render(){
        return (
            <div>
				<div className="con">
                <input className="in" type="text" placeholder="请输入手机号"/>
				<input className="in" type="text" placeholder="请输入短信验证码"/>
				<input className="in " type="password" placeholder="请设置密码"/>
				<button className="getcode">获取验证码</button>
				</div>
				
				<button className="login-btn">免费注册</button>
				<div className="regtext">
					<span>注册贝贝即表示同意</span>
					
				</div>
			</div>
        )
    }  
}
export default Reg;