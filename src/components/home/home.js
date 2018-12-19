import React,{Component,Fragment} from 'react';
import "./style/index.css"
//import {connect} from 'react-redux';
import Homehed from './children/homehed'
import {
	
} from '../../action/actionCreater'
class Home extends Component{
	render(){
		let {oks} = this.props
		return(
			<Fragment>
				<Homehed/>
			</Fragment>
		)
	}
	/*componentDidMount(){
		this.props.getHomeData()
	}*/
}

/*const mapStateToProps=(state)=> {
	//oks:state.oks
}*/

/*const mapDispatchToProps=(dispatch)=>{
	getHomeData(){
		//dispatch()
	}
}*/
//export default connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home;