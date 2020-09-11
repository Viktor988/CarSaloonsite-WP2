
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


$(document).ready(function(){
  
    
    $("#reg").click(function(){
        $("#meni").fadeToggle("slow")
            
        
    })
    		
	

//ispis auta
 
 $.ajax({
	 url:"json/auta.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		 
	 ispisauta(dobro);
	   /*$(".prva").hide()*/
	 
	 },
		 error:function(xhr,error,status){
 alert(status)}})
		 

		 
		 
		 
		 function ispisauta(dobro){
		 var ispis=""
		 for(var prom of dobro){
		ispis+=` <div class="limprvi">
            <p class="limmodel">MODEL:${prom.model}</p>
                    <p class="limcena">CENA:${prom.cena}&euro;</p>
            <img src="${prom.src}" alt="bmw slika"/>
           
            <table border=1px solid black  class="prva"id="jedan">
        <tr><td>Emisiona klasa </td> <td>${prom.emisionaKlasa}</td></tr>

<tr><td>Pogon</td><td>${prom.pogon}</td></tr>
<tr><td>Menjač</td><td>${prom.menjac}</td></tr>
<tr><td>Strana volana</td><td>${prom.stranaVolana}</td></tr>
<tr><td>Broj vrata</td><td>${prom.brojVrata}</td></tr>
<tr><td>Gorivo</td><td>${prom.gorivo}</td></tr>
		
		</table>
		 </div>`}	
		
		 document.getElementById("sredina2").innerHTML=ispis
		 $(".limprvi").hover(function(){
            $(this).children(":last").fadeIn(500);
            
         }, 
         function(){
		 $(this).children(":last").fadeOut(500)
		 })
	 $(".prva tr:odd").css("backgroundColor","#6f6fcc")
		  $(".prva").hide()
		 
		
		 }
			
		 //ispis navigacija 
		 
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
 
		//ispis najprodavaniji
		$.ajax({
	 url:"json/najprodavaniji.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		 var ispis="";
		 for(var aa of dobro){
			 ispis+=`<div class="model naj ">
			 <img src="${aa.slika}" class="visesl"/>
<p id="k">${aa.tekst}</p>
<p class="vise">${aa.vise}</p>
<input type='button'value='Pročitaj više' class='dugme p'/></div>`
		
		}
		document.getElementById("sredina3").innerHTML=ispis;
		$("#vise").hide()
            $(".model").click(function(){
                if($(this).children(":nth-child(3n)").is(":visible")){
                    $(this).children(":nth-child(3n)").fadeOut("2000");
                    $(this).children(":nth-last-child(1)").val("Pročitaj više");}
                    else{$(this).children(":nth-child(3n)").fadeIn("slow");
                    $(this).children(":nth-last-child(1)").val("Manje")}})
 
  $(".vise").hide()
		
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
 document.getElementById("ikonice").innerHTML=ispis;
  document.getElementById("trazi").addEventListener("keyup",function(){
		 pretraga()})
 }})
 


 //dinamicki filter lista
  $.ajax({
	 url:"json/filter.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		var ispis="";
	
			ispis+=`<td><p id="karoserija">Karoserija:</p></td>`
		ispis+=`<td><select id="tip">`
		for(var ff of dobro){
		ispis+=`<option value="${ff.id}">${ff.tekst}</option>`}
		
		ispis+=`</select></td></tr>
		`
 
  document.getElementById("filterr").innerHTML=ispis;
	document.getElementById("tip").addEventListener("change",function(){
	filtriraj(this.value)})
  
  
  },
  
  error(xhr,error,status){alert(status)}
  })
 function filtriraj(rez){
	 $.ajax({
	 url:"json/auta.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
 var selektovan=document.getElementById("tip").selectedIndex;
 if(selektovan!=0){
 var filtrirani=dobro.filter(p=>p.karoserija==rez)
 ispisauta(filtrirani)}
 else{ispisauta(dobro)}
 
 }})}
 //dinamicki sort lista po modelu
  $.ajax({
	 url:"json/sortpomodelu.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		var ispis="";
 ispis+=`<td><p id="modelu">Modelu:</p></td>
		
		<td><select id="modela">`
			for(var aa of dobro){
			
			ispis+=`<option value="${aa.id}">${aa.tekst}</option>`}
		
		ispis+=`</select></td>`
 document.getElementById("sortpomodelu").innerHTML=ispis
  document.getElementById("modela").addEventListener("change",function(){
  sortitajpomarki(this.value)})
  
  
  },error(xhr,error,status){alert(status)}
  })
 
 
 function sortitajpomarki(){
	 $.ajax({ url:"json/auta.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		if(document.getElementById("modela").selectedIndex==1){
			dobro.sort((a,b)=>{
				if(a.model<b.model)
		return -1})}
	else if(document.getElementById("modela").selectedIndex==2){
			dobro.sort((a,b)=>{
				if(a.model>b.model)
		return -1})}
	
	
	
ispisauta(dobro)

}})}
 
 
 
 
 //lista sortiranja po ceni
 $.ajax({
	 url:"json/sortpoceni.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
		var ispis="";
 ispis+=`<td><p id="modelu">Ceni:</td>
		<td><select id="cena">`
		for(var aa of dobro){
		ispis+=`<option value=${"aa.id"}>${aa.tekst}</option>`}
		
		ispis+=`</select></p></td>`
 document.getElementById("sortpoceni").innerHTML=ispis
 document.getElementById("cena").addEventListener("change",function(){
 sortirajpoceni(this.value)})
 
 }})
 
 function sortirajpoceni(){
	 $.ajax({
	 url:"json/auta.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){ 
 if(document.getElementById("cena").selectedIndex==1){
	 dobro.sort((a,b)=>{
		 if(a.cena>b.cena)
 return -1})}
else if(document.getElementById("cena").selectedIndex==2){
	dobro.sort((a,b)=>{
		 if(a.cena<b.cena)
 return -1})}
 ispisauta(dobro)
 
 }})}
 
 //pretraga
document.getElementById("trazi").addEventListener("keyup",function(){
		 pretraga()})
 function pretraga(){
	 $.ajax({
	 url:"json/auta.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){ 
	 
	 var x=document.getElementById("trazi").value;
	 var fil=dobro.filter(function(c){
		 if(c.model.toLowerCase().indexOf(x.trim().toLowerCase())!=-1){
	 return true;}});
 ispisauta(fil)}})}
 
})
 