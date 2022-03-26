var express = require("express");
var bodyParser     =   require("body-parser"); 
var app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));  
var hostName = '0.0.0.0';
var port = 33200;

app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

app.get("/",function(req,res){
    console.log("请求url：",req.path)
    console.log("请求参数：",req.query)
    res.send("ERROR 请使用post访问");
})

app.post("/VSP/V3/PlayVOD",function(req,res){
    console.log("请求参数：",req.body);
    var result = {
    "result": {
        "retMsg": "Success,platform authorize:270623 has free product.",
        "retCode": "000000000"
    },
    "authorizeResult": {
        "productID": "84001002",
        "isLocked": "0",
        "isParentControl": "0"
    },
	//下面这个你们自己改
    "playURL": "http://211.94.219.168:18080/68/16/20200522/268450204/index.m3u8?rrsip=211.94.219.168:18080&zoneoffset=0&servicetype=0&icpid=&limitflux=-1&limitdur=-1&tenantId=8601&accountinfo=%2C10000000000041%2C121.25.67.1%2C20220323221750%2C1571729558144191%2Ca03007316b0783fc8b82661561090526623284%2C0.0%2C1%2C0%2C%2C%2C1%2C84001002%2C%2C%2C1%2C1%2C270622%2CEND&GuardEncType=2"
       //比如
 // "playURL": "http://211.94.219.168:8080?rrsip=211.94.219.168"
}
    res.send(result);
});


app.listen(port,hostName,function(){

   console.log(`服务器运行在http://${hostName}:${port}`);

});
