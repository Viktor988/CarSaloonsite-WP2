var reformareg0 =  /^[\w]+[\.\_\-\w]*[0-9]{0,3}\@[\w]+([\.][\w]+)+$/;
var email=document.getElementById("pprvi")
var sifra=document.getElementById("ddrugi")
var tekst=document.getElementById("prijavap")
var dugmee=document.getElementById("dugprijava")
var tekst2=document.getElementById("prijavad")
var relozinka=/[A-z]+[0-9]+/;
document.getElementById("dugprijava").addEventListener("click",function(){
if(email.value==""){
tekst.innerHTML="Niste uneli E-mail!"
email.style.borderColor="red"
dugmee.style.Top="280px"}
else if(!reformareg0.test(email.value)){
email.style.borderColor="red"
tekst.innerHTML="Nepostojeci E-mail!"
}
else{
    email.style.borderColor=""
    tekst.innerHTML="" 
    document.getElementById("ddrugi").style.display="block";
    dugmee.style.display="none";
    document.getElementById("dugprijava2").style.display="block";
 
    

}})
document.getElementById("dugprijava2").addEventListener("click",function(){
    if(sifra.value==""){
        tekst2.innerHTML="Niste uneli lozinku!"
       sifra.style.borderColor="red"
        dugmee.style.Top="280px"}
    
    
    else if(!relozinka.test(sifra.value)){
    sifra.style.borderColor="red"
    tekst2.innerHTML="Pogresna lozinka!"
    }
    else{
        sifra.style.borderColor=""
        tekst2.innerHTML="" 
       
       

}}


)


$(document).ready(function(){
    slideShow();
  });
  
  function slideShow() {
    var trenutni = $('#slajder .aktivna');
    var next = trenutni.next().length ? trenutni.next() :trenutni.parent().children(':first');
    
    trenutni.hide().removeClass('aktivna');
    next.fadeIn().addClass('aktivna');
    
    setTimeout(slideShow, 4000);
  }

$("#sdesno").click(function(){
    var trenutni=$("#slajder .aktivna");
    var sledeci= trenutni.next().length?trenutni.next():trenutni.parent().children(":first");
    trenutni.hide().removeClass("aktivna");
    sledeci.fadeIn().addClass("aktivna");


})
$("#slevo").click(function(){
    var trenutni=$("#slajder .aktivna");
    var sledeci= trenutni.prev().length?trenutni.prev():trenutni.parent().children(":last");
    trenutni.hide().removeClass("aktivna");
    sledeci.fadeIn().addClass("aktivna");


})



/*logovanje*/
$(document).ready(function(){
  
    
    $("#reg").click(function(){
        $("#meni").fadeToggle("slow")
            
        
    })
    $("#meni ul li").hover(function(){
            
        $(this).animate({backgroundColor:"rgb(117, 99, 99) "},"slow")
    
    },function(){
        $(this).animate({backgroundColor:"#424040"},"slow")
    
    
    })
   

 $.ajax({
	 url:"json/navigacija.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		 var ispis=`<button id="btnMeni">Meni</button>`
		ispis+="<ul>";
		 for(var aa of dobro){
			 ispis+=`<li><a href="${aa.link}">${aa.tekst}</a></li>`
		 }
		 ispis+="</ul>";
		 document.getElementById("nav").innerHTML=ispis 
		
		
		$("#btnMeni").click(function(){
	$("#nav ul").fadeToggle()
	
	
})	


		$("#nav ul li").hover(function(){
        
            $(this).animate({backgroundColor:"rgb(132, 132, 132)"},"slow")
        
        },function(){
            $(this).animate({backgroundColor:"#424040"},"slow")})
			
		 }})

// ispis ikone
 $.ajax({
	 url:"json/ikone.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
 var ispis="";
 for(var aa of dobro){
	ispis+="<a href='"+aa.link+"'<i class='"+aa.fafa+"'></i></a>" 
 }
 document.getElementById("ikonice").innerHTML=ispis;}})

})


