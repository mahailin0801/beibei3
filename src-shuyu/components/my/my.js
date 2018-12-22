import React,{Component} from "react";
import "./style/index.css";
import "../../common/css/reset.css"

class My extends Component{
    render(){
        return (
            <div>
                <div id="top-block">
                    <div id="top-block-title">
                        <div id="rules">赚钱攻略></div>
                    </div>
                    <div className="property unlogin">
                        <span className="unlogin-text">你还没有登录，请先登录哦~</span>
                        <button className="unlogin-btn">立即登录</button>
                    </div>
                 
                    <div className="block">
                        <div className="block__header">
                            TA们刚刚提现了
                        </div>
                        <div className="block_container">

                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}
export default My;