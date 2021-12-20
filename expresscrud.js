const express= require("express");
const app=express();
//para leer el body en formato json creo
app.use(express.json()) 
let urn="/api/products"
let products = [
    {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
// 1. Retornar todos los productos del array. “/api/products”,
// 2. Obtener un producto específico mediante su ID “/api/product/:id”
// 3. Agregar un nuevo producto “/api/product”,
// 4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/product/:id”,
// 5. Eliminar un producto mediante su ID “/api/product/:id”,

app.get(urn,(req,res)=>{
  
    res.status(200).json({
        products,
        message:"Si cargo"
    })
 })
 app.get(`${urn}/:id`,(req,res)=>{
  
    let id=req.params.id
    let products2=products.find((p)=>p.id===Number(id))
    res.status(200).json({
        products2,
        message:"Si cargo"
    })
 })
 app.post(urn,(req,res)=>{
     //Para que era esto?
    let product=req.body
   
    products.push({"id":11,"name":"Gamepad","price":30,"quantity":25,"colors":["black","silver"]})
    res.status(200).json({
        products,
        message:"Si cargo"
    })
 })
 app.listen(3000,()=>{
    console.log("Yes,se creò")
})