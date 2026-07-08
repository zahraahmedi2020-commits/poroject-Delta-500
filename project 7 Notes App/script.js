
function Notes(){ 
     
     let list = document.getElementsByTagName('ul')[0];
     let newli = document.createElement('li');  
     let newText = document.createTextNode(document.getElementById('Nodes').value);
     
   if(newText.length>0){
     newli.appendChild(newText);
     list.appendChild(newli);
     
     
     let newBD = document.createElement('button'); 
     let TextBD = document.createTextNode('Delete'); 
     newBD.appendChild(TextBD);
     
     newli.appendChild(newBD);
     newBD.onclick=function(){list.removeChild(newli);};
      newli.style.textAlign='left';
      newli.style.color='green';
      newli.style.padding='10px 10px';
      newli.style.backgroundColor="lightblue";
      newBD.style.margin='0.5em';
}
else{
      alert('enter new node');};
} 
