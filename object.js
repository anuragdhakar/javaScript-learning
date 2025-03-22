// 20-march-2025-----------------------------------------------------------------------------------------
//Objects that is a collection of diff. types of data.
//Stored as (key - value) pairs. 
// let emp ={
//     emp_name : "anurag",
//     emp_city : "bpl",
//     emp_contact : 123,
//     emp_designation : "jr developer",
//     emp_account:{
//         emp_balance: 2000,
//         emp_address : "pari bazar"
//     }
// }
// // if we want to access the value of object inside object use the below concept----
// console.log(emp.emp_account.emp_address);


// function savedata(){

// let name =document.querySelector('#name').value
// let age =document.querySelector('#age').value
// let contact =document.querySelector('#contact').value

// let person ={

//     pr_name :name ,
//     pr_age :age ,
//     pr_contact : contact
// }
// console.log(person)

// return false
// }

//-----------------------22-march-2025-----------------------------------------------------------------------
//accessing of array and function in an object
// let ob ={
//     name : "anurag",
//     contact : 89898,
    
//     obfun : function(){
//         alert("working")

//     },
//     car : ["BMW","audi","maruti"],
// }
// ob.obfun()
// console.log(ob.car[1]);

//merging 2 objects 

let obj1={
    name : "imran",age:90,contact:123
}

let obj2={
    city: "bpl",state:"mp",...obj1
}

obj2.email = "imran@gmail"
// let obj3={...obj1,...obj2}
console.log(obj2); 

//to delete an element from object using key.
delete obj2.state