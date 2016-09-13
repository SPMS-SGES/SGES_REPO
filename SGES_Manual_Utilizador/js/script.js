
/**colocar tabela mais apresentavel*/
 function atualizarTabela(){
 /**retirar borders das células vazias*/
  $('td').each(function(){
  if($(this).html() == "&nbsp;")
		$(this).css("border-top","solid #005082 1.0pt");
		$(this).css("border-bottom","none");
		$(this).css("border-right","none");
		$(this).css("border-left","none");
});

 /**unir células (que tenham numero de linhas >1)*/
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
 
 /**preparar imagem para zoom*/
 function zommClickImagem() {
	 $('#paginas p>img:not([alt="logo"])').each(function(){
		 var alt = $(this).attr("alt")
		 if(alt != "figAlteracaoSenha" && alt != "figLogin" && alt !="figLoginRecuperacao")
		 $(this).wrap("<a class='imagem' href='"+$(this).attr( "src" ) + "' onclick='return hs.expand(this)'></a>"); 
});
}

/**adicionar legendas com numeração automática*/
function autoFigureNumber() {
	
var n="1";
var textRef ="Fig."

$('.caption').each(function () {
    var alt = $(this).attr("id");
    var text = $(this).html();
    /**acrescentar a label (Fig) à legenda*/
    if(!$(this).is(".legendaNum .caption")){
		$(this).html("<b>"+textRef + n + "</b>"+ "  -  " + text);
		$(this).wrap("<div class='legendaNum'></div>");
    /**alterar id da legenda e colocar na imagem*/
		($(this)).attr("id",alt+"Capt");
		$("img[alt='"+alt+"']").each(function () {
			($(this)).attr("id",alt);
		});
    
		$("[href='#" + alt + "']").each(function () {
			$(this).text(textRef + n);
		});
    n++;
	}
});
}
/**criarPDF*/
function scriptParapdf(){
var 
 form = $('#content'),
 cache_width = form.width(),
 a4  =[ 595.28,  841.89];  // for a4 size paper width and height
 
$('#create_pdf').on('click',function(){
 $('content').scrollTop(0);
 createPDF();
});
}
//create pdf
function createPDF(){
 getCanvas().then(function(canvas){
  var 
  img = canvas.toDataURL("image/png"),
  doc = new jsPDF({
          unit:'px', 
          format:'a4'
        });     
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('manual_utilizador_sges.pdf');
        form.width(cache_width);
 });
}
 
// create canvas object
function getCanvas(){
 form.width((a4[0]*1.33333) -80).css('max-width','none');
 return html2canvas(form,{
     imageTimeout:2000,
     removeContainer:true
    }); 
}
 













