const express=require("express");
const qs = require("querystring");
const pool=require("./pool");
var app=express();
app.use(express.static(__dirname+"/public"));
app.listen(3001);
//轮播图
app.get("/imagelist",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://127.0.0.1:3001/img/home/ban1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3001/img/home/ban2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3001/img/home/ban3.jpg"},
		{id:4,img_url:"http://127.0.0.1:3001/img/home/ban4.jpg"}
  ];
  res.send(obj)
});
//九宫格
app.get("/nav",(req,res)=>{
  var obj=[
    {id:1,title:"邮轮",img:"http://127.0.0.1:3001/img/home/chuan.jpg"},
    {id:2,title:"景区门票",img:"http://127.0.0.1:3001/img/home/menpiao.png"},
    {id:3,title:"WIFI",img:"http://127.0.0.1:3001/img/home/wifi.jpg"},
    {id:4,title:"签证",img:"http://127.0.0.1:3001/img/home/qianzheng.jpg"},
		{id:5,title:"酒店",img:"http://127.0.0.1:3001/img/home/hotel.png"},
		{id:6,title:"出境游",img:"http://127.0.0.1:3001/img/home/chujing.jpg"},
		{id:7,title:"定制游",img:"http://127.0.0.1:3001/img/home/dingzhi.jpg"},
		{id:8,title:"商品",img:"http://127.0.0.1:3001/img/home/gouwu.jpg"}   
  ];
  res.send(obj)
});
//热门目的地
app.get("/hot",(req,res)=>{
  var obj=[
    {id:1,cname:'内蒙古'},{id:2,cname:'厦门'},{id:3,cname:'福建'},{id:4,cname:'海南'},
    {id:5,cname:'承德'},{id:6,cname:'密云'},{id:7,cname:'大阪'},{id:8,cname:'昆明'}    
  ];
  res.send(obj)
});
//优选旅程
app.get("/youxuan",(req,res)=>{
  var sql = "SELECT * FROM youxuan"; 
  pool.query(sql,[],(err,result)=>{
      if(err) throw err;
        res.send(result);
  })
})
//首页景区门票
app.get("/ticket",(req,res)=>{
  var sql = "SELECT * FROM ticket"; 
  pool.query(sql,[],(err,result)=>{
      if(err) throw err;
        res.send(result);
  })
})
//首页邮轮
app.get("/liner",(req,res)=>{
  var sql = "SELECT * FROM liner"; 
  pool.query(sql,[],(err,result)=>{
      if(err) throw err;
        res.send(result);
  })
})
app.get("/detail",(req,res)=>{
  var id = req.query.id;
  var sql = "SELECT * FROM liner where id = ?"; 
  pool.query(sql,[id],(err,result)=>{
      if(err) throw err;
        res.send(result);
  })
})
//向数据库插入值
/*app.get("/user",(req,res)=>{
  var 
  var sql = "INSERT INTO user VALUES() ?"; 
  pool.query(sql,[id],(err,result)=>{
      if(err) throw err;
        res.send(result);
  })
})*/
//
// app.post("/detail",(req,res)=>{
//   var id = req.body.id;
//   console.log(id);
//   var sql = "SELECT * FROM liner"; 
//   pool.query(sql,[],(err,result)=>{
//       if(err) throw err;
//         res.send(result);
//   })
// })