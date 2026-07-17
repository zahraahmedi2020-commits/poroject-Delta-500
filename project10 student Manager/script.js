var currentIndex = 0
let score=0;
let students=[];
function mainmenu(){
document.getElementById("body").style.display="block";
document.getElementById("dshow").style.display="none";
document.getElementById("ddelet").style.display="none";
document.getElementById("dshow").style.display="none";
document.getElementById("dsearch").style.display="none";
document.getElementById("daverage").style.display="none";
document.getElementById("rsearch").innerHTML="";
document.getElementById("result").innerHTML="";
document.getElementById("sids").value="";
document.getElementById("dids").value="";
}
function adds(){
document.getElementById("body").style.display="none";
document.getElementById("dadd").style.display="block";}
function saves(){
let n=document.getElementById("inputn");
let f=document.getElementById("inputf");
let id=currentIndex+1;
let ag=document.getElementById("inputag");
let sc=document.getElementById("inputsc");
let student={name:n.value,family:f.value,ids:id,age:ag.value,score:sc.value};
students.push(student);
currentIndex++;
alert("student save successfully");
n.value="";
f.value="";
ag.value="";
sc.value="";
document.getElementById("dadd").style.display="none";
document.getElementById("body").style.display="block";}
function shows(){
document.getElementById("body").style.display="none";
document.getElementById("dshow").style.display="block";   

if(students.length==0){
    alert("no student show");
    document.getElementById("dshow").style.display="none";
    document.getElementById("body").style.display="block"
}else{
    for(let i=0; i<students.length; i++){ 
    let r = document.getElementById("result");
    let d =document.createElement("div");
    d.innerHTML ="name:" + students[i].name + ", family:"+students[i].family + ", id student:" + students[i].ids + ", age:" + students[i].age + ", score:" + students[i].score + "<br>"; 
     r.appendChild(d);
    }}
}
function delets(){
document.getElementById("body").style.display="none";
document.getElementById("ddelet").style.display="block";
}
function finddelets(){ 
if(students.length==0){
    alert("no student delet");
    document.getElementById("ddelet").style.display="none";
    document.getElementById("body").style.display="block";
}else{
    let id=Number(document.getElementById("dids").value);
    let found=false;
            for(let i=0; i<students.length; i++){  
                if(students[i].ids==id){
                     students.splice(i,1);  
                     found = true;
                     alert("student Deleted");
                     break;
                }
             }if(!found)alert("not fund student whtih this ID .");
     }
}
function searchs(){
    document.getElementById("body").style.display="none";
    document.getElementById("dsearch").style.display="block";
}
 function finds(){
   if(students.length==0){
         alert("no student delet");
         document.getElementById("dsearch").style.display="none";
         document.getElementById("body").style.display="block"; 
    }else{
        let id=Number(document.getElementById("sids").value);
        let found=false;    
             for(let i=0; i<students.length; i++){   
                if(students[i].ids==id){
                        let r = document.getElementById("rsearch");
                        r.innerHTML+= "<br>"+" name:" + students[i].name + ", family:"+students[i].family + ", id student:" + students[i].ids + ", age:" + students[i].age + ", score:" + students[i].score + "<br>"; 
                        found=true; 
                        break;  
                    }
             }if(!found)alert("not fund student whtih this ID .");
         }
}
function average(){
    document.getElementById("body").style.display="none";
    document.getElementById("daverage").style.display="block";
    let sum=0;
    for(let i=0;i<students.length;i++){
        sum=Number(students[i].score)+sum;}
let avg=sum/students.length;
let r=document.getElementById("hsc");
r.innerText=avg;
  
}