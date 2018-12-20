
const defaultState = {
    himgSrc:[]
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "HEADGET_FULFILLED":
        let githedData = JSON.parse(JSON.stringify(state));
        githedData.himgSrc = action.payload;
        return githedData;
    }
    return state;
}


