const express= require("express");
const app=express();
app.get("/home",(req,res)=>{
//Res es el objeto que lo envias xd
//console.log(res)
//Lo mandas a la pagina
// res.send("Dice el auron,ilegalisimo,estoy en home")
res.send("Hola mundo")
// res.redirect("/other")

})
//redireccion


    app.get("/other",(req,res)=>{
        res.json({
            status:400,
            message:"holis"
        })
        
         })
         app.get("/products",(req,res)=>{
             let productos={ name: 'Macbook', price: 1300, id: 40, stack: ['silver', 'black', 'white'] ,decripcion:"hasdahfdiusahfuahsd"}
            res.json(productos)
            
             })
app.listen(3000,()=>{
    console.log("Ilegalisimo")
})