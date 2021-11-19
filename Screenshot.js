let div = document.getElementById("photo");
  
  html2canvas(div).then(function(canvas){
   document.getElementById("output").appendChild(canvas);
  })