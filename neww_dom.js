//25/feb/2025-------------------------------------------------
//EVENTS / ACTIONS---performed by users on web page.

//Mouse events 


//To check you can go to first.html file...to chech the examples.
function fun(){
    alert("Proper working")
}

function zero(){

    let a= document.getElementById('hero')
 a.textContent ="zero"
}

function red(){
    let body= document.getElementById("color");
    body.style.backgroundcolor = "red";
}

function incre(){
   let a = document.getElementById("count")
   v1++
   a.textContent= v1

    }

function decre(){
    if(v1!=0){
        let a = document.getElementById("count")
        v1--
        a.textContent= v1
    }
    else{alert("not less than 0")}
         }


