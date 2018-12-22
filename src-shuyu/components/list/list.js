import React,{Component,Fragment} from 'react';
import "./style/index.css"
import {connect} from 'react-redux';

import Head from './children/head'
import NavScroll from './children/navScroll'
import NavPic from './children/pics'
import AllNews from './children/allNews'
//import Styles from './childrens/styles'
import {
	pic_avtion,
	news_avtion
} from '../../action/actionCreater'

class List extends Component{
	render(){
		let {picList,newList} = this.props;
		return(
			<Fragment>
				<div className="ff-list">
					<Head />
					<NavScroll/>
					<NavPic picList={picList}/>
					<AllNews newList={newList}/>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getHomeData();
		this.props.getiddata()
	}
}

const mapStateToProps=(state)=>({
	picList:state.ListPic.picList,
	newList:state.ListPic.newList
	
})

const mapDispatchToProps=(dispatch)=>({
	getHomeData(){
		dispatch(pic_avtion());
	},
	getiddata(){
		dispatch(news_avtion());
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(List)