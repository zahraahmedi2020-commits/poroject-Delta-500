var currentIndex = 0
let DOs=[];
function mainmenu(){
document.getElementById("body").style.display="block";
document.getElementById("addDO").style.display="none";
document.getElementById("showDO").style.display="none";
document.getElementById("searchDO").style.display="none";
document.getElementById("rsearch").innerHTML="";
document.getElementById("result").innerHTML="";
document.getElementById("SidDO").value="";
document.getElementById("StiDO").value="";
}
function addDO(){
document.getElementById("body").style.display="none";
document.getElementById("addDO").style.display="block";}
function saveDO(){
let t=document.getElementById("inputTDO");
let id=currentIndex+1;
let DO={title:t.value,idDO:id,status:false};
DOs.push(DO);
currentIndex++;
alert("New DO save successfully");
t.value="";
document.getElementById("addDO").style.display="none";
document.getElementById("body").style.display="block";}

function showDO(){
 document.getElementById("body").style.display="none";
 document.getElementById("showDO").style.display="block";   

if(DOs.length==0){
    alert("no  DO show");
    document.getElementById("showDO").style.display="none";
    document.getElementById("body").style.display="block"
}else{
    for(let i=0; i<DOs.length; i++){ 
    let r = document.getElementById("result");
    let d =document.createElement("div");
    d.innerHTML ="Title DO: " + DOs[i].title + ",  ID DO:" + DOs[i].idDO + ",   Status:" + DOs[i].status  +", |❎|"; 
    r.appendChild(d);
    let newBR = document.createElement('button'); 
    let TextBR = document.createTextNode('Done'); 
    newBR.appendChild(TextBR);
    d.appendChild(newBR);
    newBR.onclick=function(){DOs[i].status=true;
            alert("change status saccessfully");
            d.innerHTML ="Title DO: " + DOs[i].title + ",  ID DO:" + DOs[i].idDO + ",   Status:" + DOs[i].status  + ", |✅|"; 
    
            d.innerHTML ="Title DO: " + DOs[i].title + ",  ID DO:" + DOs[i].idDO + ",   Status:" + DOs[i].status+" |"; 
        r.appendChild(d);
       let newBD = document.createElement('button'); 
       let TextBD = document.createTextNode('Deleted'); 
       newBD.appendChild(TextBD);
       d.appendChild(newBD);
       newBD.onclick=function(){
        DOs.splice(i,1);
        alert("Do delete");
        d.innerHTML="";
        d.innerHTML ="Title DO: " + DOs[i].title + ",  ID DO:" + DOs[i].idDO + ",   Status:" + DOs[i].status; 
         }
        };
    let newBD = document.createElement('button'); 
    let TextBD = document.createTextNode('Deleted'); 
    newBD.appendChild(TextBD);
    d.appendChild(newBD);
    newBD.onclick=function(){
        DOs.splice(i,1);
        alert("Do delete");
        d.innerHTML="";
    d.innerHTML ="Title DO: " + DOs[i].title + ",  ID DO:" + DOs[i].idDO + ",   Status:" + DOs[i].status; 
    }

}
       }
    }


function searchDO(){
    document.getElementById("body").style.display="none";
    document.getElementById("searchDO").style.display="block";
}
 function findDO(){
   if(DOs.length==0){
         alert("Not find Do");
         document.getElementById("searchDO").style.display="none";
         document.getElementById("body").style.display="block"; 
    }else{
        let id=Number(document.getElementById("sidDO").value);
        let t=document.getElementById("stiDO").value;
        let found=false;    
             for(let i=0; i<DOs.length; i++){   
                if(DOs[i].idDO==id ||DOs[i].title==t ){
                        let r = document.getElementById("rsearch");
                        r.innerHTML+= "<br>"+" Title DO:" + DOs[i].title + ",  ID DO:" + DOs[i].idDO + ",  Status:" + DOs[i].status + "<br>"; 
                        found=true; 
                        break;  
                    }
             }if(!found)alert("Not fund do whtih this ID .");
         }
}
