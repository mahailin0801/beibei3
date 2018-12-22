
const defaultState = {
    himgSrc:[],
    headList:[]
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "HEADGET_FULFILLED":
	        let githedData = JSON.parse(JSON.stringify(state));
	        githedData.himgSrc = action.payload;
	        return githedData;
	        
	    case "HEADLIST_FULFILLED":
	        let gitListData = JSON.parse(JSON.stringify(state));
	        gitListData.headList = action.payload;
	        return gitListData;
    }
    return state;
}


