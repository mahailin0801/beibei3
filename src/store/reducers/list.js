
const defaultState = {
    picList:[],
    newList:[]
}

export default (state=defaultState,action)=>{
    //console.log(action.type)
    switch(action.type){
        case "PIC_NAV_FULFILLED":
	        let gitPicData = JSON.parse(JSON.stringify(state));
	        gitPicData.picList = action.payload;
	        return gitPicData;
	        
	    case "NEW_LIST_FULFILLED":
	        let gitNewData = JSON.parse(JSON.stringify(state));
	        gitNewData.newList = action.payload;
	        return gitNewData;
    }
    return state;
}
