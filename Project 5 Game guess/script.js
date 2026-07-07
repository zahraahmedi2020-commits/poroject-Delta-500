 let a2= Math.floor(Math.random()*10)+1;
function Guess() { 
                    let heading= document.getElementById("R"); 
                    let n1= document.getElementById("a1"); 
                    let R;
                   
                   if (Number(n1.value)==a2){
                      R='correct! the number was '+ a2;
                      
                     }
                   else if(Number(n1.value)>a2){ 
                      R='Too High';
                    
                     }

                   else{
                       R='Too Low';
                   
                       }

      heading.innerText= R;
}
function Reloadlocation(){  let n1= document.getElementById("a1"); 
                            n1.value=' ';
                            location.reload();
}