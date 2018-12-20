const proxy = require("http-proxy-middleware");
//https://dsapi.beibei.com/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D

module.exports  = (app)=>{
    app.use("/ads",proxy({
        target:"https://dsapi.beibei.com",
        changeOrigin:true
    }))
}