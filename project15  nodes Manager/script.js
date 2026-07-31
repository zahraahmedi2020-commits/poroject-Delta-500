let nodes =JSON.parse(localStorage.getItem("nodes"))||[];

let editindex=-1;
function empty(){
  if(nodes.length==0){
    alert("not exist Nodes ");
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
  if(nodes.length>0){
    id=Math.max(...nodes.map(item=>item.idn))+1;
   let sn=document.getElementById("inputs");
   let tn=document.getElementById("inputt");
    if(sn.value.trim()==""){
          alert("name is required");
         return;
     }else{
   let node={subject:sn.value,idn:id,texe:tn.value};
       nodes.push(node);
       localStorage.setItem("nodes",JSON.stringify(nodes));
       alert("successfuly node"+node);
       sn.value="";
       tn.value="";
       shown();}
  }else{
    let sn=document.getElementById("inputs");
   let tn=document.getElementById("inputt");
    if(sn.value.trim()==""){
          alert("name is required");
         return;
     }else{
   let node={subject:sn.value,idn:id,texe:tn.value};
   nodes.push(node);
  localStorage.setItem("nodes",JSON.stringify(nodes));
  alert("successfuly node");
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
 for(let i=0; i<nodes.length; i++){ 
    let r = document.getElementById("result");
    let d =document.createElement("div");
    let newText = document.createTextNode("Subject node : | " + nodes[i].subject + " |   Id Node :" + nodes[i].idn + " |   Texe :" + nodes[i].texe+"  | ");
    d.appendChild(newText);
    r.appendChild(d);
    let newBD = document.createElement('button'); 
    let TextBD = document.createTextNode('Delete'); 
    newBD.appendChild(TextBD);
    d.appendChild(newBD);
    newBD.onclick=function(){
                    if(confirm("Are you sure you went to delet this node?")){
                    nodes.splice(i,1);
                    r.removeChild(d);
                    localStorage.setItem("nodes",JSON.stringify(nodes));}
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
  for(let i=0; i<nodes.length; i++){   
    if(nodes[i].idn==id||nodes[i].subject==sub){
      let r = document.getElementById("rsearch");
      r.innerHTML+= "<br>"+" Subject :" + nodes[i].subject + " |  Id Node:" + nodes[i].idn + " | Texe:" + nodes[i].texe  + "<br>"; 
      found=true; 
       break;  
      }
  }if(!found)alert("not fund student whtih this ID .");
  
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
  for(let i=0; i<nodes.length; i++){ 
    if(nodes[i].idn==ide){
      document.getElementById("dadd").style.display="block";
      document.getElementById("save").style.display="none";
      document.getElementById("update").style.display="block";
      editindex=i; 
      sinput.value=nodes[editindex].subject;
      tinput.value= nodes[editindex].texe;
      found=true;
    }
    }if(!found)alert("not fund student whtih this ID .");
  }

function updates(editindex){
 let sinput=document.getElementById("inputs");
 let tinput=document.getElementById("inputt");
 nodes[editindex].subject= sinput.value;
 nodes[editindex].texe=tinput.value;
 localStorage.setItem("nodes",JSON.stringify(nodes));
 alert("susseccfully update Nodes");
 document.getElementById("dadd").style.display="none";
 shown();
}

function sortn(type){
  if(type==1){
    nodes.sort((a,b)=>a.idn-b.idn);
   }else if(type==2){
    nodes.sort((a,b)=>b.idn-a.idn);
   }else if(type==3){
    nodes.sort((a,b)=>a.subject.localeCompare(b.subject));
   }else if(type==4){
    nodes.sort((a,b)=>b.subject.localeCompare(a.subject));
   }
 shown();
}

function filters(){
let s=document.getElementById("fs").value.toLowerCase();
document.getElementById("result").innerHTML="";
let found=false;    
  for(let i=0; i<nodes.length; i++){
   let str= nodes[i].subject.toLowerCase();
    if(str.includes(s)){
      let r = document.getElementById("result");
      r.innerHTML= "<br>"+" Subject :" + nodes[i].subject + " |  Id Node:" + nodes[i].idn + " | Texe:" + nodes[i].texe  + "<br>"; 
      found=true; 
       
      }
  }if(!found)alert("not found want your filter .");
}
