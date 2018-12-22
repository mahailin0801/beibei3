import React,{Component} from 'react';
import '../style/index.css'
class HomeList extends Component{
	render(){
		let {headList} = this.props;
		//console.log(headList.martshows);
		return(
			<div id="J_list-content" className="list-content">
				{
					headList.martshows&&headList.martshows.map((item,index)=>{
						return  <a href="" className="item-show J_log" id="J_saima" key={index}>
					                <div className="items-wrapper">
					                    <div className="product-wrap item-left">
					                        <div className="product-img">
					                            <img className="item-img" src={item.type_home_item_single.img}/>
					                            {
					                            	item.type_home_item_single.icon_promotions.map((items,indexs)=>{
					                            		return <img className="promotion-icon" src={items.icon} key={index}/>
					                            	})
					                            }
					       
					                        </div>
					                        <div className="flexs_q">
					                        	<div className="product-info">
						                            <p className="title">{item.type_home_item_single.title}</p>
						                            <p className="promotion-info">{item.type_home_item_single.promotion_desc}</p>
						                            <div className="price-info">
						                                <span className="cur-price">{item.type_home_item_single.beiji_cms_desc}</span>
						                                <span className="cms-info">
						                                    <span className="cms-prefix">{item.type_home_item_single.beiji_cms_prefix}</span>
						                                    <span className="cms-price">¥{item.type_home_item_single.price/100}</span>
						                                </span>
						                                <p className="instant_buy">立即抢</p>
						                            </div>
						                        </div>
					                        </div>
					                        
					                    </div>
					                </div>
					            </a>
					})
				}
	            
			</div>
		)
	}
}
export default HomeList;