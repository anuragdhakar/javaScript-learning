// ARROW FUNCTION
// let a= () => {return}
// it is a anonymous function means it does not have any name.



// let a= ()=>{return "Q"}
// console.log(a())
// the a variable is working as function or as variable also.


//-------------------------------------------------------------------------------
// passing parameters to a function
// let a=(b,c)=>{return b+c}
// console.log(a(2,3))


//WAP to take 1 input from the user and find area of circle using arrow function with parameter

// let b=parseInt(prompt("enter the radius "))
// let ar=(b)=>{return 3.14*r*r}
// console.log(ar(b))

//-----------------------------------------------------------------------------------------
//3 syntax of arrow function 

// let c=a=>(a+a)
// console.log(c(10))

//what is ecma script 
//2. what is es-6 and its features

//----------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//04/02/25

// SETinterval(function,time)
//callback function 

// setInterval(()=>{console.log("hello")},2000)

// setInterval(()=>{document.write((count) 
//     count++);
// },2000)
// let st;
// let ct=0
// function fun(){
//     let h=document.querySelector("#count")
//     st=setInterval(()=>{
//         h.innerHTML=ct++
//     },500)
// }
// function stop(){
  
//     clearInterval(st)
//}
//5-feb-25---------------------------------------------------------------------------------------------

//setInterval

// setTimeout(()=>{
    
//     alert("hello")},3000)





// function frmdata(){
//     let num1=parseInt(document.querySelector('#num1').value)
//     let num2=parseInt(document.querySelector('#num2').value)
//     let an=document.querySelector('#answer')
//     an.innerHTML=num1+num2
//     // alert(num1+num2)
//     return false
// }

//06/02/25-thrusday-------------------------------------------------------------------------------------------------------

//Form - validation

function validate(){
    let name=document.querySelector('#name').value
    let email=document.querySelector('#email').value
    let age=document.querySelector('#age').value
    let pass=document.querySelector('#password').value
    let contact=document.querySelector('#contact').value

    if(name==""){
       let error=document.querySelector('#errorname')
       error.innerHTML ="please enter your name"
        document.querySelector('#name').focus()
        return false;
    }
    else if (email==""){
        alert("please enter email");
        document.querySelector('#email').focus()
        return false;
    }
    else if(!(email.includes('@'))){
        alert("please eneter valid email must have @")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('yahoo')||('gmail.com'))){
        alert("please input both yahoo and gmail.com")
        document.querySelector('#email').focus()
        return false
    }
      
else if(age ==""){
    alert("please enter age");
    document.querySelector('#age').focus()
    return false;
}
else if(isNaN(age)){
    alert("please enter valid input in no.")
    document.querySelector('#age').focus()
     return false
}
else if(age >=999){
    alert("please enter valid age")
    document.querySelector('#age').focus()
    return false
}
else if(pass==""){
    alert("please enter password")
    document.querySelector('#password').focus()
    return false
}
else if(!(pass.match(/[~!@#$%^&*-+]/))){
    alert("please enter special character")
document.querySelector('#password').focus()
return false
}
else if(contact==""){
    alert("please enter contact number")
    document.querySelector('#contact').focus()
    return false
}
else if(isNaN(contact)){
    alert(" please  input valid no.")
    document.querySelector('#contact').focus()
    return false
}
else if(contact.length>10 || contact.length<10){
    alert("please fill 10 digit number")
document.querySelector('#contact').focus()
    return false
}
}
