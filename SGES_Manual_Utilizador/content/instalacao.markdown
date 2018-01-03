---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---
<p id="instalacao"></p>

# 14. Instalações

É neste módulo que serão feitas ações sobre as instalações.
Para aceder às  instalações de um estabelecimento, o utilizador tem três alternativas:

(i) Selecionando uma entidade e clicando no botão ''Instalações'' ([](#figEstabeSInst));

(ii) Na página de consulta de estabelecimentos existentes numa entidade, através do ponto [7. Estabelecimentos] ([](#figEstEntidade));

(iii) Através do sub-menu Instalações [](#figura_menu_ADMIN_entidade), selecionado.

![fig39](img/pages/cap14/39.JPG)

<p class="caption" id="fig39"> Aceder às Instalações de um estabelecimento </p>

![figEstabeSInst](img/pages/cap14/38.JPG)

<p class="caption" id="figEstabeSInst"> Exemplo de Estabelecimento sem Instalações</p>


<p id="criaInstalacao"></p>
## 14.1. Criar Instalações

Caso ainda não exista informação acerca das instalações de um estabelecimento, o utilizador pode criar instalações ([](#fig39)).
Para criar instalações, o utilizador deve clicar em **CRIAR INSTALAÇÃO** na página de instalações de estabelecimento ([](#fig39)). De seguida, será encaminhado para a página de criação de instalações, onde deverá preencher os campos obrigatórios para poder efetuar o registo das instalações.
Para o Registo de Instalações será necessário primeiro submeter os campos da Caracterização Geral do(s) edifício(s); sem estes submetidos não é possível preencher outros campos.

É de salientar que existem balões de informação juntos aos campos que envolvem regras de negócio mais complexas. Para que o utilizador possa visualizar estas informações, o utilizador deve manter o cursor sobre o símbolo mostrado na  [](#figBaloes).

![figBaloes](img/pages/cap14/39_1.JPG)

<p class="caption" id="figBaloes"> Balões de informação.</p>

<p id="caracterizao-inst"></p>
### 14.1.1 Caracterização

Para poder criar a instalação o utilizador deve preencher, pelo menos, os campos obrigatórios da *Caracterização Geral* e clicar em **SUBMETER**.


<table class="tabelanova">
<thead>
  	<tr>
		<th colspan="8" >
			<strong> Campos Obrigatórios – Caracterização Geral - <a href="#fig40"> Fig.54 </a> </strong>
    	</th>
	</tr>
</thead>
  <tbody>
	<tr>
		<td colspan="8"> Se estabelecimento tem vários edifícios  = Sim e se edifícios que compõem o estabelecimento localizados no mes mo terreno?= Sim </td>
	</tr>
	<tr>
		<td colspan="7" rowspan="4"> a) Propriedade do Terreno  </td>
    	<td> Estado </td>
    </tr>
	<tr>
		<td> Privado com cedência de direito de superfície </td>
	</tr>	
	<tr>
		<td> SCM </td>
	</tr>
	<tr>
		<td> Outros </td>
	</tr>
	<tr>
		<td colspan="8"> b) Nome edifício </td>
	</tr>
	<tr>
		<td colspan="7" rowspan="5"> c) Propriedade do(s) Edifício(s)  </td>
    	<td> Arrendado </td>
    </tr>
    <tr>
		<td> Estado</td>
    </tr>
    <tr>
		<td> PPP </td>
    </tr>
    <tr>
		<td> SCM </td>
	</tr> 
	<tr>
		<td> Outros</td>
	</tr>  
	<tr>
		<td colspan="6" rowspan="2">  d) Edifícios construídos na mesma fase?   </td>
		<td> Sim  </td>
		<td> Número de fases de construção =1 </td>
	</tr>  
	<tr>
		<td> Não </td>
		<td> Quantas fases de construção existiram? </td>
	</tr>  
	<tr>
		<td rowspan="5" colspan="4"> e) O estabelecimento hospitalar dispõe de plano diretor? </td>
		<td rowspan="4"> Sim </td>
    	<td rowspan="2"> Aprovado </td>
    	<td> Sim </td>
    	<td> Data de aprovação </td> 
 	</tr>
 	<tr>
    	<td  colspan="6"> Não </td>
 	</tr>
 	<tr>
     	<td rowspan="2"> Implementado? </td>
      	<td colspan="6"> Sim</td>
 	</tr>
 	<tr>
    	<td colspan="6"> Não </td>
 	</tr>
 	<tr>
     	<td colspan="4"> Não </td>
 	</tr>
	<tr>
		<td colspan="5" rowspan="5"> f)  Heliporto? </td>
		<td rowspan="4"> Sim </td>
		<td rowspan="2"> Operacional? </td>
    	<td> Sim </td>
	</tr>  
  	<tr>
     	<td> Não </td>
 	</tr>
 	<tr>
     	<td rowspan="2"> Certificado? </td>
     	<td> Sim </td>
 	</tr>
  	<tr>
     	<td> Não </td>
 	</tr>
  	<tr>
     	<td colspan="5" > Não </td>
  	</tr>  
	</tbody>
</table>


![fig40](img/pages/cap14/40.JPG)

<p class="caption" id="fig40"> Criar Instalações – Caracterização Geral</p>


Os serviços de urgência básica (SUB) (ver [](#fig40_0)) da entidade devem ser indicados como edifícios. 

![fig40_0](img/pages/cap14/40_0.JPG)

<p class="caption" id="fig40_0"> Lista de SUB de uma entidade. </p>


<table class="tabelanova">
<thead>
  	<tr>
		<th colspan="8" >
			<strong> Campos Obrigatórios – Caracterização Geral - <a href="#fig40_1">Fig.56 </a> </strong>
    	</th>
	</tr>
</thead>
  <tbody>
	<tr>
		<td colspan="8"> Se estabelecimento tem vários edifícios  = Sim e se edifícios que compõem o estabelecimento localizados no mesmo terreno?= Não </td>
	</tr>
	<tr>
		<td colspan="7" rowspan="4"> a) Propriedade do Terreno  </td>
    	<td> Estado </td>
    </tr>
	<tr>
		<td> Privado com cedência de direito de superfície </td>
	</tr>	
	<tr>
		<td> SCM </td>
	</tr>
	<tr>
		<td> Outros </td>
	</tr>
	<tr>
		<td colspan="8"> b) Nome edifício </td>
	</tr>
	<tr>
		<td colspan="7" rowspan="5"> c) Propriedade do(s) Edifício(s)  </td>
    	<td> Arrendado </td>
    </tr>
    <tr>
		<td> Estado</td>
    </tr>
    <tr>
		<td> PPP </td>
    </tr>
    <tr>
		<td> SCM </td>
	</tr>
	  <tr>
		<td> Outros </td>
	</tr>
	<tr>
    	<td rowspan="5" colspan="6"> Mesma morada que o estabelecimento?</td>
    	<td rowspan="4" colspan="1"> Sim</td>
    	<td > Morada </td>
	</tr>
	<tr>
    	<td > Código-Postal </td>
	</tr>
	<tr>
	<td > Concelho </td>
	</tr>
    
  	<tr>
		<td > Freguesia </td>
  	</tr>
	<tr>
    	 <td colspan="3"> Não </td>
  	</tr>
	<tr>
		<td colspan="6" rowspan="2">  d) Edifícios construídos na mesma fase?   </td>
		<td> Sim  </td>
		<td> Número de fases de construção =1 </td>
	</tr>  
	<tr>
		<td> Não </td>
		<td> Quantas fases de construção existiram? </td>
	</tr>  
	<tr>
		<td rowspan="5" colspan="4"> e) O estabelecimento hospitalar dispõe de plano diretor? </td>
		<td rowspan="4"> Sim </td>
    	<td rowspan="2"> Aprovado </td>
    	<td> Sim </td>
    	<td> Data de aprovação </td> 
 	</tr>
 	<tr>
    	<td  colspan="6"> Não </td>
 	</tr>
 	<tr>
     	<td rowspan="2"> Implementado? </td>
      	<td colspan="6"> Sim</td>
 	</tr>
 	<tr>
    	<td colspan="6"> Não </td>
 	</tr>
 	<tr>
     	<td colspan="4"> Não </td>
 	</tr>
	<tr>
		<td colspan="5" rowspan="5"> f)  Heliporto? </td>
		<td rowspan="4"> Sim </td>
		<td rowspan="2"> Operacional? </td>
    	<td> Sim </td>
	</tr>  
  	<tr>
     	<td> Não </td>
 	</tr>
 	<tr>
     	<td rowspan="2"> Certificado? </td>
     	<td> Sim </td>
 	</tr>
  	<tr>
     	<td> Não </td>
 	</tr>
  	<tr>
     	<td colspan="5" > Não </td>
  	</tr>  
	</tbody>
