//Prueba JS
function calculatePrice(nombre,precio){
    let costEnvio
    if (precio<=2000){costEnvio=300}
    else if(2000<precio<=4000){costEnvio=500}
    else{costEnvio=700}
return `El producto ${nombre}cuesta ${precio}. 
Su costo de envío es de ${costEnvio}. 
Por lo tanto, el precio final es de ${costEnvio+precio}’`
}
console.log(calculatePrice('Macbook', 2500))
console.log(calculatePrice('Celular', 500))
console.log(calculatePrice('Playstation', 4500))