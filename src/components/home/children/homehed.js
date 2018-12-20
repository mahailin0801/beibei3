import React,{Component} from 'react';
import '../style/index.css'
class Homehed extends Component{
	render(){
		let {himgSrc} = this.props;
		console.log(himgSrc.icon_shortcuts);
	
		return(
			<div id="alls">
				<section id="one_a" className="one_a">
					<a href="//m.beibei.com/tuan/tuan-index.html" className="J_log item-0" title="限时秒杀">
						<img src="https://h0.hucdn.com/images/201824/26fb3f25b4ec03c6_324x410.png" alt="限时秒杀"/>
	    				<p className="countdown"></p>
					</a>
					
					<a href="https://m.beibei.com/n/packages/packages.html"  className="J_log item item-1" title="9.9包邮">
					    <img src="https://h0.hucdn.com/images/201824/1c6fa05e1b73dc56_213x205.png" alt="9.9包邮"/>
					</a>

					<a href="//m.beibei.com/hot_goods.html"  className="J_log item item-2" title="热卖榜单">
					    <img src="https://h0.hucdn.com/images/201824/db9b4538242a04ca_213x205.png" alt="热卖榜单"/> 
					</a>

					<a href="//m.beibei.com/discovery_goods.html" data-json="{&quot;block_name&quot;: &quot;模块布点1+4&quot;,&quot;title&quot;:&quot;新品特惠&quot;, &quot;tab&quot;: &quot;上新&quot;, &quot;position&quot;: 3}" className="J_log item item-3" title="新品特惠">
					    <img src="https://h0.hucdn.com/images/201824/eed0125f0c3a4423_213x205.png" alt="新品特惠"/>  
					</a>
	
					<a href="//m.beibei.com/bargain_goods.html" className="J_log item item-4" title="品牌清仓">
					    <img src="https://h0.hucdn.com/images/201824/3981b336abf4a2af_213x205.png" alt="品牌清仓"/>
					</a>
				</section>
			</div>
		)
	}
	/*componentDidMount(){
		let items = this.props.icon_shortcuts;
		console.log(items)
	}*/
}
export default Homehed;