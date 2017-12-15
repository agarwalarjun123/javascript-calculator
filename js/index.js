var op1="";
var op2="";
var op="";
$(document).ready(function(){
 $(".number").click(function(){
    var x,y;
   if(op2=="" && op1!=""){
     console.log("xx");
     $("#display").val(0);
     
     $("#display").val($(this).text());
     op2=1;
    
   }   
   else{  
     x=parseInt($("#display").val());
   y=parseInt($(this).text());
       
 
   
  $("#display").val(x*10+y);
   }
 });
  $("#bcl").click(function(){
    $("#display").val(0);
    op="";
    op1="";
    op2="";
    
  });
  $(".operator").click(function(){
   
    op1=parseInt($("#display").val());
    
  //  if(op!=""&& op1!="" && op2!=""){
    //  op2=$("#display").val();
  //    if(op=="*")
  //      $("#display").val(op1*op2);
   //   else if(op=="/")
   //     $("#display").val(op1/op2);
     
  //  }
    if(op!="" &&(op1=="" || op2=="")){
       x=$("#display").val();
      $("#display").val(x);
      
    }
    else{
      op=$(this).text();
      $("#display").val(op);
      
     
    }
  });
    $("#be").click(function(){
      var z=$("#display").val();
     if((z=="*")||(z=="+")||(z=="-")||(z=="/")){
            
       $("#display").val("error");
     }
      else{
     op2=parseInt($("#display").val());
     console.log(op2); 
     
      if(op=="*")
        
        $("#display").val(op1*op2);
      else if(op=="/")
        $("#display").val(op1/op2);
        else if(op=="+")
        $("#display").val(op1+op2);
        else if(op=="-")
        $("#display").val(op1-op2);
      op1="";
      op2="";
      op="";
      }
                       
                       
    });
                  
                  
                
});