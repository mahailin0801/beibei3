import React,{Component} from 'react';
import '../style/index.css'

class AllNews extends Component{
	render(){
		let {newList} = this.props;
		console.log(newList)
		return(
			<div id="nav_pic1">
				<div>
					<img src="https://b1.hucdn.com/upload/tuan/1810/25/34605278635725_750x350.jpg!750x350.webp" className="item-img b-lazy b-lazy-ani b-loaded"/>
					<div className="group-title">
						<span className="seller-labels" style={{"marginRight":"10px"}}>送湿巾</span>
						<span className="seller-labels">4层柔顺</span>
						<span className="title">【送30片湿巾】50卷竹浆本色卫生纸实芯卷筒纸5斤实惠装4层柔厚妇婴用厕纸巾批发</span>
					</div>
					<div className="group-banner">
						<div className="group-price-inner">
							<span className="price-dec">$</span>
							<span className="price-int">26</span>
							<span className="price-dec">.9</span>
							<span className="price-ori">29.9</span>
						</div>
						<div className="list-group-btns">
							
							<img src="https://b3.hucdn.com/upload/face/1810/26/78b98d3ac497a5084fc55c5ddacd6282.jpg!60x60.webp"/>
							<span className="list-group-btn">去开团</span>
						</div>
					</div>
				</div>
				<div>
					<img src="https://b1.hucdn.com/upload/tuan/1810/25/34605278635725_750x350.jpg!750x350.webp" className="item-img b-lazy b-lazy-ani b-loaded"/>
					<div className="group-title">
						<span className="seller-labels" style={{"marginRight":"10px"}}>送湿巾</span>
						<span className="seller-labels">4层柔顺</span>
						<span className="title">【送30片湿巾】50卷竹浆本色卫生纸实芯卷筒纸5斤实惠装4层柔厚妇婴用厕纸巾批发</span>
					</div>
					<div className="group-banner">
						<div className="group-price-inner">
							<span className="price-dec">$</span>
							<span className="price-int">26</span>
							<span className="price-dec">.9</span>
							<span className="price-ori">29.9</span>
						</div>
						<div className="list-group-btns">
							
							<img src="https://b3.hucdn.com/upload/face/1810/26/78b98d3ac497a5084fc55c5ddacd6282.jpg!60x60.webp"/>
							<span className="list-group-btn">去开团</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default AllNews;