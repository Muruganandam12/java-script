let user1 ={
    name:'Logu',
    age:22,
    login(){
        console.log('Hi',this.name)
        console.log('you are logged in')
    },
    logout(){
        console.log('you are logged out')
    }
}

let user2 ={
    name:'Ram',
    age:23,
    login(){
        console.log('Hi',this.name)
        console.log('you are logged in')
    },
    logout(){
        console.log('you are logged out')
    }
}

let user3 ={
    name:'karthish',
    age:24,
    login(){
        console.log('Hi',this.name)
        console.log('you are logged in')
    },
    logout(){
        console.log('you are logged out')
    }
}

user1.login()
user2.login()
user3.login()
// class is a template of properties
// and methods
class User{
    static numberofUsers =0
    constructor(name,age){
        // instance variable
        this.name = name
        this.age = age
        User.numberofUsers++
    }
    login(){
        console.log('Hi',this.name)
        console.log('you are logged in')
    }
    logout(){
        console.log('you are logged out')
    }
    static displaytotalUsers(){
        console.log('Total no of users',User.numberofUsers)
    }
}
let userone= new User('Ramesh',22)


let usertwo= new User('Ram',23)
//console.log('No of users',User.numberofUsers)
User.displaytotalUsers()
let movie ='PS1'
let music = new String('ARR')