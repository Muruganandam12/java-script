// function
// func declaration
function isPositive(num){ // parameter
    return num>0
}
console.log(isPositive(-1))// argument

function Sayhello(){
    console.log('hello')
}
Sayhello()

function findProduct(a,b){
    return a*b
}
console.log(findProduct(1,3))
// default parameter
function greet(name='there'){
    console.log('hi',name)
    }
 greet('ram')  
 greet() 
 // recursion
 function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
 }
 console.log(factorial(5))
 // function expression
 // assigned to a variable as object

 let isEven= function(num){
    return num%2==0
 }
 console.log(isEven(4))

 let arr= [1,2,3,4,5,6]
 let sum=function(arr){
    let sum=0
    for(let val of arr){
        sum+= val
    }
    return sum
 }
 console.log(sum(arr))

 //let volume=function(l,b,h){
   // return l*b*h
// }
 // arrow function
 let volume=(l,b,h)=>{return l*b*h}
 console.log(volume(3,5,9))

 let sumofarr = arr=>{
    let sum=0
    for(let val of arr){
        sum+= val
    }
    return sum
 }
 console.log(sumofarr(arr))
 //area of circle
 let area=r=>Math.PI*r*r
 console.log(area(5))
 //variable argument
 let pro= function(...args){
    result=1
    for(let val of args)
        result*= val
    return result

 }
 console.log(pro(3,5,9,10))
 // Generators - infinite data to be generated

 function* indexGenerator(){
    let index=1
    while(true){
        yield index++
    }
 }
 const gen = indexGenerator();
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)


 // callback- function passed as argument
 function greetConsole(name){
    console.log('hello',name)
 }

function greetHeading(name){
    const heading =document.querySelector('h1')
    heading.innerHTML= 'hello'+ name
}
function greets(callback){
    console.log(callback)
    callback('Ram')
}
greets(greetConsole)
greets(greetHeading)

// for each
arr =['deepa','logu','ramya']
arr.forEach(print)

function print(val){
    console.log(val)
}
array = ['ECE','IT','CSE','EEE']

array.forEach(val =>{
    const opt=document.createElement('option')
    opt.textContent = val
    opt.value= val
    document.getElementById('branch').appendChild(opt)
});

// map - executes callback for each array
// element add returns new array

let priceUSD= [20,30,40]
let priceINR=priceUSD.map(x => x *83)
console.log(priceINR)

const input =[
    {name:'john',age:17},
    {name:'johny',age:19},
    {name:'joe',age:2},
    {name:'jothi',age:13},
    {name:'jo',age:20},
]
const ages= input.map(x => x.age)
console.log(ages)
// filter -returns new array by checking
// each value of original arr using back fn

let cost=[35,234,12,67,90]
let lessthan100 =cost.filter(x => x<100)
console.log(lessthan100)
// reduce - executes reducer callback
// and returns accumulated result
let costs=[35,234,12,54,123]
let coststotal= costs.reduce((total,el)=>total + el)
console.log(coststotal)
arr2d =[
    ["a","b","c"],
    ["c","d","e"],
    ["d","f","g"],

];
// result ={a:1,b:1}
console.log(arr2d.flat()) // flat 2 dimentional convert into 1 dimentional arr
let count= arr2d.flat().reduce(
    (accumulator,currval) => {
        if (accumulator[currval])
            accumulator[currval]++
        else
        accumulator[currval] =1
        return accumulator
    }

    
    ,{});
    console.log(count)



let a= 100

function func1(){
    console.log('a is a',a)
}
func1()
a=200
func1()
// returning functions & closure
// returning func - higher order func
// lexical scoping - inner scope can access
//A closure is the combination of a 
//function bundled together (enclosed) 
//with references to its surrounding state 
//(the lexical environment). 
//In other words, a closure gives you 
//access to an outer function's scope from
//an inner function.
function outer(name){
    let outervariable= 'Bread'
    function inner(){
        let innervariable= 'Butter'
        console.log('inner variable',innervariable)
        console.log('outer variable',outervariable)
        console.log('a is a',a)
        console.log('hello',name)

    } 
    return inner
}
 let call1 =outer('vidya')
 call1()
 let call2= outer('john')
 call2()

 function makeAdder(x){
    return  function (y){
        return x+y
    }
 }
 let add= makeAdder(5)
 console.log(add(10))

 let adder=makeAdder(100)
 console.log(adder(20))


// Memory Management

let bigNum = 9007199254740991n

const bigNum2 = BigInt(9007199254740991)

let obj1 = {name:'Danya',age:24}
let obj2 = obj1
obj1.age = 25
obj2.name= 'logu'
console.log('obj1',obj1)
console.log('obj2',obj2)

let arr1=[3,6,9]
let arr2=arr1
arr1[0]=10
console.log(arr1,arr2)
