var currentIndex = 0
function ImageSlider(op){ 
   let arr = new Array("a.jpg","b.jpg","c.jpg");
   let image = document.getElementById("image");    
          if(op=="+" ){ 
              currentIndex++;
             if(currentIndex<arr.length){
             
               
            }else{ 
                  currentIndex=0;
                  
                                       }; 
          }else{ currentIndex--;
                if(-1<currentIndex &&currentIndex<arr.length){
                
                }else {currentIndex=2;
                     
                     };
          };
     image.src=arr[currentIndex]; 
} 
