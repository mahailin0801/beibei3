import React,{Component,Fragment} from 'react';
import "./style/index.css"
import {connect} from 'react-redux';
import Homehed from './children/homehed'
import HomeNav from './children/homenav'
import HomeList from './children/homelist'
import HomeMid from './children/homemid'
import {
	head_avtion
} from '../../action/actionCreater'
class Home extends Component{
	render(){
		let {himgSrc} = this.props;
		return(
			<Fragment>
				<div id="special">
					<Homehed himgSrc={himgSrc}/>
					<HomeNav/>
					<HomeMid/>
					<HomeList/>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getHomeData()
	}
}

const mapStateToProps=(state)=>({
	himgSrc:state.Home.himgSrc
})

const mapDispatchToProps=(dispatch)=>({
	getHomeData(){
		dispatch(head_avtion())
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)