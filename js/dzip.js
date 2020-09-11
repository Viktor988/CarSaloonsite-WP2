var nizlin=[
    {Link1:'index.html',tekst1:'Početna'},
    {Link1:"galerija.html",tekst1:"Galerija"},
    {Link1:"kontakt.html",tekst1:"Kontakt"},
    {Link1:'autor.html',tekst1:'O autoru'}
 
];
var ispisi="<ul>"
for(var m=0;m<nizlin.length;m++){
ispisi+='<li><a href='+nizlin[m].Link1+'>'+nizlin[m].tekst1+'</a> </li>'

}
ispisi+="</ul>"
nav.innerHTML+=ispisi
/*slajdder*/




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
var tabla=document.getElementById("osam")
var nizklasa=[
{prvi:"<tr><td>Emisiona klasa </td> <td>Euro 5</td></tr>"},

{prvi:" <tr><td>Pogon</td><td>Zadnji</td></tr>"},
{prvi:"<tr><td>Menjač</td><td>Manuelni 6 brzina</td></tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},
{prvi:"<tr><td>Broj vrata</td><td>4/5 vrata</td</tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},

]
for(var i=0;i<nizklasa.length;i++){
tabla.innerHTML+=nizklasa[i].prvi
}
var tabla2=document.getElementById("jedan")
var nizklasa=[
{prvi:"<tr><td>Emisiona klasa </td> <td>Euro 5</td></tr>"},

{prvi:" <tr><td>Pogon</td><td>Zadnji</td></tr>"},
{prvi:"<tr><td>Menjač</td><td>Manuelni 6 brzina</td></tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},
{prvi:"<tr><td>Broj vrata</td><td>4/5 vrata</td</tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},

]
for(var i=0;i<nizklasa.length;i++){
tabla2.innerHTML+=nizklasa[i].prvi
}

var tabla3=document.getElementById("dva")
var nizklasa=[
{prvi:"<tr><td>Emisiona klasa </td> <td>Euro 5</td></tr>"},

{prvi:" <tr><td>Pogon</td><td>Zadnji</td></tr>"},
{prvi:"<tr><td>Menjač</td><td>Manuelni 6 brzina</td></tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},
{prvi:"<tr><td>Broj vrata</td><td>4/5 vrata</td</tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},

]
for(var i=0;i<nizklasa.length;i++){
tabla3.innerHTML+=nizklasa[i].prvi
}

var tabla4=document.getElementById("cetri")
var nizklasa=[
{prvi:"<tr><td>Emisiona klasa </td> <td>Euro 5</td></tr>"},

{prvi:" <tr><td>Pogon</td><td>Zadnji</td></tr>"},
{prvi:"<tr><td>Menjač</td><td>Manuelni 6 brzina</td></tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},
{prvi:"<tr><td>Broj vrata</td><td>4/5 vrata</td</tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},

]
for(var i=0;i<nizklasa.length;i++){
tabla4.innerHTML+=nizklasa[i].prvi
}
var tabla5=document.getElementById("pet")
var nizklasa=[
{prvi:"<tr><td>Emisiona klasa </td> <td>Euro 5</td></tr>"},

{prvi:" <tr><td>Pogon</td><td>Zadnji</td></tr>"},
{prvi:"<tr><td>Menjač</td><td>Manuelni 6 brzina</td></tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},
{prvi:"<tr><td>Broj vrata</td><td>4/5 vrata</td</tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},

]
for(var i=0;i<nizklasa.length;i++){
tabla5.innerHTML+=nizklasa[i].prvi
}
var tabla6=document.getElementById("sest")
var nizklasa=[
{prvi:"<tr><td>Emisiona klasa </td> <td>Euro 5</td></tr>"},

{prvi:" <tr><td>Pogon</td><td>Zadnji</td></tr>"},
{prvi:"<tr><td>Menjač</td><td>Manuelni 6 brzina</td></tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},
{prvi:"<tr><td>Broj vrata</td><td>4/5 vrata</td</tr>"},
{prvi:"<tr><td>Strana volana</td><td>Levi volan</td></tr>"},

]
for(var i=0;i<nizklasa.length;i++){
tabla6.innerHTML+=nizklasa[i].prvi
}
var ikone=[{link:"www.facebook.com/",fafa:"fab fa-facebook"},
{link:"https://www.instagram.com/?hl=sr",fafa:"fab fa-instagram"},
{link:"https://twitter.com/?lang=sr",fafa:"fab fa-twitter-square"},
{link:"https://plus.google.com/up/?continue=https://plus.google.com/people",fafa:"fab fa-google-plus-g"},
{link1:"sitemap.xml",fafa:"fas fa-sitemap"},]
var bla=document.getElementById("ikonice")
for(var c=0;c<ikone.length;c++){

bla.innerHTML+="<a href='"+ikone[c].link+">'<i class='"+ikone[c].fafa+"'></i></a>"
}
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
          
        
                
             
    
    
    
    

                    $("table tr:odd").css({"background-color":"#424040","color":"white"})
    
    
    
        
    $(".dzipprvi").hover(function(){
        
        $(this).css("boxShadow", "4px 4px 4px rgba(45, 52, 60, 0.78)")
        
    },function(){
        $(this).css("boxShadow", "0px 0px 0px blue")}
    )

   
        $(".svise").hover(function(){
            
            $(this).css("color", "rgba(45, 52, 60, 0.78)")
            
        },function(){
            $(this).css("color", "white")}
        )
    
        $(".prva").hide()
        $(".prvii").click(function(){
           
            if($(".prva").is(":visible")){
                $(".prva").fadeOut("2000");
                $(this).text("Više");}
                else{$(".prva").fadeIn("slow");
                $(this).text("Manje")}})
        $(".druga").hide()
        $(".drugi").click(function(){
            if($(".druga").is(":visible")){
                $(".druga").fadeOut("2000");
                $(this).text("Više");}
                else{$(".druga").fadeIn("slow");
                $(this).text("Manje")}})

       
                $(".treca").hide()
                $(".treci").click(function(){
                    if($(".treca").is(":visible")){
                        $(".treca").fadeOut("2000");
                        $(this).text("Više");}
                        else{$(".treca").fadeIn("slow");
                        $(this).text("Manje")}})

                 
                        $(".cetvrta").hide()
        $(".cetvrti").click(function(){
            if($(".cetvrta").is(":visible")){
                $(".cetvrta").fadeOut("2000");
                $(this).text("Više");}
                else{$(".cetvrta").fadeIn("slow");
                $(this).text("Manje")}})

                            
                $(".peta").hide()
                $(".peti").click(function(){
                    if($(".peta").is(":visible")){
                        $(".peta").fadeOut("2000");
                        $(this).text("Više");}
                        else{$(".peta").fadeIn("slow");
                        $(this).text("Manje")}})

                        $(".sesta").hide()
                $(".sesti").click(function(){
                    if($(".sesta").is(":visible")){
                        $(".sesta").fadeOut("2000");
                        $(this).text("Više");}
                        else{$(".sesta").fadeIn("slow");
                        $(this).text("Manje")}})
                                
                                               
                                                   
                    })