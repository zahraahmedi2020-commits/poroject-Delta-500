
function ToDoList(){ 
     
     let list = document.getElementsByTagName('ul')[0];
     let newli = document.createElement('li');  
     let newText = document.createTextNode(document.getElementById('job').value);
     newli.appendChild(newText);
     list.appendChild(newli);

     let newBR = document.createElement('button'); 
     let TextBR = document.createTextNode('Delete'); 
     newBR.appendChild(TextBR);

     newli.appendChild(newBR);
    
     newBR.onclick=function(){list.removeChild(newli);};
} 
