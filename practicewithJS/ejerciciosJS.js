let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
function addId(productillos){
let newArray=productillos.map((i,k)=> i={...i,id:k+1})
return newArray
}

function eachName(name){
    for (const key in name) {
            let element = name[key].name;
            // console.log(element)
        
    }
}

function eachName(name){
    for (const key in name) {
            let element = name[key].name;
            // console.log(element)
        
    }
}

function productId(product,id){
    const found = product.find(element => element.id==id);
    return found
}
function filterColor(product,color){
    const result = product.filter(i => i.colors.includes(color));
    return result
}
function noColor(product){
    const result = product.filter(i => i.colors.length==0);
    return result
}

function newProduct(){
let other= arrayandId.slice()  
other.push({ name: 'Hola soy yo', price: 200, quantity: 3, colors: [], id: 11})
return other
}
function deletebyStock(){
    const result = arrayandId.filter(i => i.quantity!==0);
    return result
}
function sumatoryStocks(){
    let sum=0
    for (const key in arrayandId) {
        sum = sum+arrayandId[key].quantity;
 
}
 //console.log(sum)
}
let arrayandId=addId(products).slice()
eachName(products)
productId(arrayandId,3)
filterColor(arrayandId,"black")
noColor(arrayandId)
arrayandId=newProduct()
arrayandId=deletebyStock()
sumatoryStocks()

