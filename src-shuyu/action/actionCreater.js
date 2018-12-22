//import common from './utils/common' //对某些数据进行特殊处理的方法 

import {fetch} from "whatwg-fetch";

export const head_avtion = ()=>({
    type:"HEADGET",
    payload:new Promise(resolve=>{
        let url = "/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
        })
    })
})



//https://dsapi.beibei.com/martshow/v1/7702-1-all-0-1-0-18.html?client_info=undefined&h5_uid=undefined

export const list_avtion =()=>({
    type:"HEADLIST",
    payload:new Promise(resolve=>{
        let url = "/martshow/v1/7702-1-all-0-1-0-18.html?client_info=undefined&h5_uid=undefined";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
        })
    })
})

//https://sapi.beibei.com/item/category-1.html?callback=BeibeiItemCategoryGet

export const nav_avtion =()=>({
    type:"NAVS",
    payload:new Promise(resolve=>{
        let url = "/item/category-1.html?BeibeiItemCategoryGet";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
        	//console.log(data)
            resolve(data)
        })
    })
})


//https://dsapi.beibei.com/ads/h5.html?ad_id=14&app=beibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D

export const pic_avtion =()=>({
    type:"PIC_NAV",
    payload:new Promise(resolve=>{
        let url = "/Movie/MovieCreditsWithTypes.api?movieId=217896";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
        	//console.log(data)
            resolve(data)
        })
    })
})





//https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805
//https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290
export const news_avtion =()=>({
    type:"NEW_LIST",
    payload:new Promise(resolve=>{
        let url = "/PageSubArea/HotPlayMovies.api?locationId=290";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
        	//console.log(data)
            resolve(data)
        })
    })
})

