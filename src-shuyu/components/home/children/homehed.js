import React,{Component} from 'react';
import '../style/index.css'
class Homehed extends Component{
	render(){
		let {himgSrc} = this.props;
		//console.log(himgSrc.promotion_pro_shortcuts);
		const src0 = himgSrc.promotion_pro_shortcuts && himgSrc.promotion_pro_shortcuts[0].img;
		const src1 = himgSrc.promotion_pro_shortcuts && himgSrc.promotion_pro_shortcuts[1].img
		const src2 = himgSrc.promotion_pro_shortcuts && himgSrc.promotion_pro_shortcuts[2].img
		const src3 = himgSrc.promotion_pro_shortcuts && himgSrc.promotion_pro_shortcuts[3].img
		const src4 = himgSrc.promotion_pro_shortcuts && himgSrc.promotion_pro_shortcuts[4].img
		return(
			<div id="alls">
				<section id="one_a" className="one_a">
					<a href="//m.beibei.com/tuan/tuan-index.html" className="J_log item-0" title="限时秒杀">
						<img src={src0} alt="限时秒杀"/>
	    				<p className="countdown"></p>
					</a>
					
					<a href="https://m.beibei.com/n/packages/packages.html"  className="J_log item item-1" title="9.9包邮">
					    <img src={src1} alt="9.9包邮"/>
					</a>

					<a href="//m.beibei.com/hot_goods.html"  className="J_log item item-2" title="热卖榜单">
					    <img src={src2} alt="热卖榜单"/> 
					</a>

					<a href="//m.beibei.com/discovery_goods.html" className="J_log item item-3" title="新品特惠">
					    <img src={src3} alt="新品特惠"/>  
					</a>
	
					<a href="//m.beibei.com/bargain_goods.html" className="J_log item item-4" title="品牌清仓">
					    <img src={src4} alt="品牌清仓"/>
					</a>
				</section>
			</div>
		)
	}
}
export default Homehed;