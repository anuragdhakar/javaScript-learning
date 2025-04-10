// API- application programming interface used to fetch data from the server to webpage.

//fetch(URL,{})
//=> get , post , delete , put => http request / method

//Synchronous - read the data line by line only 
//Asynchronous - read the small data first 

let fetchData= async()=>{

    let url=("http://localhost:3000/hotel")

    let res=await fetch(url)
    let data=await res.json()
    console.log(data);
    let show=document.querySelector("#datashow")

    // let Show=document.querySelector("#datashow")
    // map method to display the data
    data.map((e)=>{
        show.innerHTML+=`
        
        <tr>
        <td>${e.name}</td>
        <td>${e.contact}</td>
        <td>${e.age}</td>
        <td>${e.price}</td>
      
        </tr>
        `;
    })

}
fetchData();