import React,{Component} from 'react';
import '../style/index.css'

class Search extends Component{
	render(){
		return(
			<div id="f-search">
				<section className="search">
					<div className="search-input">
						<input type="text" id="J_input" placeholder="发现你喜欢的商品"/>
					</div>
				</section>
			</div>
		)
	}
}
export default Search;