</table>


![fig40_1](img/pages/cap14/40_1.JPG)

<table class="tabelanova">
<thead>
  	<tr>
		<th colspan="8" >
			<strong> Campos Obrigatórios – Caracterização Geral - <a href="#fig40_2">Fig.57 </a> </strong>
    	</th>
	</tr>
</thead>
  <tbody>
	<tr>
		<td colspan="8"> Se estabelecimento tem vários edifícios  = Não  </td>
	</tr>                                          
	<tr>
		<td colspan="7" rowspan="4"> a) Propriedade do Terreno  </td>
    	<td> Estado </td>
    </tr>
	<tr>
		<td> Privado com cedência de direito de superfície </td>
	</tr>	
	<tr>
		<td> SCM </td>
	</tr>
	<tr>
		<td> Outros </td>
	</tr>
	<tr>
		<td colspan="8"> b) Nome edifício </td>
	</tr>
	<tr>
		<td colspan="7" rowspan="5"> c) Propriedade do(s) Edifício(s)  </td>
    	<td> Arrendado </td>
    </tr>
    <tr>
		<td> Estado</td>
    </tr>
    <tr>
		<td> PPP </td>
    </tr>
    <tr>
		<td> SCM </td>
	</tr>
	<tr>
		<td> Outros </td>
	</tr>
	<tr>
		<td rowspan="5" colspan="4"> d) O estabelecimento hospitalar dispõe de plano diretor? </td>
		<td rowspan="4"> Sim </td>
    	<td rowspan="2"> Aprovado </td>
    	<td> Sim </td>
    	<td> Data de aprovação </td> 
 	</tr>
 	<tr>
    	<td  colspan="6"> Não </td>
 	</tr>
 	<tr>
     	<td rowspan="2"> Implementado? </td>
      	<td colspan="6"> Sim</td>
 	</tr>
 	<tr>
    	<td colspan="6"> Não </td>
 	</tr>
 	<tr>
     	<td colspan="4"> Não </td>
 	</tr>
	<tr>
		<td colspan="5" rowspan="5"> e)  Heliporto? </td>
		<td rowspan="4"> Sim </td>
		<td rowspan="2"> Operacional? </td>
    	<td> Sim </td>
	</tr>  
  	<tr>
     	<td> Não </td>
 	</tr>
 	<tr>
     	<td rowspan="2"> Certificado? </td>
     	<td> Sim </td>
 	</tr>
  	<tr>
     	<td> Não </td>
 	</tr>
  	<tr>
     	<td colspan="5" > Não </td>
  	</tr>  
	</tbody>
