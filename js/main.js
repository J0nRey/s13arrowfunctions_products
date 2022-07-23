var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]

/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/

/*let cantidad = 0
for(i=0;i<productsList.length;i++){
    console.log(productsList[i])
    cantidad = cantidad + 1
    console.log(productsList[0].price) para acceder al costo
}
console.log("la cantidad de productos en produckList es: "+cantidad)*/



//-quiero conocer la cantidad de productos en el array

const getProducsQuantity = array => array.length
let totalProducts = getProducsQuantity(productsList)
console.log(totalProducts)

//-quiero conocer el costo total de todos los productos del array
const getProductsPrice = array => {
    let totalPrice = 0
    for(i=0;i<array.length;i++){
        totalPrice += array[i].price
    }
    return totalPrice
}

let totalPrice = getProductsPrice(productsList)

console.log(totalPrice)

//-quiero conocer la cantidad de productos de cada categoría
//   (Vegetables, Cloths, Miscellaneous, Computers)

const filterByCategory = ( array, selectedCategory) => {
    let result = []
    for(i=0;i<array.length;i++){
//      array[i].category === selectedCategory ? result.push(array[i]) : null
        array[i].category === selectedCategory && result.push(array[i])
    }
    return result
}

let MiscellaneousArray = filterByCategory(productsList , "Miscellaneous")
console.log(MiscellaneousArray)

let vegetablesArray = filterByCategory(productsList , "Vegetables")
console.log(vegetablesArray)

let ClouthsArray = filterByCategory(productsList , "Cloths")
console.log(ClouthsArray)

let ComputersArray = filterByCategory(productsList , "Computers")
console.log(ComputersArray)

// *Punto estra 
// Saber la cantidad de producto por categoria
let MiscellaneousQuantity = getProducsQuantity(MiscellaneousArray)
console.log("Miscellaneous "+MiscellaneousQuantity)
let VegetablesQuantity = getProducsQuantity(vegetablesArray)
console.log("Vegetables "+VegetablesQuantity)
let ClouthsQuantity = getProducsQuantity(ClouthsArray)
console.log("Clouths "+ClouthsQuantity)
let ComputersQuantity = getProducsQuantity(ComputersArray)
console.log("Computers "+ComputersQuantity)

// Saber el precio total del producto por categoria

let MiscellaneousPrice = getProductsPrice(MiscellaneousArray)
console.log("Miscellaneous costo total : $"+MiscellaneousPrice)
let VegetablesPrice = getProductsPrice(vegetablesArray)
console.log("Vegetables costo total : $"+VegetablesPrice)
let ClouthsPrice = getProductsPrice(ClouthsArray)
console.log("Clouths costo total : $"+ClouthsPrice)
let ComputersPrice = getProductsPrice(ComputersArray)
console.log("Computers costo total : $"+ComputersPrice)



//-quiero un nuevo array para cada categoría

const createLabels = array => {
    let result = [];
    for(i=0;i<array.length;i++){
        let string = `El ${array[i].name} tiene un costo de ${array[i].price}`
        result.push(string)
    }
    return result
}

let labelsArray = createLabels(productsList)

console.log(labelsArray)
    
const names = ['jonathan','reyes','alatorre']
names.forEach((names, index) => {
console.log(names+" - "+index)

})
    
