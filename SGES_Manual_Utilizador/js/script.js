/* Author:*/
function refreshTabela() {
    var tds = $(".campoObriga table");
    for (var i = 0; i < tds.length; i++) {
        var list = tds[i].getElementsByTagName("tr");
        for (var j = 0; j < list.length; j++) {
            if ((j%2)==0) {
                $(list[j]).addClass('imparCor');
            }
        }
    }
}

function zommClickImagem() {
   $('p.imagem span').zoom({ on:'click' });	
}










