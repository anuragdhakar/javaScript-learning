let dataFetch=async()=>{

    let urll=("http://localhost:3000/management")

    let one=await fetch(urll,{method:"GET"})

    let main=await one.json()
    console.log(main)

    let changer=document.querySelector("#dataonly")

    main.map((e)=>{
    changer.innerHTML+=`
    
    <tr>
    <td>${e.name}</td>
     <td>${e.age}</td>
      <td>${e.contact}</td>
      <td>${e.gmail}</td>
      
    </tr>
    
    `
    })
}


dataFetch();