const proxy = require("http-proxy-middleware");
//https://dsapi.beibei.com/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D
//https://dsapi.beibei.com/martshow/v1/7702-1-all-0-1-0-18.html?client_info=undefined&h5_uid=undefined
//https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290

//https://sapi.beibei.com/item/category-1.html?callback=BeibeiItemCategoryGet
module.exports  = (app)=>{
    app.use("/ads",proxy({
        target:"https://dsapi.beibei.com",
        changeOrigin:true
    }))
    app.use("/martshow",proxy({
        target:"https://dsapi.beibei.com",
        changeOrigin:true
    }))
    
    app.use("/item",proxy({
        target:"https://dsapi.beibei.com",
        changeOrigin:true
    }))
    
   app.use("/api",proxy({
        target:"https://webservice.juanpi.com",
        changeOrigin:true
    }))
   app.use("/Service",proxy({
        target:"http://m.mtime.cn",
        changeOrigin:true
    }))
}
//http://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018122319254845266

//https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=122224&callback=jsonp122224&_=1545556699866

//https://webservice.juanpi.com/api/getGoods?page=2&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc
//https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290
//https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896
//https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805