import React,{Component,Fragment} from 'react';
import "./style/index.css"
import {connect} from 'react-redux';
import Homehed from './children/homehed'
import HomeNav from './children/homenav'
import HomeList from './children/homelist'
import HomeMid from './children/homemid'
import {
	head_avtion,
	list_avtion
} from '../../action/actionCreater'
class Home extends Component{
	render(){
		let {himgSrc,headList} = this.props;
		return(
			<Fragment>
				<div id="special">
					<Homehed himgSrc={himgSrc}/>
					<HomeNav/>
					<HomeMid/>
					<HomeList headList={headList}/>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getHomeData()
	}
}

const mapStateToProps=(state)=>({
	himgSrc:state.Home.himgSrc,
	headList:state.Home.headList
})

const mapDispatchToProps=(dispatch)=>({
	getHomeData(){
		dispatch(head_avtion())
		dispatch(list_avtion())
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)