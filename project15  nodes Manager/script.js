let notes =JSON.parse(localStorage.getItem("notes"))||[];

let editindex=-1;
function empty(){
  if(notes.length==0){
    alert("not exist notes ");
    mainmenu();
  }
}

function mainmenu(){
 document.getElementById("base").style.display="block";
 document.getElementById("dshow").style.display="none";
 document.getElementById("dadd").style.display="none";
 document.getElementById("dsearch").style.display="none";
 document.getElementById("update").style.display="none";
 document.getElementById("dedit").style.display="none";
 document.getElementById("save").style.display="block";
 document.getElementById("result").innerHTML="";
 document.getElementById("inputs").innerHTML="";
 document.getElementById("inputt").innerHTML="";
}

function addn(){ 
 document.getElementById("base").style.display="none";
  document.getElementById("dadd").style.display="block";
}

function saven(){ 
  let id= 1;
  if(notes.length>0){
    id=Math.max(...notes.map(item=>item.idn))+1;
   let sn=document.getElementById("inputs");
   let tn=document.getElementById("inputt");
    if(sn.value.trim()==""){
          alert("Subject is required");
         return;
     }else{
   let note={subject:sn.value,idn:id,texe:tn.value};
       notes.push(note);
       localStorage.setItem("notes",JSON.stringify(notes));
       alert("successfuly note"+note);
       sn.value="";
       tn.value="";
       shown();}
  }else{
    let sn=document.getElementById("inputs");
   let tn=document.getElementById("inputt");
    if(sn.value.trim()==""){
          alert("Subject is required");
         return;
     }else{
   let note={subject:sn.value,idn:id,texe:tn.value};
   notes.push(note);
  localStorage.setItem("notes",JSON.stringify(notes));
  alert("successfuly note");
  sn.value="";
  tn.value="";
  shown();}
  }
  
}

function shown(){
  document.getElementById("result").innerHTML="";
 document.getElementById("base").style.display="none";
  document.getElementById("dadd").style.display="none";
 document.getElementById("dshow").style.display="block";   
 empty();
 for(let i=0; i<notes.length; i++){ 
    let r = document.getElementById("result");
    let d =document.createElement("div");
    d.innerHTML=" * "+"Title note : | " + notes[i].title + " |   Id note :" 
    + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
    + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
    +"  | Pinned :"+notes[i].pinned + " | ";
    r.appendChild(d);
    let newBD = document.createElement('button'); 
    newBD.innerHTML='Delete'; 
    d.appendChild(newBD);
    newBD.onclick=function(){
                    if(confirm("Are you sure you went to delet this note?")){
                    notes.splice(i,1);
                    r.removeChild(d);
                    localStorage.setItem("notes",JSON.stringify(notes));}
    };
    
    r.style.textAlign='left';
    r.style.color="black"
    r.style.padding='10px 10px';
    r.style.backgroundColor="lightblue";
    r.style.margin='0.5em';
  }
}


  
function searchn(){
 document.getElementById("base").style.display="none";
 document.getElementById("dsearch").style.display="block";
}

function findn(){
  empty();
  let id=Number(document.getElementById("sidn").value);
  let sub=document.getElementById("ssub").value;
  let found=false;    
  for(let i=0; i<notes.length; i++){   
    if(notes[i].idn==id||notes[i].subject==sub){
      let r = document.getElementById("rsearch");
      r.innerHTML+= "<br>"+" Subject :" + notes[i].subject + " |  Id note:" + notes[i].idn + " | Texe:" + notes[i].texe  + "<br>"; 
      found=true; 
       break;  
      }
  }if(!found)alert("not found note whtih this ID .");
  
}

function findeditn(){
 document.getElementById("base").style.display="none";
 document.getElementById("dedit").style.display="block";     
}

function edit(){
  document.getElementById("base").style.display="none";
  document.getElementById("dedit").style.display="none";
  document.getElementById("dadd").style.display="block";
  document.getElementById("update").style.display="block";
  document.getElementById("save").style.display="none";
  let sinput=document.getElementById("inputs");
  let tinput=document.getElementById("inputt");
  let ide=Number(document.getElementById("eidn").value); 
  console.log(ide);
  empty();
  let found=false;
  for(let i=0; i<notes.length; i++){ 
    if(notes[i].idn==ide){
      document.getElementById("dadd").style.display="block";
      document.getElementById("save").style.display="none";
      document.getElementById("update").style.display="block";
      editindex=i; 
      sinput.value=notes[editindex].subject;
      tinput.value= notes[editindex].texe;
      found=true;
    }
    }if(!found)alert("not found note whtih this ID .");
  }

function updates(editindex){
 let sinput=document.getElementById("inputs");
 let tinput=document.getElementById("inputt");
 notes[editindex].subject= sinput.value;
 notes[editindex].texe=tinput.value;
 localStorage.setItem("notes",JSON.stringify(notes));
 alert("susseccfully update notes");
 document.getElementById("dadd").style.display="none";
 shown();
}

function sortn(type){
  if(type==1){
    notes.sort((a,b)=>a.idn-b.idn);
   }else if(type==2){
    notes.sort((a,b)=>b.idn-a.idn);
   }else if(type==3){
    notes.sort((a,b)=>a.subject.localeCompare(b.subject));
   }else if(type==4){
    notes.sort((a,b)=>b.subject.localeCompare(a.subject));
   }
 shown();
}

function filters(){
 let s=document.getElementById("fs").value.toLowerCase();
 document.getElementById("result").innerHTML="";
 let found=false;    
  for(let i=0; i<notes.length; i++){
   let str= notes[i].subject.toLowerCase();
    if(str.includes(s)){
      let r = document.getElementById("result");
      r.innerHTML= "<br>"+" Subject :" + notes[i].subject + " |  Id note:" + notes[i].idn + " | Texe:" + notes[i].texe  + "<br>"; 
      found=true; 
       
      }
  }if(!found)alert("not found want your filter .");
}
