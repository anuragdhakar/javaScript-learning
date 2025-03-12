//10-march-25---------------------------------------------------------------------------------------------------
// Array- collection of different type of data
//[],ordered 
//index => start from 0( position of element )

// let arr=[2,'a',"anurag",1.11,true]
// // console.log(arr[2]);

// for(let vl of arr){
//     console.log(vl);
// }

// let arr=[];

// for(let i=0;i<=5;i++){
// arr[i]=(parseInt(prompt("enter array element")))
// }

// for(let n of arr){
// console.log(n)
// }



//--------------------------------------------12-march-25----------------------------------------------------

//To add last element
let aar=[1,3,5,6]
aar.push("last element")
console.log(aar);

//to add element in front of array
aar.unshift("first element","2")
console.log(aar);


//to delete element from the front
aar.shift()
console.log(aar);

// to delete an element from the last of an array
aar.pop()
console.log(aar);