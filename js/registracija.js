var nizforma=["text","text","text","text"]
var formar=document.getElementById("formar")
for(var i=0;i<nizforma.length;i++){
  formar.innerHTML+="<input type='"+nizforma[i]+"'class='formareg'/>"

}
var formareg0=document.getElementsByClassName("formareg")[0]
formareg0.placeholder="Ime i prezime"

var formareg1=document.getElementsByClassName("formareg")[1]
formareg1.placeholder="E-mail"
var formareg2=document.getElementsByClassName("formareg")[2]
formareg2.placeholder="Lozinka"

var formareg3=document.getElementsByClassName("formareg")[3]
formareg3.placeholder="Lozinka Ponovo"



var reformareg0 = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,9}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14})+$/;
var reformareg1 = /^[\w]+[\.\_\-\w]*[0-9]{0,3}\@[\w]+([\.][\w]+)+$/;
var reformareg2=/[A-z]+[0-9]+/;
function salji(){
    var greske=new Array();
  var dobro=new Array();

   if(formareg0.value==""){
	greske.push("Ime i prezime je obavezno!");formareg0.style.borderColor="red"}
	
	else if(!reformareg0.test(formareg0.value))
	{
		greske.push("Greska - ime i prezime!");
		formareg0.style.borderColor="red"
		
	}
	
	else 
	{
		
			greske.push("");
		formareg0.style.borderColor=""
		
	}
	
	if(formareg1.value==""){
		greske.push("E-mail je obavezan!");formareg1.style.borderColor="red"}
	else if(!reformareg1.test(formareg1.value))
	{
		greske.push("Greska - E-mail!");
		formareg1.style.borderColor="red"
		
	}
	else
	{
	
		formareg1.style.borderColor=""
		
	}
	if(formareg2.value==""){
		greske.push("Lozinka je obavezna!");formareg2.style.borderColor="red"}
	else if(!reformareg2.test(formareg2.value))
	{
		greske.push("Greska - Lozinka");
		formareg2.style.borderColor="red"
	
	}
	else
	{
		
		formareg2.style.borderColor=""}
	


	if(formareg3.value!=formareg2.value)
	{
		greske.push("Greska - Lozinka Ponovo");
		formareg3.style.borderColor="red"
	
	}
	else
	{
		
		formareg3.style.borderColor=""
	
	}
	



	var rr=document.getElementsByClassName("radio")
	var marker=false
	for(var i=0;i<rr.length
		;i++){
			if(rr[i].checked){
				marker=true
				break;
			}
		}
	if(marker==false){
		greske.push("Greska - Niste izabrali pol");
	}
	else{dobro.push("radio: " + rr[i].checked);}
	if(greske.length==1){
		document.getElementById("dugme").style.marginTop="26px"
	}
	if(greske.length==2){
		document.getElementById("dugme").style.marginTop="40px"
	}
	if(greske.length==3){
		document.getElementById("dugme").style.marginTop="54px"
	}
	if(greske.length==4){
		document.getElementById("dugme").style.marginTop="70px"
	}
	
	if(greske.length==5){
		document.getElementById("dugme").style.marginTop="84px"
	}
	

	


	var ispis = "<ul>";
    if(greske.length !=0)
	{
		for(var i = 0; i < greske.length; i++)
		{
			ispis += "<li>"+greske[i]+"</li>";
           }
	}
	
	
	
	ispis+="</ul>";
	
	document.getElementById("ispis").style.display="block";
	document.getElementById("ispis").innerHTML=ispis;



}
var nizlin=[
    {Link1:'index.html',tekst1:'Početna'},
    {Link1:"galerija.html",tekst1:"Galerija"},
    {Link1:"kontakt.html",tekst1:"Kontakt"},
    {Link1:'autor.html',tekst1:'O autoru'},
	
];

  
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