var express=require('express')
var bodypaser=require('body-parser');

const server=express()
server.set("view engine","ejs");
server.use(bodypaser.urlencoded({extended:true}));


server.listen(8000,function(){
    console.log("server started listening...")
});


server.get("/",function(req,res){
    res.render("login")

})
server.get("/home",function(req,res){
    res.render("home")
})
server.get("/login",function(req,res){
    res.sendFile(__dirname+"/views/login.html")
    
})
server.get("/services",function(req,res){
    res.render("services")
})
server.post("/validate",function(req,res){
    console.log(req.body.user)
    if(req.body.user=="admin"){
        res.send("login success")
    }
    else{
        res.send("login failed")
    }
})