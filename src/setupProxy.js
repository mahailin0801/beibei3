const proxy = require("http-proxy-middleware");

module.exports  = (app)=>{
    app.use("/ads",proxy({
        target:"https://dsapi.beibei.com",
        changeOrigin:true
    }))
}