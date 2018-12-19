import {fetch} from 'whatwg-fetch';
//import common from './utils/common' //对某些数据进行特殊处理的方法 
//https://dsapi.beibei.com/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D
export const head_avtion =()=>({
	type:"HEADGET",
	payload:new Promise(resolve=>{
		let url = "/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			console.log(data)
			//resolve(data)
		})
	})
})
