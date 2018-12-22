
const defaultState = {
    navlist:[]
}

export default (state=defaultState,action)=>{
    //console.log(action.type)
    switch(action.type){
        case "NAVS_FULFILLED":
	        let gitNavData = JSON.parse(JSON.stringify(state));
	        gitNavData.navlist = action.payload;
	        return gitNavData;
    }
    return state;
}
