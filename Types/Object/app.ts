const obj = {
    id: 1
}

console.log(obj)
console.log(obj.id)



const myObj: object = { // object or {} 
    id: 1
}
console.log(myObj)
// console.log(myObj.id) // error

// best
const object: { id: number } = {
    id: 2,
}

console.log(object)
console.log(object.id)