</table>


![fig40_2](img/pages/cap14/40_2.JPG)

<p class="caption" id="fig40_2"> Criar Instalações – Caracterização Geral</p>

Pode inserir informação acerca das áreas e estacionamento, tendo de carregar no botão **SUBMETER** depois de preencher cada um dos módulos.

|    | Campos Áreas Totais e Estacionamento - ([](#fig41))  | |
|----|-----------------------------------------------------------|-|
| a) | Áreas Totais    |    Área bruta de construção             |
||                     |    Área de Estacionamento Construído     |
||                     |    Área implantação de todos os edifícios|
||                     |    Área de Arruamentos e Estacionamentos |
||                     |    Área terreno                          |
||                     |    Área útil                             |
| b) | Estacionamento  |  N.º Lugares de estacionamento em área construída |
||                     |  N.º Lugares de estacionamento à superfície |


![fig41](img/pages/cap14/41.JPG)

<p class="caption" id="fig41"> Criar Instalação - Áreas Totais e Estacionamento</p>


Relativamente ao estacionamento:
* Os lugares de estacionamento são os lugares de estacionamento disponíveis no estabelecimento hospitalar;
* Apenas devem ser contabilizados os lugares os oficiais (delimitados);
* Os descampados não contam para nº de lugares;
* Lugares concessionados a terceiros devem ser contabilizados (desde que sejam utilizados pelas entidades hospitalares).

