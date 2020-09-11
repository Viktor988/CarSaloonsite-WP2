
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
    $("#meni ul li").hover(function(){
            
        $(this).animate({backgroundColor:"rgb(117, 99, 99) "},"slow")
    
    },function(){
        $(this).animate({backgroundColor:"#424040"},"slow")})
        $("#nav ul li").hover(function(){
            
            $(this).animate({backgroundColor:"rgb(132, 132, 132)"},"slow")
        
        },function(){
            $(this).animate({backgroundColor:"#424040"},"slow")})

           


                
				 $.ajax({
	 url:"json/galerija.json",
	 type:"get",
	 dataType:"json",
	 success:function(dobro){
			var gal=document.getElementsByClassName("gallery")
			var ispis="";
for(var aa of dobro){
for(var i of gal){
ispis+=	'<a href="'+aa.velika+'" class="thumbnail"><img src="'+aa.mala+'" alt="'+aa.alt+'/>"</a>'}}

i.innerHTML=ispis

$('.thumbnail').viewbox({

                    // template
                    template: '<div class="viewbox-container"><div class="viewbox-body"><div class="viewbox-header"></div><div class="viewbox-content"></div><div class="viewbox-footer"></div></div></div>',
                  
                    // loading spinner
                    loader: '<div class="loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>',
                    setTitle: true,
                    margin: 20,
                    resizeDuration: 300,
                    openDuration: 200,
                    closeDuration: 200,
                    closeButton: true,
                    navButtons: true,
                    closeOnSideClick: true,
                    nextOnContentClick: true,
                    useGestures: true,
                
                  });

$(".gallery img").hover(function(){
            
                $(this).animate({opacity:"0.5"},"slow")
            
            },function(){
                $(this).animate({opacity:"1"},"slow")})


},
error(xhr,error,status){
alert(status)}




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
		 $("#nav ul li").hover(function(){
        
            $(this).animate({backgroundColor:"rgb(132, 132, 132)"},"slow")
        
        },function(){
            $(this).animate({backgroundColor:"#424040"},"slow")})
		$("#btnMeni").click(function(){
	 $("#nav ul").fadeToggle()})}
		 
		 
		 
		 
		 })			
				
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