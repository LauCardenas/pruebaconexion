module.exports=function isNumber(req,res,next){
// req (todo de front,lo que manda el cliente)
//res =>todo lo que enviamos desde back
let entry=req.body.number
console.log(entry,"middleware")
if (typeof(entry)==Number){
    next()
}else{
    return res.status(400).json({mensaje:"No es numero"})}

//Para asegurarnos que se finalice el bloque aqui

}