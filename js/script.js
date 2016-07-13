 function atualizarTabela(){
 /**retirar borders das células vazias*/
  $('td').each(function(){
  if($(this).html() == "&nbsp;")
		$(this).css("border-top","solid #005082 1.0pt");
		$(this).css("border-bottom","none");
		$(this).css("border-right","none");
		$(this).css("border-left","none");
});

 /**unir células*/
$('tr').each(function(){
	var n =1;
	var anteriorvazio = 1;
	$(this).find('td').each(function(){
 			if(($(this).html() == "&nbsp;") && (anteriorvazio==1)){
				$(this).css("border-right","solid #005082 1.0pt");
				$(this).css("border-top","none");
				$(this).css("border-bottom","none");
			}else {
				anteriorvazio=0;
				if($(this).html() != "&nbsp;")
				$(this).css("border-left","solid #005082 1.0pt");
			}
			n++;
	});
});
 }
 
 
 function zommClickImagem() {
	 $('#paginas p>img:not([alt="logo"])').each(function(){
		 $(this).wrap("<a class='imagem' href='"+$(this).attr( "src" ) + "' onclick='return hs.expand(this)'></a>"); 
});
}










