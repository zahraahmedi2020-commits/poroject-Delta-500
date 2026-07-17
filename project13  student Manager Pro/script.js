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
document.getElementById("dchangesc").style.display="none";
document.getElementById("dmaxscore").style.display="none";
document.getElementById("dminscore").style.display="none";
document.getElementById("dsorte").style.display="none";
document.getElementById("rsearch").innerHTML="";
document.getElementById("result").innerHTML="";
document.getElementById("rscore").innerHTML="";
document.getElementById("sortesc").innerHTML="";
document.getElementById("sids").value="";
document.getElementById("sns").value="";
document.getElementById("dids").value="";
}
function adds(){
      document.getElementById("body").style.display="none";
      document.getElementById("dadd").style.display="block";}
function saves(){
      let n=document.getElementById("inputn");
      id=currentIndex+1;
     let ag=document.getElementById("inputag");
     let sc=document.getElementById("inputsc");
     let m=document.getElementById("inputma");
     let student={fullname:n.value,ids:id,age:ag.value,score:sc.value,major:m.value};
     students.push(student);
     currentIndex++;
     alert("student save successfully");
     n.value="";
     m.value="";
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
              d.innerHTML ="fullname:" + students[i].fullname + ", id student:" + students[i].ids + ", age:" + students[i].age + ", score:" + students[i].score + ", Major:"+students[i].major + "<br>"; 
               r.appendChild(d);}
         }
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
                     document.getElementById("ddelet").style.display="none";
                     document.getElementById("body").style.display="block";
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
        let n=document.getElementById("sns").value;
        let found=false;    
             for(let i=0; i<students.length; i++){   
                if(students[i].ids==id||students[i].fullname==n){
                        let r = document.getElementById("rsearch");
                        r.innerHTML+= "<br>"+" name:" + students[i].fullname + ", id student:" + students[i].ids + ", age:" + students[i].age + ", score:" + students[i].score + ", major:"+students[i].major + "<br>"; 
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
function edit(){
    document.getElementById("body").style.display="none";
    document.getElementById("dadd").style.display="block";
    document.getElementById("save").style.display="none";
    document.getElementById("update").style.display="block";
    document.getElementById("headingform").innerText="Edit Student";
}
function findedit(){}
function changesc(){
document.getElementById("body").style.display="none";
document.getElementById("dchangesc").style.display="block";
}
function findsc(){
    document.getElementById("chscs").style.display="block";
    document.getElementById("sids").style.display="none";
    let id=Number(document.getElementById("chscids").value);
    let sc=document.getElementById("chscs").value;
     if(students.length==0){
         alert("no student ");
         document.getElementById("dchangesc").style.display="none";
         document.getElementById("body").style.display="block"; 
       }else{
        let found=false;    
             for(let i=0; i<students.length; i++){   
                if(students[i].ids==id){
                        students[i].score=sc;
                        found=true; 
                        alert("successfuly update score ");
                        let r = document.getElementById("rscore");
                        r.innerHTML+= "<br>"+" name:" + students[i].fullname + ", id student:" + students[i].ids + ", age:" + students[i].age + ", score:" + students[i].score + ", major:"+students[i].major + "<br>"; 
                        found=true; 
                    break;
                    }
             }if(!found)alert("not fund student whtih this ID .");
       }
}
function maxsc(){
    document.getElementById("body").style.display="none";
    document.getElementById("dmaxscore").style.display="block";
    let max=0;
    for(let i=0;i<students.length;i++){
        max=max(Number(students[i].score));}
     let r=document.getElementById("hmaxsc");
     r.innerText=max;
     }
     function minsc(){
      document.getElementById("body").style.display="none";
      document.getElementById("dminscore").style.display="block";
  
     }
  function sortesc(){
     document.getElementById("body").style.display="none";
     document.getElementById("dsorte").style.display="block";
  }

  