O separador *Caracterização do Edifício* contém os dados referentes ao(s) edíficio(s) tais como o nome, a área útil do programa funcional, a área útil, a área bruta, a área de implantação, nº de pisos acima do solo, nº de pisos abaixo do solo e área de estacionamento construído ([](#fig42)).

![fig42](img/pages/cap14/42.JPG)

<p class="caption" id="fig42"> Caracterização do Edifício</p>

As áreas dos hospitais contemplam as áreas de prestação de cuidados de saúde e de apoio (investigação, técnicas, entre outras).
As casas de função (usadas, por exemplo, por funcionários realocados) não contam para as áreas.
Relativamente às SUBS e RNCCI, as suas áreas devem ser contabilizadas.

O separador *Projeto* visa caracterizar o projeto de construção do hospital , tal como os custos associados e datas chave. Estes dados devem ser inseridos para cada fase de construção dos edifícios.

![fig43](img/pages/cap14/43.JPG)

<p class="caption" id="fig43"> Projeto -  Projeto e Construção</p>

![fig43](img/pages/cap14/43_1.JPG)

<p class="caption" id="fig43_1"> Projeto -  Custos do Projeto </p>

![fig44](img/pages/cap14/44.JPG)

<p class="caption" id="fig44"> Projeto - Datas Chaves</p>

O separador *Construção* visa caracterizar os custos da construção e os custos de equipamentos. Estes dados devem ser inseridos para cada fase de construção dos edifícios.

![fig45](img/pages/cap14/45.JPG)

<p class="caption" id="fig45"> Caracterização da Construção</p>

<p id="detalhe-inst"></p>
### 14.1.2 Detalhe

É neste separador que o utilizador pode registar informação acerca das instalações técnicas da instalação, assim como alguns custos e consumos e a produção de resíduos.


|   |                 Campos Obrigatórios em Detalhe - Energia   ([](#fig46)) ||
|---|------------------------------------------------------------------------||
| a)| Ano*                                                          | |
| b)|Nível da tensão de alimentação – rede elétrica de distribuição pública     | |
| c)|Topologia de alimentação de energia elétrica                        | Em anel| 
|                                                                     | Radial |
| d)|Potência Contratada                                                        | |
| e)|Potência instalada                                                         | |
| f)|Nº grupos eletrogéneos                                                     | |
| g)|Potência instalada                                                         | |
| h)|Sistema de Cogeração                                                       | |
| i)|Sistema de Trigeração                                                      | |
| j)|Painéis Solares Térmicos   |Sim|           Área do campo coletores instalados|
| l)|Painéis Fotovoltaicos      |Sim|  Potência instalada em painéis fotovoltaicos|
| m)|Aero-geradores;            |Sim|         Potência instalada em energia eólica|
| n)|Sistemas de aproveitamento da biomassa                                     | |
| o)|Certificação Energética    |Sim| Qual a classificação energética  |A+    |
|   |                           |   |                                  |A     |
|   |                           |   |                                  |B     |
|   |                           |   |                                  |B-    |
|   |                           |   |                                  |C     |
|   |                           |   |                                  |D     |
|   |                           |   |                                  |E     |
|   |                           |   |                                  |F     |


\* Na criação da instalação, o campo *ano* é para preencher com o ano corrente; caso a instalação já exista no SGES e tenha sofrido alterações, deve inserir-se o ano em que ocorreu a alteração.

![fig46](img/pages/cap14/46.JPG)

<p class="caption" id="fig46"> Detalhe Energia</p>


|   |    Campos Obrigatórios em Detalhe - Água / Águas Residuais  ([](#fig47)) ||
|---|-------------------------------------------------------------------------||
| a)|Ano de alteração;                                                          | |
| b)|Volume de armazenamento total;                                             | |
| c)|Volume de armazenamento de água para rede de incêndios                     | |
| d)|Furo de captação de águas subterrâneas                                     | |
| e)|ETAR / ETARI                                                               | |


![fig47](img/pages/cap14/47.JPG)

<p class="caption" id="fig47"> Detalhe Água/Águas Residuais</p>

