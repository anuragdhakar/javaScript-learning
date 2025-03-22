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
//let aar=[1,3,5,6]
// aar.push("last element")
// console.log(aar);

// //to add element in front of array
// aar.unshift("first element","2")
// console.log(aar);


// //to delete element from the front
// aar.shift()
// console.log(aar);

// // to delete an element from the last of an array
// aar.pop()
// console.log(aar);
//--------------------------------------------------------------------------------------------------------------
// let data=["anurag",22,7987329834,"chetak bridge","FSD"]
// let part=data.slice(1,4)
// console.log(part);

//ques even
// let ar1= [1,2,3,45,6,7,8,89,10,34,76,87]
// let one=ar1.slice(2,9);

// for(let a of one){
//     if(a%2==0){
//         console.log(a)
//     }
// }
//

//------------------------------------------17-march-2025--------------------------------------------------------
//splice method used to delete an element from the array and we also can add elements in an array 
let arr=["cybrom",26,"milan",46]
arr.splice(2,1,"anurag","patel")
console.log(arr)

//Destructuring of Array ---if we want to use the elements of an array as variables known as destructuring of array.
let [name,age,shop,ct]=["cybrom",26,"milan",46]
console.log(shop)

//(...)-rest operator--used in functions / spread operator-- merging of 2 array in a single array  
let ar1=["cybrom",26,"milam",46]
let ar2=[2,7,5,6]
let ar3=[...ar1,...ar2]
console.log(ar3)