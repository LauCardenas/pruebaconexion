//Arriba modulos respecto a librerias,abajo modulos propios
const express=require("express")
const router=express.Router()
const middleware=require("../middlewares/middle1")
let arr=[1,2,3,4]
router.get("/primera",(req,res)=>{
  
    try{  res.status(200).json({        
          message:"Si cargo get",
          arr
      })
  } catch(error){
      console.log(error)
  }
})

router.post("/primera",middleware,(req,res)=>{  
    try{  res.status(200).json({        
        message:"Si cargo post",
      })
  } catch(error){
    res.send("Error de la pagina")
  }
})
//queremos verificar que lo que nos esten enviando sean solo numeros
module.exports=router