|    |   Campos Obrigatórios em Detalhe - Gases Medicinais  ([](#fig48))    ||
|----|----------------------------------------------------------------------||
| a)|Ano de alteração                                                           | |
| b)|Instalação registada no Infarmed como Dispositivo Médico?                  | |

![fig48](img/pages/cap14/48.JPG)

<p class="caption" id="fig48"> Detalhe Gases Medicinais</p>

|   |    Campos Obrigatórios em Detalhe - Consumos e Custos  ([](#fig49))  ||
|---|----------------------------------------------------------------------||
| a)|Ano                                                   | |
| b)|Energias Renováveis  |Energia elétrica produzida por painéis fotovoltaicos||
|   |                     |Energia elétrica produzida por aerogeradores           | |
| c)|Combustíveis  ||            |
|   |Consumo nafta |Custo nafta |
|   |Consumo gasóleo*|Custo gasóleo**|
|   |Consumo outros| Custo outros** |
| d)|Águas       
|   |Consumo água |Custo água   |
| e)|Gases Medicinais (inclui gases em garrafas)||       
|   |Consumo oxigénio |Custo oxigénio|
|   |Consumo azoto |Custo azoto|
|   |Consumo protóxido|Custo Protóxido|
|   |Consumo dióxido de carbono|Custo dióxido de carbono  |
|   |Consumo ar comprimido medicinal|Custo ar comprimido medicinal|
|   |Consumo ar comprimido medicinal produzido localmente|Custo ar comprimido medicinal produzido localmente|
|   |Consumo produção em Vácuo|Custo produção em Vácuo;|
|   |Consumo exaustão de gases anestésicos|Custo exaustão de gases anestésicos|

\*o gasóleo consumido via frota automóvel não deve ser reportado via SGES.

\** É permitido que o custo seja zero. 

![fig49](img/pages/cap14/49.JPG)

<p class="caption" id="fig49"> Detalhe Consumos e Custos</p>

A informação relativa à produção de resíduos é preenchida na aplicação através do importe de um ficheiro no *backoffice* da aplicação.

![fig50](img/pages/cap14/50.JPG)

<p class="caption" id="fig50"> Detalhe Produção de Resíduos</p>

<p id="equipamentos-crticos"></p>
### 14.1.3 Equipamentos Críticos 

É neste separador que o utilizador pode registar informação referente aos equipamentos críticos para o funcionamento da unidade hospitalar. Neste separador os equipamentos estão divididos pelo diferente tipo de instalações que integram, nomeadamente, instalações elétricas, instalações mecânicas e instalações de águas e esgotos. 
Após o registo de cada dado, o utilizador deve clicar no botão **GUARDAR** para que a informação seja gravada.

|    | Campos Obrigatórios em Equipamentos Críticos              | |
|----|-----------------------------------------------------------|-|
| | Instalações Elétricas ([](#fig51)), Instalações Mecânicas ([](#fig52)) ,Instalações de Águas e Esgotos ([](#fig53)) ||
|a)| Designação |(ver [16.1 Equipamentos das instalações elétricas, mecânicas e de águas e esgotos ](#listaeqcr))||
|b)| Localização | Exterior| 
||             | Edíficio| Localização do equipamento|
|c)| Marca ||
|d)| Modelo ||
|e)| Nº série||
|f)| Data entrada funcionamento ||
|g)| Estado   | Abatatido| Data de Abate|
|  |          | Avariado |
|  |          | Em funcionamento|
|  |          | Parado|

![fig51](img/pages/cap14/51.JPG)

<p class="caption" id="fig51"> Equipamentos Críticos - Instalações Elétricas</p>

![fig52](img/pages/cap14/52.JPG)

<p class="caption" id="fig52"> Equipamentos Críticos - Instalações Mecânicas</p>

![fig53](img/pages/cap14/53.JPG)

<p class="caption" id="fig53"> Equipamentos Críticos - Instalações de Águas e Esgotos</p>

Para cada tipo de instalação é possível filtrar a pesquisa de equipamentos.

Como mostrado nas figuras anteriores, é possível importar os equipamentos de cada tipo de instalações através do carregamento de um ficheiro excel.

