import React,{Component} from 'react';
import '../style/index.css'
class Styles extends Component{
	render(){
		let {navlist} = this.props;
		const title= navlist.main_categorys;
		//console.log(title)
		//category_name
		return(
			<div id="allStyle">
				{
					title&&title.map((item,index)=>{
						return <div  key={index}>
								<div className="leix">{item.category_name}</div>
								<ul className="lei_fir">
								{
									item.subdivision_categorys.map((items,idx)=>{
										return <li className="lei_str" key={idx}>
													<p className="pic_su">
													<img src={items.img} />
													</p>
													<span className="name_title">{items.title}</span>
												</li>
									})
								}
								</ul>	
						</div>
					})
				}

			</div>
		)
	}
}
export default Styles;