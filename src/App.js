import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Home from './components/home/home';
import List from './components/list/list';
import My from './components/my/my';
import BuyCar from './components/car/buycar';
import Order from './components/order/order';
import "./common/css/footer.css";
import store from './store';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      <Router>
        	<div>
        			<Switch>
        				<Route path="/home" component={Home}/>
        				<Route path="/list"  component={List}/>
        				<Route path="/my"  component={My}/>
        				<Route path="/buycar"  component={BuyCar}/>
        				<Route path="/order"  component={Order}/>
        				<Route Redirect="/" to="/home"/>
        			</Switch>
        			
        			<div id="footer">
        					<ul>
        							<li>
        									<NavLink to="/home">
		        									<i className="iconfont">&#xe612;</i>
		        									<span>今日特卖</span>
        									</NavLink>
        							</li>
        							<li>
        									<NavLink to="/list">
        											<i className="iconfont">&#xe60d;</i>
        											<span>拼团</span>
        									</NavLink>
        							</li>
        							<li>
        									<NavLink to="/my">
		        									<i className="iconfont">&#xe678;</i>
		        									<span>赚红包</span>
        									</NavLink>
        							</li>
        							<li>
        									<NavLink to="/buycar">
		        									<i className="iconfont">&#xe64c;</i>
		        									<span>购物车</span>
        									</NavLink>
        							</li>
        							<li>
        									<NavLink to="/order">
		        									<i className="iconfont">&#xe601;</i>
		        									<span>我的</span>
        									</NavLink>
        							</li>
        					</ul>
        			</div>
        	</div>
      </Router>
      </Provider>
    )
  }
}
export default App;
