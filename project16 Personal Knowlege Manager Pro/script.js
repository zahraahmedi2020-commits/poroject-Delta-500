let notes =JSON.parse(localStorage.getItem("notes"))||[];
let currenttype="";
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
 document.getElementById("update").style.display="none";
 document.getElementById("dedit").style.display="none";
 document.getElementById("del").style.display="none";
 document.getElementById("dela").style.display="none";
 document.getElementById("searche").style.display="block";
 document.getElementById("save").style.display="block";
 document.getElementById("result").innerHTML="";
 document.getElementById("inputs").innerHTML="";
 document.getElementById("inputt").innerHTML="";
 document.getElementById("inputtag").innerHTML="";
 document.getElementById("eidn").innerHTML="";
}

function addn(){ 
  document.getElementById("base").style.display="none";
  document.getElementById("dadd").style.display="block";
}
function getcurrentDate(){return new Date().toLocaleString();}

function saven(){ 
  let id= 1;
  if(notes.length>0){
    id=Math.max(...notes.map(item=>item.idn))+1;
   let sn=document.getElementById("inputs");
   let tn=document.getElementById("inputt");
   let tag=document.getElementById("inputtag");
    if(sn.value.trim()==""){
          alert("Title is required");
         return;
     }else{
     
       let note={idn:id,title:sn.value,texe:tn.value,
        tags:tag.value.split(",").map(item=>item.trim()),
        pinned:false,createdAt:getcurrentDate(),updateAt:null};
       notes.push(note);
       localStorage.setItem("notes",JSON.stringify(notes));
       alert("successfuly note"+note);
       sn.value="";
       tn.value="";
       tag.value="";
       shown();}
  }else{
   let sn=document.getElementById("inputs");
   let tn=document.getElementById("inputt");
   let tag=document.getElementById("inputtag");
    if(sn.value.trim()==""){
          alert("Title is required");
         return;
     }else{
      let note={idn:id,title:sn.value,
        texe:tn.value,tags:tag.value,
        pinned:false,createdAt:getcurrentDate(),createdTime:new Date().getDate(),updateAt:null};
       console.log(note);  
       notes.push(note);
       localStorage.setItem("notes",JSON.stringify(notes));
       alert("successfuly note");
       sn.value="";
       tn.value="";
       tag.value="";
       shown();}
  }
  
}

function findedit(){
 document.getElementById("base").style.display="none";
 document.getElementById("dedit").style.display="block";  
document.getElementById("headinge").innerText="edit notes";
}

function editn(){
   let ide=Number(document.getElementById("eidn").value); 
  let sinput=document.getElementById("inputs");
  let tinput=document.getElementById("inputt");
  let taginput=document.getElementById("inputtag");
  empty();
  let found=false;
  for(let i=0; i<notes.length; i++){ 
    if(notes[i].idn==ide){
        document.getElementById("dedit").style.display="none";
      document.getElementById("dadd").style.display="block";
      document.getElementById("save").style.display="none";
      document.getElementById("update").style.display="block";
      editindex=i; 
      sinput.value=notes[editindex].title;
      tinput.value= notes[editindex].texe;
      taginput.value=notes[editindex].tags;
      notes[i].updateAt=getcurrentDate();
      console.log(notes[i]);
      found=true;}
    }if(!found)alert("not found notes whtih this ID .");
}

function updateedit(editindex){
 let sinput=document.getElementById("inputs");
 let tinput=document.getElementById("inputt");
 let taginput=document.getElementById("inputtag");
 notes[editindex].subject= sinput.value;
 notes[editindex].texe=tinput.value;
 notes[editindex].tags=taginput.value.split(",").map(item=>item.trim());
 localStorage.setItem("notes",JSON.stringify(notes));
 alert("susseccfully update notes");
 document.getElementById("dadd").style.display="none";
 shown();
}

function deleten(){
 document.getElementById("base").style.display="none";
 document.getElementById("dedit").style.display="block";  
 document.getElementById("headinge").innerText="Deleted notes";
 document.getElementById("del").style.display="block";
 document.getElementById("dela").style.display="block";
 document.getElementById("searche").style.display="none";
 
}

function findd(){
    let ide=Number(document.getElementById("eidn").value); 
    empty();
    let found=false;
    for(let i=0; i<notes.length; i++){ 
      if(notes[i].idn==ide){
       if(confirm("Are you sure you went to delet this note?")){
         notes.splice(i,1);
         localStorage.setItem("notes",JSON.stringify(notes));}
        found=true; }
      }if(!found)alert("not found note whtih this ID .");  
}

function deleteall(){
if(confirm("Are you sure you went to delet all students?")){
 localStorage.removeItem("notes");
 notes=[];}
}


