$("#boton").click(function(){
    
/////////////////////////////Globo1
    
    function loopGlobo1(){
    
    
    $("#globo1").animate({
                        bottom:"500px",
                        zIndex:-100},4000);
        
        
   
    $("#globo1").animate({
                        bottom:"-100px",
                         zIndex:100},loopGlobo1);
    
    }
    loopGlobo1();
    
/////////////////////////////Globo2/////////////
    function loopGlobo2(){
        
    $("#globo2").animate({
                        bottom:"500px",
                        zIndex:-100},2000);
    
    
    
    $("#globo2").animate({
                        bottom:"-100px",
                        zIndex:100},loopGlobo2);
                        
        
     }    
    loopGlobo2();    
        
/////////////////////////////Globo3////////////////////////////////////
    
    function loopGlobo3(){
    
    $("#globo3").animate({
                        bottom:"500px",
                        zIndex:-100},7000);
        
        
        
      $("#globo3").animate({
                        bottom:"-100px",
                        zIndex:100},loopGlobo3);   
        
     }
    
   loopGlobo3(); 
    
/////////////////////////////Globo4////////////////////////////////////
    
    function loopGlobo4(){
    
    
    
    $("#globo4").animate({
                        bottom:"500px",
                        zIndex:-100},3000);
        
    $("#globo4").animate({
                        bottom:"500px",
                        zIndex:100},loopGlobo4);
        
    }
    
     loopGlobo4(); 
        
/////////////////////////////Globo5////////////////////////////////////
        
        function loopGlobo5(){
        
        
    $("#globo5").animate({
                        bottom:"500px",
                        zIndex:-100},5000);
            
            
    $("#globo5").animate({
                        bottom:"500px",
                        zIndex:100},loopGlobo5);        
        
            
        }
        
    loopGlobo5();
            
/////////////////////////////Globo6////////////////////////////////////
    
     function loopGlobo6(){
    
    
    $("#globo6").animate({
                        bottom:"500px",
                        zIndex:-100},4000);
   
    $("#globo6").animate({
                        bottom:"500px",
                        zIndex:100},loopGlobo6);
   

    
     }
    
    loopGlobo6();
    
    
    
});

$("#globo1, #globo2, #globo3, #globo4, #globo5, #globo6").click(function(){
    $(this).css("display","none");
    
});
