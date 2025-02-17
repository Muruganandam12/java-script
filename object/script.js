let item ={
    name:'phone',
    price:'20000',
    quantity:5,
    categories:['electronic','phones'],
    dimensions:{
        length:7,
        height:2,
        breadth:23

    }

}

// another way to create object
let item2= new Object();
item2.name='charger'
item2.price=999
item2.quantity=3
console.log(item2)

//accessing object
//dot notation
console.log(item.price)
item.price=29000

item.returnabel=true
console.log(item)
console.log(item.categories[0])
console.log(item.dimensions.length)
let itemnew ={
    name:'phone',
    price:'20000',
    buy:function(){
        console.log("item added to cart")
    },
    addtolist(){
        console.log("item added to list")
    }
}
itemnew.buy()
itemnew.addtolist()