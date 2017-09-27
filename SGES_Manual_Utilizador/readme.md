# Manual Utilizador SGES

[Manual utilizador SGES](http://spms-sges.github.io/SGES_REPO/SGES_Manual_Utilizador/) para ver o resultado do repositório.

## Directorias

* **content** - conteúdo em markdown
* **css** - ficheiros de estilo
 - *main.css* estilo principal
 - *style.css* estilo personalizado
* **highslide** - imagens essenciais para zoom ([highslide webpage](http://highslide.com/))
* **img** - imagens incluidas no manual 
 - *pages* - imagens das páginas web da aplicação
* **js** - bibliotecas e ficheiros de JavaScript
* **index.html** - página inicial
* **indice.html** - página de indice

## Melhorias

* Compatibilidade com todos os browsers (Chrome, Opera, Safari, Firefox 3.6+, IE6+) e Mobile
* Normalizações de css
* Instalações

## A ter em atenção
No directório superior encontra-se a pasta *_layouts* essencial para definição do output dos ficheiros de markdown.

## Alterações específicas

### Imagem tamanho menor que a página
Ao inserir uma imagem com o tamanho menor que a página, esta não poderá estende-la usando o zoom, nem poderá encolhe-la no seu estado normal.
* Alterar o ficheiro **script.js** na função **zommClickImagem()** adicionar && alt != "\<nome da imagem\>"
* Alterar o ficheiro **style.css** no estilo:
      * #paginas p* **(...)** *{*
      *width: auto;*
      *}*
     acrescentar 
       **,#paginas p  img[alt=\<nome da imagem\>]**:
 
        #paginas p (...),#paginas p  img[alt=<nome da imagem>]  {
        width: auto;
        }
 
 ### Novo Módulo
 Ao inserir um novo módulo, deve-se colocar o ficheiro markdown na directoria **content**. 
 Após isso é necessário efectuar 3 alterações:
  * **Indice** alterar o *Indice.html* colocando os div's, ul e li necessários.
  * **index** 
    * no **\<div id="paginas">** colocar o módulo novo
    * no script, alterar de forma a carregar o novo módulo
    
### Associar Hiperligações
 Para associar hiperligações a um determinado texto referente a uma funcionalidade, é necessário:
  * Primeiro ir à aplicação e aceder à funcionalidade e ver qual o ''#...'' do url da página;
  * Ir ao **Indice** e fazer <href=''#...''>;
  * Ir ao ficheiro markdown e fazer <p id=#...> </p> antes do texto ao qual se quer associar a hiperligação.
