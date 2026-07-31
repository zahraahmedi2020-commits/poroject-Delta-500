
let score=0;
let students =JSON.parse(localStorage.getItem("students"))||[];
let editindex=-1;
function emptys(){
     if(students.length==0){
         alert("not exist student ");
          mainmenu();
        }
}
function removeall(){
 if(confirm("Are you sure you went to delet all students?")){
 localStorage.removeItem("students");
 students=[];
 shows();}
}

function mainmenu(){
document.getElementById("body").style.display="block";
document.getElementById("dshow").style.display="none";
document.getElementById("dadd").style.display="none";
document.getElementById("ddelet").style.display="none";
document.getElementById("dsearch").style.display="none";
document.getElementById("daverage").style.display="none";
document.getElementById("dchangesc").style.display="none";
document.getElementById("dmax").style.display="none";
document.getElementById("dmin").style.display="none";
document.getElementById("dsorte").style.display="none";
document.getElementById("rsearch").innerHTML="";
document.getElementById("result").innerHTML="";
document.getElementById("rscore").innerHTML="";
document.getElementById("sids").value="";
document.getElementById("sns").value="";
document.getElementById("dids").value="";
document.getElementById("chscs").value="";
document.getElementById("chscids").value="";
}
function adds(){
      document.getElementById("body").style.display="none";
      document.getElementById("dadd").style.display="block";}
function saves(){
    let id= 1;
  if(students.length>0){
     id=Math.max(...students.map(item=>item.ids))+1;
      let n=document.getElementById("inputn");
     let ag=document.getElementById("inputag");
     let sc=document.getElementById("inputsc");
     let m=document.getElementById("inputma");
     if(n.value.trim()==""){
          alert("name is required");
         return;
     }else{
         if(sc.value<0||sc.value>20){
             alert("score must be between 0 and 20");
              return;
        }else{
              let student={fullname:n.value,ids:id,age:ag.value,score:sc.value,major:m.value};
             students.push(student);
             localStorage.setItem("students",JSON.stringify(students));
             alert("student save successfully"+localStorage.getItem("students"));
             n.value="";
             m.value="";
             ag.value=0;
             sc.value=0;
             document.getElementById("dadd").style.display="none";
             document.getElementById("body").style.display="block";
            }

        }
     }else{
     
     let n=document.getElementById("inputn");
     let ag=document.getElementById("inputag");
     let sc=document.getElementById("inputsc");
     let m=document.getElementById("inputma");
     if(n.value.trim()==""){
          alert("name is required");
         return;
     }else{
         if(sc.value<0||sc.value>20){
             alert("score must be between 0 and 20");
              return;
        }else{
              let student={fullname:n.value,ids:id,age:ag.value,score:sc.value,major:m.value};
             students.push(student);
             localStorage.setItem("students",JSON.stringify(students));
             alert("student save successfully"+localStorage.getItem("students"));
             n.value="";
             m.value="";
             ag.value=0;
             sc.value=0;
             document.getElementById("dadd").style.display="none";
             document.getElementById("body").style.display="block";
            }

        }
     }
     }
function shows(){
      document.getElementById("body").style.display="none";
      document.getElementById("dshow").style.display="block";   
      emptys();
          for(let i=0; i<students.length; i++){ 
               let r = document.getElementById("result");
               let d =document.createElement("div");
               if(students[i].score >=17){d.style.color="green";}
               else if(students[i].score>=10){d.style.color="orange";}
               else {d.style.color="red";}
              d.innerHTML ="fullname:" + students[i].fullname + ", id student:" + students[i].ids + ", age:" + students[i].age + ", score:" + students[i].score + ", Major:"+students[i].major + "<br>"; 
               r.appendChild(d);}
         }

function delets(){
   document.getElementById("body").style.display="none";
    document.getElementById("ddelet").style.display="block";
}
function finddelets(){ 
            emptys();
         let id=Number(document.getElementById("dids").value);
         let found=false;
            for(let i=0; i<students.length; i++){  
                if(students[i].ids==id){
                    if(confirm("Are you sure you went to delet this student?")){
                     students.splice(i,1);  
                      localStorage.setItem("students",JSON.stringify(students));
                     found = true;
                     alert("student Deleted");
                     document.getElementById("ddelet").style.display="none";
                     document.getElementById("body").style.display="block";}
                }
             }if(!found)alert("not fund student whtih this ID .");
       }

