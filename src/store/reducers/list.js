
const defaultState = {
    picList:[],
    newList:[],
    page:2
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
	        gitNewData.newList = action.payload.data.goods;
	        return gitNewData;
	    

	    case "GOODS_LIST_MORE_FULFILLED":
            let goodsMore = JSON.parse(JSON.stringify(state));
            goodsMore.newList = [...goodsMore.newList, ...action.payload.data.goods];
            goodsMore.page += 1;
            return goodsMore;
    }
    return state;
}

