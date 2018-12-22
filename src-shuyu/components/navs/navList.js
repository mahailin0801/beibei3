import React,{Component,Fragment} from 'react';
import "./style/index.css"
import {connect} from 'react-redux';
import Search from './childrens/search'
import Styles from './childrens/styles'
import {
	nav_avtion
} from '../../action/actionCreater'
class NavList extends Component{
	render(){
		let {navlist} = this.props;
		return(
			<Fragment>
				<div className="ff-search">
					<Search />
					<Styles navlist={navlist}/>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getHomeData()
	}
}

const mapStateToProps=(state)=>({
	navlist:state.NavList.navlist,
})

const mapDispatchToProps=(dispatch)=>({
	getHomeData(){
		dispatch(nav_avtion())
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(NavList)