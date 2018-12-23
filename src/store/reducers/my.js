
const defaultState = {
    bannerList:[]
}

export default (state=defaultState,action)=>{
    //console.log(action.type)
    switch(action.type){
        case "BANNER_LIST_FULFILLED":
	        let gitBannerData = JSON.parse(JSON.stringify(state));
	        gitBannerData.bannerList = action.payload.topPosters;
	        return gitBannerData;
    }
    return state;
}