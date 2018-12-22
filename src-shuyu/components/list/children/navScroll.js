import React,{Component} from 'react';
import '../style/index.css'

class NavScroll extends Component{
	render(){
		return(
			<div id="nav_scroll">
				<div className="nav_box">
					<ul className="nav_list">
						<li className="active_nav">上新</li>
						<li>上新</li>
						<li>孕婴</li>
						<li>童装</li>
						<li>女装</li>
						<li>玩具</li>
						<li>美妆</li>
						<li>居家</li>
						<li>食品</li>
						<li>鞋包</li>
						<li>进口</li>
						<li>下期预告</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default NavScroll;