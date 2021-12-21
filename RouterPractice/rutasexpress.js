const express=require("express")
const router=express.Router()
// const middle=require("../middlewares")
let urn="/products"
let products

router.get(urn,(req,res)=>{
  
  try{  res.status(200).json({
        products,
        message:"Si cargo get"
    })
} catch(error){
    console.log(error)
}
 })
 router.get(`${urn}/:id`,(req,res)=>{
  
    let id=req.params.id
    let products2=products.find((p)=>p.id===Number(id))
    res.status(200).json({   
        
        products2,
        message:"Si cargo get id"
    })
 })
 router.post(urn,(req,res)=>{
    
    let product=req.body
   
    products=product
    res.status(200).json({
        
        message:"Si cargo post"
    })
 })
 router.put(`${urn}/:id`,(req,res)=>{
    
    let id=req.params.id
    let products2=products.find((p)=>p.id===Number(id))
    products2.name="hola"
    res.status(200).json({
        products,
        message:"Si cargo post"
    })
 })
 router.delete(`${urn}/:id`,(req,res)=>{
    
    let id=req.params.id
    products=products.filter((p)=>p.id!==Number(id))
    
    res.status(200).json({
        products,
        message:"Si cargo delete"
    })
 })
//Asi tienen acceso las otras carpetas o archivos
module.exports=router;