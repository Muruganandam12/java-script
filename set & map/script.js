// set object - collection of values
// - values are unique

let arr= [1,1,2,3,4,5,5,5,10,8]
let myset1 = new Set(arr)

console.log(arr)
console.log(myset1)

let myset2= new Set()
myset2.add(4)
myset2.add(5)
myset2.add('abc')
myset2.add({'a':1,'b':2})
myset2.add(5)
console.log(myset2)

let obj= {'a':1,'b':2}
myset2.add(obj)
console.log(myset2)

console.log(myset2.has(6))
console.log(myset2.delete(4))

let arr2= Array.from(myset2)
console.log(arr2)
console.clear()

// map 
//map objects are collection of 
// key-value pairs
// a key in the map may only occur once
// key or value can be object

let map1 = new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('a',3)
console.log(map1)
console.log(map1.has(2))
console.log(map1.delete('a'))
console.log(map1.size)
map1.set('d',4)
map1.set('e',6)
console.log(map1)

for (let i of map1){
    console.log(i)
}
for(let [k,v]of map1 ){
    console.log(v)
}

for(let k of map1.keys()){
    console.log(k)
}

map1.forEach((v,k)=>{
    console.log('key',k, 'value',v)
})