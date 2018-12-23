import React,{Component} from 'react';
import '../style/index.css'
import Loading from '../../common/loading'
class AllNews extends Component{
	render(){
		let {newList} = this.props;
		//console.log(newList)
		return(
			<div id="nav_pic1">
				{
					newList.map((item,index)=>{
						return <div key={index} onClick={this.handleClick.bind(this)}>
									<img src={item.pic_url} className="item-img b-lazy b-lazy-ani b-loaded"/>					
									<div className="group-title">
										<span className="seller-labels" style={{"marginRight":"10px"}}>{item.time_left}</span>
										<span className="seller-labels">{item.coupon_tips}</span>
										<span className="title">{item.title_long}</span>
									</div>
									<div className="group-banner">
										<div className="group-price-inner">
											<span className="price-dec">$</span>
											<span className="price-int">{item.oprice}</span>
											<span className="price-dec">.9</span>
											<span className="price-ori">{item.cprice}</span>
										</div>
										<div className="list-group-btns">
											
											<img src={item.logo_url}/>
											<span className="list-group-btn">去开团</span>
										</div>
									</div>
								</div>
					})
				}
				<Loading/>
			</div>
		)
	}
	handleClick(){
        alert(1)
   }
}
export default AllNews;