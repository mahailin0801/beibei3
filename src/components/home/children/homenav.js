import React,{Component} from 'react';
import '../style/index.css'
class HomeNav extends Component{
	render(){
		return(
				<div id="nav">
					<div className="filterbar-inner-container">
						<a className="search-btn" href=""><i>A</i></a>
			    		<div className="filterbar-inner-wrapper">
				        	<div className="filterbar-inner">
					            <div className="filterbar-inner-item active">今日特卖<div className="active-bg"></div></div>
					            
				            	<div className="J_log filterbar-inner-item">童装<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">母婴<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">居家<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">美食<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">女装<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">鞋包<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">美妆<div></div></div>
				            
				            	<div className="J_log filterbar-inner-item" >进口<div></div></div>
				        	</div>
				    	</div>
					</div>
				</div>
		)
	}
}
export default HomeNav;