Ao carregar no botão **Importar**, são mostradas as indicações necessárias para preencher e carregar corretamente o documento que contém a informação referente aos equipamentos críticos ([](#fig53.1)).

![fig53.1](img/pages/cap14/53.1.JPG)

<p class="caption" id="fig53.1"> Importação Equipamentos Críticos </p>

<p id="servios"></p>
### 14.1.4 Serviços

É neste separador que o utilizador pode registar informação relacionada com os serviços que foram realizados nas instalações do estabelecimento, assim como os seus custos e serviços de apoio.

|    |                                                  |   Campos Obrigatórios em Serviços        | |
|----|--------------------------------------------------|------------------------------------------|-|
|a)  | Serviço de Instalação e Equipamento ([](#fig54)) |||
|  |                                      |Ano de Alteração|
|  |                                      |Serviço de Instalações e Equipamentos – Em regime de outsourcing| Sim|
|  |                                                                                                       | Não|
|  |                                      |Equipa de Manutenção Permanente*| Elementos externos (Se *Serviço de Instalações e Equipamentos – Em regime de outsourcing*= Sim)|
|  |                                     |                                 | Misto (quadro e externos)|
|  |                                     |                                 | Funcionários da entidade hospitalar| (Se *Serviço de Instalações e Equipamentos – Em regime de outsourcing*= Não)|
|  |                                     | Número de elementos do SIE|
|  |                                     | Número de elementos externos|
|  |                                     |Número de elementos que são funcionários da entidade hospitalar|
|  |                                     | Em regime de outsourcing| Sim| Nome da Empresa|

\* A equipa de manutenção permanente é constituída pelos elementos que compõem a equipa residente de manutenção do estabelecimento hospitalar.

| b) | Custos do Serviço ([](#fig55)) |||
| |                                         | Orçamento anual do serviço de instalações e equipamentos|
| |                                         | Custos anuais com manutenção corretiva*|
| |                                         | Custos anuais com contratos de manutenção|
| |                                         |Custos anuais com substituição de equipamento|
| c) | Serviços de Apoio ([](#fig56)) |||
|    |                                      | Esterilização serviço em outsourcing|Sim|Custos anuais com o serviço|
| |                                         | Existe lavandaria|Sim|Custos anuais com o serviço|
| |                                         | Existe Cozinha|Sim|Custos anuais com o serviço|
| |                                         | Resíduos serviço em outsourcing| Sim| Custos anuais com o serviço|

\* Os custos anuais de manutenção devem ser relativas ao ano transato.

![fig54](img/pages/cap14/54.JPG)

<p class="caption" id="fig54"> Serviços - Serviço de Instalação e Equipamento</p>

![fig55](img/pages/cap14/55.JPG)

<p class="caption" id="fig55"> Serviços - Custos do Serviço</p>

![fig56](img/pages/cap14/56.JPG)

<p class="caption" id="fig56"> Serviços - Serviços de Apoio</p>

<p id="contratos-de-manuteno"></p>

### 14.1.5 Contratos de Manutenção

É neste separador que o utilizador pode registar informação dos contratos de manutenção dos equipamentos identificados no separador *Equipamentos Críticos*.

|    | Campos em Contratos de Manutenção – ([](#fig57)]     | |
|----|-----------------------------------------------------------|-|
|a)| Identificação do Contrato ||
|b)  | Equipamento com contrato de manutenção |Designação do equipamento crítico (ver [16.1 Equipamentos das instalações elétricas, mecânicas e de águas e esgotos ](#listaeqcr))|
| c)| Data Início ||
| d)| Data Fim ||
| e) |      Tipo de Manutenção                | Preventiva |
| |                                           | Corretiva |
| |                                           | Preventiva e Corretiva |
| f)|Com peças? (Se Tipo de Manutenção = “Preventiva” ou ”Corretiva ou Preventiva”)       |Sim |
| |                                           | Não |
| g) |      Duração do Contrato               | Semestral |
| |                                           | Anual |
| |                                           | Bianual|
| |                                           | Trianual|
| |                                           | Quadrienal|
| |                                           | Quinquenal|
| i)| Estado*                                 | Em vigor  |
|   |                                         | Anulado   |
|   |                                         | Fechado   |
|   |                                         | Renovado   |
| h) |   Contrato contém SLA – Service Level Agreement?    | Sim|
| |                                                        | Não|
| i) |  Existe equipa de manutenção associada a este contrato?    | Sim| |Números de elementos de equipa|
| |                                                        | Não|