function shown(){
 document.getElementById("base").style.display="none";
 document.getElementById("dshow").style.display="block"; 
 document.getElementById("result").style.display="block"; 
 document.getElementById("result").innerHTML="";
 document.getElementById("dadd").style.display="none";   
 document.getElementById("counter").innerHTML=Number(notes.length);
 console.log(JSON.parse(localStorage.getItem("notes")).length);
 empty();
 for(let i=0; i<notes.length; i++){ 
    let r = document.getElementById("result");
    let d =document.createElement("div");
    d.innerHTML=" * "+"Title note : | " + notes[i].title + " |   Id note :" 
    + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
    + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
    +"  | Pinned :"+notes[i].pinned + " | ";
    r.appendChild(d);
    if(notes[i].pinned==false){
    let newBD = document.createElement('button'); 
    newBD.innerHTML='Pinned'; 
    d.appendChild(newBD);
    console.log(d);
    newBD.onclick=function(){ 
                  notes[i].pinned=true;
                  localStorage.setItem("notes",JSON.stringify(notes)); 
                  d.innerHTML=" * "+"Title note : | " + notes[i].title + " |   Id note :" 
                   + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
                   + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
                   +"  | Pinned :"+notes[i].pinned + " | ";
                   }
                  }
    r.style.textAlign='left';
    r.style.color="black"
    r.style.padding='10px 10px';
    r.style.backgroundColor="lightblue";
    r.style.margin='0.5em';
  }
}

function searchn(type){
      document.getElementById("dsearch").style.display="block";
 if(type=="title"){
    document.getElementById("headingshow").innerHTML="Search by Title";
    currenttype=type;
   }else if(type=="texe"){
    document.getElementById("headingshow").innerHTML="Search by Texe";
       currenttype=type;

 }
}

function searchNotes(value){
  console.log({type:currenttype,value:value});
  
 if(currenttype=="title"){
 let s=value.toLowerCase();
 document.getElementById("result").innerHTML="";
 let found=false;    
  for(let i=0; i<notes.length; i++){
   let str= notes[i].title.toLowerCase();
    if(str.includes(s)){
      let r = document.getElementById("result");
      r.innerHTML+= "<br>"+" * "+"Title note : | " + notes[i].title + " |   Id note :" 
       + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
       + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
       +"  | Pinned :"+notes[i].pinned + " | "+ "<br>"; 
      found=true; }
  }if(!found)alert("not found note .");

 }else if(currenttype=="texe"){
 let s=value.toLowerCase();
 document.getElementById("result").innerHTML="";
 let found=false;    
  for(let i=0; i<notes.length; i++){
   let str= notes[i].texe.toLowerCase();
    if(str.includes(s)){
      let r = document.getElementById("result");
      r.innerHTML+= "<br>"+" * "+"Title note : | " + notes[i].title + " |   Id note :" 
       + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
       + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
       +"  | Pinned :"+notes[i].pinned + " | "+ "<br>"; 
      found=true; }
  }if(!found)alert("not found note .");
  
 }else if(currenttype=="tags"){
  
   let s=value.toLowerCase();
 document.getElementById("result").innerHTML="";
 let found=false;    
  for(let i=0; i<notes.length; i++){
   let str= notes[i].tags;
   console.log(str.length);
   for(j=0;j<str.length;j++){
   str[j]=str[j].toLowerCase();
   }
   
    if(str.includes(s)){
      let r = document.getElementById("result");
      r.innerHTML+= "<br>"+" * "+"Title note : | " + notes[i].title + " |   Id note :" 
       + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
       + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
       +"  | Pinned :"+notes[i].pinned + " | "+ "<br>"; 
      found=true; }
  }
  
 }
}


function sortn(type){
  document.getElementById("dsearch").style.display="none";
 if(type==1){
         notes.sort((a,b)=>a.idn-b.idn);
   }else if(type==2){
     notes.sort((a,b)=>a.title.localeCompare(b.title)); 
   }else if(type==3){
       notes.sort((a,b)=>a.createdTime-b.createdTime);
  }else if(type==4){
       notes.sort((a,b)=>a.idn-b.idn);
   }else if(type==5){
        notes.sort((a,b)=>b.idn-a.idn);
   }
 shown();
}

function filtern(type){
    document.getElementById("dsearch").style.display="none";

if(type==1){
  document.getElementById("result").innerHTML=" ";
   let r = document.getElementById("result");
     empty();
  let found=false;    
  for(let i=0; i<notes.length; i++){   
    if(notes[i].pinned==true){
      
       let d =document.createElement("div");
       d.innerHTML=" * "+"Title note : | " + notes[i].title + " |   Id note :" 
       + notes[i].idn + " |   Texe :" + notes[i].texe + " |   Tag :" + notes[i].tags 
       + " |   Date Creat :" + notes[i].createdAt + " |   Date edit :" + notes[i].updateAt 
       +"  | Pinned :"+notes[i].pinned + " | ";
       r.appendChild(d); 
       found=true; 
      }
  }if(!found)alert("not found note .");
  
}else if(type=="tags"){
    document.getElementById("dsearch").style.display="block";
    document.getElementById("headingshow").innerHTML="only notes whith specific tags";
    currenttype=type;

}
   
}