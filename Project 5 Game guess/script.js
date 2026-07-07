 let a2= Math.floor(Math.random()*10)+1;
function Guess() { 
                    let heading= document.getElementById("R"); 
                    let n1= document.getElementById("a1"); 
                    let R;
                   
                   if (Number(n1.value)==a2){
                      R='correct';
                      
                     }
                   else if(Number(n1.value)>a2){ 
                      R='Too High';
                    
                     }

                   else{
                       R='Too Low';
                   
                       }

      heading.innerText= R;
}