function searchs(){
    document.getElementById("body").style.display="none";
    document.getElementById("dsearch").style.display="block";
   }
 function finds(){
         emptys();
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
     

function findedit(){
     document.getElementById("body").style.display="none";
     document.getElementById("ddelet").style.display="block";
     document.getElementById("all").style.display="none";
     document.getElementById("headingd").innerHTML="edit Student whith Id ";
     let bs=document.getElementById("bdelet");
     bs.innerText="search";
     bs.onclick=edit;
}
function edit(){
   document.getElementById("body").style.display="none";
   document.getElementById("ddelet").style.display="none";
   let ninput=document.getElementById("inputn");
   let ainput=document.getElementById("inputag");
   let scinput=document.getElementById("inputsc");
   let mainput=document.getElementById("inputma");
   let ide=Number(document.getElementById("dids").value); 
      emptys();
   let found=false;
       for(let i=0; i<students.length; i++){ 
         if(students[i].ids==ide){
             document.getElementById("dadd").style.display="block";
             document.getElementById("save").style.display="none";
             document.getElementById("update").style.display="block";
             document.getElementById("headingform").innerText="Edit Student";
             editindex=i; 
              ninput.value=students[editindex].fullname;
              ainput.value= students[editindex].age;
              scinput.value= students[editindex].score;
              mainput.value= students[editindex].major;
              found=true;}
            }if(!found)alert("not fund student whtih this ID .");
              

            }

  function updates(editindex){
     let ninput=document.getElementById("inputn");
     let ainput=document.getElementById("inputag");
     let scinput=document.getElementById("inputsc");
     let mainput=document.getElementById("inputma");
             students[editindex].fullname= ninput.value;
             students[editindex].age=ainput.value;
             students[editindex].score=scinput.value;
             students[editindex].major=mainput.value;
              localStorage.setItem("students",JSON.stringify(students));
             
               alert("susseccfully update student");
            document.getElementById("dadd").style.display="none";

              shows();
            }
  
           

function changesc(){
document.getElementById("body").style.display="none";
document.getElementById("dchangesc").style.display="block";
document.getElementById("chupdatesc").style.display="none";
}
function findsc(){
    document.getElementById("chscs").style.display="block";
    document.getElementById("sids").style.display="none";
    document.getElementById("chupdatesc").style.display="block";
    document.getElementById("searchsc").style.display="none";
    let id=Number(document.getElementById("chscids").value);
       emptys();
        let found=false;    
             for(let i=0; i<students.length; i++){   
                if(students[i].ids==id){
                     editindex=i;
                     alert("find"+i);
                    found=true; 
                    break;
                    }
             }if(!found)alert("not fund student whtih this ID .");
      
}
function updatesc(editindex){
  let sc=document.getElementById("chscs").value;
     students[editindex].score=sc;
     localStorage.setItem("students",JSON.stringify(students));
     alert("susseccfully update"); 
     shows();             
}
function maxsc(){
    document.getElementById("body").style.display="none";
    document.getElementById("dmax").style.display="block";
      let m=Number(students[0].score);
       emptys();
    for(let i=0;i<students.length;i++){
        if(Number(students[i].score) > m ){
        m=Number(students[i].score);}
    }
    let r=document.getElementById("hmaxsc");
     r.innerText=m;
}
     
     function minsc(){
      document.getElementById("body").style.display="none";
      document.getElementById("dmin").style.display="block";
    let r=document.getElementById("hminsc");
      let m=Number(students[0].score);
         emptys();
    for(let i=0;i<students.length;i++){
        if(Number(students[i].score) < m ){
        m=Number(students[i].score);}
    }
    
     r.innerText=m;
     
    }
  function sortesc(){
     document.getElementById("body").style.display="none";
     document.getElementById("dsorte").style.display="block";
  }
  function Asec(){
 document.getElementById("body").style.display="none";
     document.getElementById("dsorte").style.display="block";
     let m=Number(students[0].score);
       emptys();
    for(let i=0;i<students.length;i++){
        for(let j=i+1;j<students.length;j++){
        if( Number(students[j].score) > Number(students[i].score) ){
        let temp=students[i];
        students[i]=students[j];
        students[j]=temp;}
    }
    document.getElementById("dsorte").style.display="none";
}shows();
}
function Desc(){
document.getElementById("body").style.display="none";
     document.getElementById("dsorte").style.display="block";
     let m=Number(students[0].score);
     emptys();
    for(let i=0;i<students.length;i++){
        for(let j=i+1;j<students.length;j++){
        if( Number(students[j].score) < Number(students[i].score) ){
        let temp=students[i];
        students[i]=students[j];
        students[j]=temp;}
    }
    document.getElementById("dsorte").style.display="none";
}shows();
 
}
  
