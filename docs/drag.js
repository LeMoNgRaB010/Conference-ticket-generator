const dragcontainer=document.getElementsByClassName("input-drag");
const file=document.getElementsByClassName("input-drag")[0];
const imageticket=document.getElementsByClassName("input-ticket")[0];

file.addEventListener("change",()=>{
if(file.files.length >0 && file.files[0].size<=500000 ){
     
    imageticket.src=URL.createObjectURL(file.files[0])
    imageticket.style.display="block";
    document.getElementsByClassName("upload-icon-wrapper")[0].remove();
    document.getElementsByClassName("upload-icon-label")[0].remove();

;}else{
    alert("makaynach")
}
});


document.addEventListener("keydown", (event)=>{

    if(event.key==="Enter"){
         var inputvar=document.getElementsByClassName("input-prop");
     
           event.preventDefault();
          for(var i=0; i<inputvar.length; i++){
            if(inputvar[i]===document.activeElement){
                inputvar[i+1].focus();
                
                break;
            }
              


          }
          

    }


});


/*const picflag=document.getElementById("picid");
const nameflag=document.getElementById("nameid");
const emailflag=document.getElementById("emailid");
const gitusrflag=document.getElementById("gitusrid");
*/

const inputs=document.querySelectorAll(".input-group input");

const submitbutton=document.getElementById("submit-button");

submitbutton.addEventListener("click" ,(event)=>{
   
event.preventDefault();

      let flag=true;
     for(var i=0; i<inputs.length; i++){
             if(!inputs[i].value.trim()){
                 flag=false;
                 break;
             }
            }   

      if(flag){
        const varinput=document.querySelectorAll(".input-group");
         document.getElementById("titleid").style.display="none";
          document.getElementById("second-titleid").style.display="none";
         varinput.forEach(element =>{
            element.style.display="none";
          
         });
           const email=document.getElementById("emailid");
        
           const ticketDiv = document.getElementsByClassName("ticket-div")[0];

ticketDiv.style.display = "flex";
ticketDiv.style.justifyContent = "center"; // centers content horizontally
ticketDiv.style.alignItems = "center";     // centers content vertically (optional)
ticketDiv.style.flexDirection = "column";  // optional: stacks children vertically
 
        
            document.getElementById("ticket-p-id").innerHTML="we've emailed your ticket to<br><span class='email-style' >"+ email.value +"</span> and will send updates in<br> the run up to the event. "; 
           ticket_header(document.getElementById("ticket-header"),document.getElementById("nameid"));
           ticketcontent();
           document.getElementById("ticket-picture").src=URL.createObjectURL(document.getElementById("picid").files[0]) 
           document.getElementById("ticket-usrname").textContent=document.getElementById("nameid").value;
         document.getElementById("ticket-github").textContent=document.getElementById("gitusrid").value;
                                   
          }


});
document.getElementsByClassName("ticket-div")[0].style.display="none";
//document.getElementById("inputgrp").style.display="none";


function ticket_header(header,username){
   
   header.innerHTML="congrats,<span class='gradient-text'>"+ username.value + "</span>!<br>Your ticket is ready.";
   


}

function ticketcontent(){
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  // ticket date a dn place
     const today=new Date();
     const month=monthNames[today.getMonth()].substring(0,3);
     const day=today.getDate();
     const year=today.getFullYear();
     document.getElementById("ticket-date").textContent=month+" "+ day +", "+year +" / Austin, TX ";
      
              

}