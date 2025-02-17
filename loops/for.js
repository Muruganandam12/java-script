//loops
// for loop
/*for(i=1;i<=5;i++){
    console.log("hello")
}
//print 10 to 1
//for(i=10;i>=1;i--){
   // console.log(i)
//}
//while loop
i=10
while(i>=1){
    console.log(i)
    i--;
}
// do while loop
i=10
do{
    console.log(i)
    i--;

}while(i>=1)
   
   //break -stop the loop
   while(true){
    let num= Number(prompt('enter a number'))
    if(!isNaN(num))
        break;

   }*/
// continue -skips the current iteration
for(i=1;i<=10;i++){
    if(i%3==0)
        continue
    console.log(i)
}
// for...of
let arr=['apple','orange','grapes','banana']
for(i=0;i<arr.length;i++){
    console.log(arr[i].toUpperCase())
}
for(let fruit of arr)
    console.log(fruit)    

// for..in
item ={
    name:'phone',
    price:19999,
    qyt:4
}
for (let key in item){
    console.log (item[key])
}
