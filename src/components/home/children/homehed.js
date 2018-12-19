import React,{Component} from 'react';
import '../style/index.css'
class HomeUI extends Component{
	render(){
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
				
				<div id="nav">
					<div className="filterbar-inner-container">
						<a className="search-btn" href=""><i>A</i></a>
			    		<div className="filterbar-inner-wrapper">
				        	<div className="filterbar-inner">
					            <div className="filterbar-inner-item active">今日特卖<div className="active-bg"></div></div>
					            
				            	<div className="J_log filterbar-inner-item">童装<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">母婴<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">居家<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">美食<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">女装<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">鞋包<div ></div></div>
				            
				            	<div className="J_log filterbar-inner-item">美妆<div></div></div>
				            
				            	<div className="J_log filterbar-inner-item" >进口<div></div></div>
				        	</div>
				    	</div>
					</div>
				</div>
				
				<header className="list-header"><span className="title">每天9点准时上新</span></header>
				
				<div id="J_list-content" className="list-content">
		            <a href="" className="item-show J_log" id="J_saima">
		                <div className="items-wrapper">
		                    <div className="product-wrap item-left">
		                        <div className="product-img">
		                            <img className="item-img" src="https://b1.hucdn.com/upload/tuan/1812/17/13831991929499_750x350.jpg!750.webp"/>
		                            <img className="promotion-icon" src="//h0.hucdn.com/open/201850/e5c609661a806f7a_174x174.png"/>
		                        </div>
		                        <div className="flexs_q">
		                        	<div className="product-info">
			                            <p className="title">【3斤11.9元】【买100送100】【优选圣诞果】红富士苹果3斤/5斤/8斤任选实惠装</p>
			                            <p className="promotion-info">买100送100 · 爽口多汁 · 酸甜爽口</p>
			                            <div className="price-info">
			                                <span className="cur-price">¥11.9</span>
			                                <span className="cms-info">
			                                    <span className="cms-prefix">赚</span>
			                                    <span className="cms-price">¥5.95</span>
			                                </span>
			                                <p className="instant_buy">立即抢</p>
			                            </div>
			                        </div>
		                        </div>
		                        
		                    </div>
		                </div>
		            </a>
		            
		            <a href="https://m.beibei.com/n/group/detail.html?iid=30528573" className="item-show J_log" id="J_saima">
			            <div className="items-wrapper">
			                <div className="product-wrap item-left">
			                    <div className="product-img">
			                        <img className="item-img" src="https://b1.hucdn.com/upload/tuan/1810/12/43190720572653_750x350.jpg!750.webp"/>
			                        <img className="promotion-icon" src="//h0.hucdn.com/open/201823/85ca53a9cb035d64_174x174.png"/>
			                    </div>
			                    <div className="flexs_q">
			                        <div className="product-info">
			                            <p className="title">儿童碎花保暖外穿棉马甲</p>
			                            <p className="promotion-info">优质面料 · 做工精良 · 新品促销</p>
			                            <div className="price-info">
			                                <span className="cur-price">¥26</span>
			                                
			                                <span className="cms-info">
			                                    <span className="cms-prefix">赚</span>
			                                    <span className="cms-price">¥13</span>
			                                </span>
			                                
			                                <p className="instant_buy">立即抢</p>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </a>
				</div>
			</div>
		)
	}
}
export default HomeUI;