const express=require("express")
const app=express()
let productos=require("./rutasexpress")
let otra=require("./practica")
app.use(express.json())
app.use("/api",productos)
//Mismo puerto distinto endpoint
app.use("/prueba",otra)

app.listen(3000,()=>{
    console.log("Yes,se creo")
})