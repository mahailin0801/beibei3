import React,{Component} from 'react';
import '../style/index.css'

class NavPic extends Component{
	render(){
		let {picList} = this.props;
		const listpect = picList.h5_pintuan_icon_shortcuts
		console.log(picList)
		return(
			<div id="nav_pic">
				<ul>
				{
					listpect&&listpect.map((item,index)=>{
						return <li key={index}>
							<p><img src={item.img}/></p>
							<span>{item.desc}</span>
						</li>
					})
				}
				</ul>
			</div>
		)
	}
}
export default NavPic;