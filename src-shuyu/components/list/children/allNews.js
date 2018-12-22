import React,{Component} from 'react';
import '../style/index.css'

class AllNews extends Component{
	render(){
		let {newList} = this.props;
		console.log(newList)
		return(
			<div id="nav_pic1">
				<ul>
					{	
						newList.map((item,index)=>{
							return  <li key={index}>{item.movieId}</li>
						})
					}
				</ul>
			</div>
		)
	}
}
export default AllNews;