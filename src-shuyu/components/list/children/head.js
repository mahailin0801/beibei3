import React,{Component} from 'react';
import '../style/index.css'

class Head extends Component{
	render(){
		return(
			<div id="head_search">
				<section className="search-bar-container">
    				<input type="text" id="j_seach" placeholder="搜索热销商品" />
				</section>
			</div>
		)
	}
}
export default Head;