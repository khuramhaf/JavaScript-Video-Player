    function play1() {


        document.getElementById("time").innerHTML = time.toFixed(0)

clearInterval(setinterval)

      var start = Date.now();
setinterval = setInterval(function() {
    time++;
    document.getElementById("time").innerHTML = time.toFixed(0)

    var delta = Date.now() - start; // milliseconds elapsed since start

  
}, 1000); // update about every second
      
    if(videos.length>0){


  for(let i=0;i<videos.length;i++){

    videos[i].addEventListener("timeupdate", timeupdate1)
   
  }
}



    



     animate();
    }



    function animate() {
        
            for (i = 0; i < videos.length; i++) {
              if (time>=videos[i].starttime && time <= videos[i].endtime) {
       
       
     videos[i].play();  
    
      if(ispaused===true){

        videos[i].currentTime = videocurrenttime
        ispaused = false;
      }

      if(checkplay2 === true){

        videos[i].currentTime = videos[i].currenttime
        checkplay2=false;
      }
    
                
    
                if (checkplay2 === true) {
                  for(i=0;i<videos.length;i++){
                    videos[i].currentTime = time;
                  }
                  checkplay2 = false;
                }
    
                  
    layer.removeChildren()
                layer.add(videoImage);
    
                var tr = new Konva.Transformer();
                layer.add(tr);
                tr.nodes([videoImage]);
    
                videoImage.image(videos[i]);
        layer.draw();
              }
    
          
            }
    
            for(let i=0;i<shapes.length;i++){
    
                if(time>=shapes[i].currenttime && time<= shapes[i].currenttime + shapes[i].currentduration){
                    layer.add(shapes[i]);
                    var tr = new Konva.Transformer();
      layer.add(tr);
      tr.nodes([shapes[i]]);
                    layer.draw()
    
    
                }
            }
     
          
    
        // Call requestAnimationFrame to schedule the next frame
     animationframe=   requestAnimationFrame(animate);
      }