import React,{Component} from 'react';
import {HashRouter as Router,Route,NavLink,Switch,} from 'react-router-dom';
import '../style/index.css'
import NavList from '../../navs/navList'
import "../../../common/css/iconfont/iconfont.css"
import store from '../../../store';
import {Provider} from 'react-redux';
class HomeNav extends Component{
	render(){
		return(
			<div id="nav">
				<div className="filterbar-inner-container">
				
				
					<Router>
						<div>
							<Switch>
		        				<Route path="/navs/navList"  exact component={NavList}/>
		        			</Switch>
		        			
							<div>
								<NavLink to="/navs/navList">
									<p className="search-btn"><i className="iconfont">&#xe66d;</i></p>
								</NavLink>
							</div>
						</div>
					</Router>
					
					
					
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