![fig57](img/pages/cap14/57.JPG)

<p class="caption" id="fig57"> Contratos de Manutenção </p>

\* Quando um contrato é criado o seu estado é *Em Vigor* e este campo é não editável. 
Durante a duração do contrato é possível anulá-lo. Para isso o utilizador deve selecionar um dos contratos, clicar no botão **Cessar**       ([](#anular)) e indicar o motivo do anulamento do contrato.

![anular](img/pages/cap14/57_1.JPG)

<p class="caption" id="anular"> Possibilidade de anular um contrato em vigor </p>

Se o contrato já tiver terminado (i.e., data de fim inferior à data atual), o utilizador pode renovar ou fechar o contrato. Para isso o utilizador deve selecionar um dos contratos e clicar nos respetivos botões ([](#renovar)).

![renovar](img/pages/cap14/57_2.JPG)

<p class="caption" id="renovar"> Possibilidade de echar ou renovar um contrato que já chegou ao fim </p>

O utilizador pode filtrar a pesquisa de contratos tendo em conta o seu estado, nomeadamente, o utilizador pode pesquisar por contratos ativos, anulados ou fechados ([](#filtrar)).
Contratos ativos correspondem a contratos em vigor e contratos renovados.

![filtrar](img/pages/cap14/52_3.JPG)

<p class="caption" id="filtrar"> Pesquisa de Contratos </p>

<!--<p id="avaliao-ps-ocupao"></p> 
### 14.1.6 Avaliação Pós-Ocupação

É neste separador que o utilizador pode registar informação acerca da avaliação dos edifícios da instalação; útil instrumento na implementação de melhorias na criação de edifícios no futuro.

|    | Campos em Avaliação Pós-Ocupação – ([](#fig58))    | |
|----|-----------------------------------------------------------|-| 
|a)  | Existe APO efetuada?                | Data de realização |
|b)  | Serviços avaliados                						||
|c)  | Upload para repositório?            | Ficheiro           |

![fig58](img/pages/cap14/58.JPG)

<p class="caption" id="fig58"> Avaliação Pós-Ocupação </p>

<p id="acao-acss"></p>
### 14.1.7 Ações ACSS
É neste separador que o utilizador pode registar informação de todas as ações que a ACSS executou naquelas instalações.

|    | Campos em Ações ACSS – ([](#fig59))     | |
|----|-----------------------------------------------------------|-|
| a) | Existem ações realizadas no estabelecimento, pela ACSS? |Data de realização |
| b) | Tipo de Ação                          |Avaliações do estado das instalações |
||                                           |Estudo-piloto |
||                                           |Outros |
||                                           |Visita |
| c) | Serviços Visitados                           ||
| d) | Descrição Sumária                            ||
| e) | Upload para repositório?              |Ficheiro |


![fig59](img/pages/cap14/59.JPG)

<p class="caption" id="fig59"> Ações ACSS </p> -->

<p id="editar-instalaes"></p>  
## 14.2. Editar Instalações

O utilizador pode navegar para a página de edição da instalação clicando no botão **CONSULTAR** na página de instalações de estabelecimento ([](#fig39)) e clicar no botão **ALTERAR INSTALAÇÃO**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [12.1 Criar Instalações](#criar-instalaes)
No final da edição o utilizador para gravar as alterações deve clicar no botão **SUBMETER** ou **GUARDAR**, dependendo dos painéis alterados. Após clicar irá ser notificado com o resultado da operação.

<p id="consultar-instalaes"></p>
## 14.3. Consultar Instalações
O utilizador pode navegar para a página de consulta de instalação na página de instalações de estabelecimento ([](#figEstabeSInst)) e clicar no botão **CONSULTAR INSTALAÇÃO**.

<p id="histrico-instalaes"></p>
## 14.4. Histórico Instalações

A página de histórico de uma instalação pode ser acedida através da página da instalação do estabelecimento ([](#figEstabeSInst)) e clicando no botão **HISTÓRICO INSTALAÇÃO** .
Uma vez na página de histórico poderá visualizar a data das alterações, o utilizador que as realizou e os paineis que afetaram.






