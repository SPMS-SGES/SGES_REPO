---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---
<p id="equipamentos"></p>

# 13. Equipamentos

Neste módulo são feitas ações sobre os equipamentos. 
Estas só poderão ser realizadas caso na ficha do estabelecimento, no separador *Estabelecimento*, dentro da secção *Identificação* esteja ativa a opção que indicada que o estabelecimento possui equipamentos médicos pesados ([](#figTemEmp)).

![figTemEmp](img/pages/cap13/Tem_EMP_1.jpg)

<p class="caption" id="figTemEmp"> Estabelecimento permite o registo de equipamentos</p>

O utilizador pode consultar a lista de equipamentos associados a um estabelecimento através do separador *Equipamentos* ([](#figEqpEstabelecimento))

![figEqpEstabelecimento](img/pages/cap13/12_1_v1.jpg)

<p class="caption" id="figEqpEstabelecimento"> Equipamentos de um estabelecimento</p>

<p id="criaEquipamento"></p>

## 13.1. Criar Equipamentos
Para criar equipamentos, o utilizador carrega em **CRIAR**, na página de equipamentos de um estabelecimento, ([](#figEqpEstabelecimento)) à qual pode aceder através do **menu Entidade** ou do **menu Equipamentos**.
Na página de criação de um equipamento, o utilizador deverá preencher os campos obrigatórios da secção *Identificação* para poder 
efetuar o registo do equipamento.

<p id="identificao"></p>
### 13.1.1. Secção Identificação

|  | Campos Obrigatórios da Identificação de um Equipamento ([](#figCriarEquipamento))  |   |  |   |  |
|----|--------|----------|----------|------------------------|------------|
| a) | Classificação do equipamento | Novo |
|    |                              | Substituição | Nº de Série do equipamento a ser substituído |
|    |                              | Upgrade (com alteração do nº de série) | Nº de Série do equipamento a ser alvo de upgrade | Observações |
| b) | Tipologia de Equipamento | Acelerador linear | | |
|    |                           | Angiógrafo | | |
|    |                           | Braquiterapia de alta-taxa de dose | | |
|    |                           | Ciclotrão | | |
|    |                           | Cobalto 60 | | |
|    |                           | Cyber-knife | | |
|    |                           | Câmara Gama | | |
|    |                           | Câmara Gama com TC | | |
|    |                           | Câmara Hiperbárica | | |
|    |                           | Gamma-knife | | |
|    |                           | PET | | |
|    |                           | PET-RM | | |
|    |                           | PET-TC | | |
|    |                           | RM | | |
|    |                           | RM (dedicada exclusivamente à Radioterapia) | | |
|    |                           | Robot Cirúrgico | | |
|    |                           | Simulador | | |
|    |                           | TC | | |
|    |                           | TC (dedicada exclusivamente à Radioterapia) | | |
|    |                           | TC - Simulador | | |
|    |                           | Tomoterapia | | |
| c) | Número de Série | | | |
| d) | Posto de trabalho | Todos os serviços a que um equipamento se encontra associado devem ser considerados | | |
| e) | Marca | | | |
| f) | Modelo | | | |
| g) | Característica Técnica | Se Designação = Acelerador Linear, Angiógrafo, Câmara Gama, Câmara Hiperbárica, RM, RM (Dedicada exclusivamente à Radioterapia), TC ou TC (Dedicada exclusivamente à Radioterapia) | | |
| h) | Produção para Exterior? | Sim |  | |
|    |                         | Não |  | |
| i) | O equipamento é partilhado por mais alguma entidade? | Sim | A entidade pertence ao SNS? | Tipo de Entidade | Entidade* |
|    |                                                           | Não | Qual o nome da entidade? | |

\* Para que seja possível selecionar a entidade o utilizador deve, primeiro, selecionar o tipo de entidade.

![figCriarEquipamento](img/pages/cap13/Identificacao.png)

<p class="caption" id="figCriarEquipamento"> Criar novo Equipamento - Secção de Identificação</p>

Após o registo dos dados o utilizador deve carregar em **GUARDAR** para criar o equipamento. Ao carregar será notificado com o resultado da operação.

<p id="substituicao"></p>
#### 13.1.1.1 Registar um equipamento de substituição

Para criar um equipamento de substituição, o utilizador deve começar por indicar que o novo EMP será utilizado para substituir um equipamento existente. Para isso, basta selecionar a opção **Substituição** no campo *Classificação do equipamento* ([Fig.42](#figSelecionarSubstituicao)).  

![figSelecionarSubstituicao](img/pages/cap13/sel_subs.png)

<p class="caption" id="figSelecionarsubstituicao"> Secção de Identificação - Criação de equipamento de Substituição. </p>

Após essa escolha, é apresentado o campo **Nº de série do equipamento a substituir**, onde o utilizador deve pesquisar e selecionar o equipamento que deixará de estar ativo. A lista apresentada contém apenas equipamentos em funcionamento ou avariados, sendo possível utilizar filtros para facilitar a pesquisa ([](#figPesquisaSubstituicao)).  

![figPesquisaSubstituicao](img/pages/cap13/pop_up_subs.png)

<p class="caption" id="figPesquisaSubstituicao"> Pesquisa e seleção de equipamento a ser substituído. </p>

Depois de selecionado o equipamento a substituir, o utilizador deve preencher os restantes campos obrigatórios da secção de **Identificação**, como mostrado na tabela acima.
Quando a gravação é concluída ([](#figSucesso)), o registo do novo EMP é concluído e o estado do equipamento selecionado para substituição, é automaticamente atualizado para **Desativado por substituição** ([](#figConsulta)).  

![figSucesso](img/pages/cap13/sucesso.png)

<p class="caption" id="figSucesso"> Equipamento de substituição criado com sucesso. </p>

![figConsulta](img/pages/cap13/consulta.png)

<p class="caption" id="figConsulta"> Consulta de um equipamento de substituição e de um equipamento substituido com o estado atribuído automaticamente para "Desativado por substituição". </p>

<p id="upgradeComNovoNSerie"></p>
#### 13.1.1.2 Registar um equipamento que foi alvo de um upgrade que alterou o seu nº de série. 


Na criação de um equipamento quando o mesmo foi alvo de um upgrade que implica alteração do número de série o utilizador deve, no campo **Classificação do equipamento**, selecionar a opção **Upgrade (com alteração do nº de série)** ([](#figSelecionarUpgrade)).  

Dá-se nota que **para a criação de um equipamento de Upgrade com alteração do nº de série, os campos “Produção para o exterior?” e “O equipamento é partilhado por mais alguma entidade?” devem estar preenchidos na ficha do equipamento que será alvo de upgrade.**

![figSelecionarUpgrade](img/pages/cap13/sel_upgrade.png)

<p class="caption" id="figSelecionarUpgrade"> Secção de Identificação - Criação de equipamento que foi alvo de um upgrade que alterou o seu nº de série. </p>

Após selecionar a opção de upgrade serão apresentados novos campos obrigatórios ([](#figNovosCampos)):  

| Campo | Secção |
|--------|---------|
| Nº de série do equipamento alvo do upgrade | Identificação |
| Observações | Identificação |
| Upgrade aumenta o tempo de vida útil? | Contratação |
| Valor do upgrade | Contratação |

![figNovosCampos](img/pages/cap13/novos_campos.png)

<p class="caption" id="figNovosCampos"> Novos campos obrigatórios da secção "Identificação" e "Contratação". </p>

Carregue no botão de pesquisa do campo **Nº de série do equipamento alvo do upgrade** e selecione o equipamento que será alvo de upgrade ([](#figPesquisaUpgrade)).  

![figPesquisaUpgrade](img/pages/cap13/pop_up_ugrade.png)

<p class="caption" id="figPesquisaUpgrade"> Pesquisa e seleção de equipamento a ser alvo de upgrade. </p>

Após a seleção do equipamento, o formulário da secção **Identificação** é automaticamente preenchido, exceto com o novo **Nº de série** e **Observações**, que terão de ser preenchidos com o o novo nº de série do equipamento e uma breve descrição do upgrade realizado, respetivamente ([](#figPreenchimento)).  

![figPreenchimento](img/pages/cap13/preenchimento.png)

<p class="caption" id="figPreenchimento"> Preenchimento automático dos campos da secção "Identificação". </p>

Introduza o novo número de série e uma breve descrição do upgrade realizado nas observações ([](#figPreencherDados)).  

![figPreencherDados](img/pages/cap13/preencher_dados.png)

<p class="caption" id="figPreencherDados"> Preenchimento do novo nº de série e do campo "Observações". </p>

Clique em **Guardar** para concluir o preenchimento da secção **Identificação** ([](#figSucessoUpgrade)).  

![figSucessoUpgrade](img/pages/cap13/sucesso_upgrade.png)

<p class="caption" id="figSucessoUpgrade"> Secção "Identificação" preenchida com sucesso. </p>

Preencha os campos obrigatórios da secção **Contratação** ([](#figPreencherContratacao)):  
   - Tipo Contrato;
   - Data de Início de Funcionamento;
   - Data de Receção;
   - Upgrade aumenta o tempo de vida útil do equipamento?;
   - Valor do upgrade.
 
![figPreencherContratacao](img/pages/cap13/contratacao_preenchido.png)

<p class="caption" id="figPreencherContratacao"> Preenchimento dos campos obrigatórios da secção "Contratação". </p>

Caso o upgrade aumente o tempo de vida útil do equipamento o campo **Indique em quantos anos:** torma-de de preenchimento obrigatório.

Carregar no botão **Guardar** da secção para concluir o processo ([](#figSucessoContratacao)).

![figSucessoContratacao](img/pages/cap13/sucesso_contratacao.png)

<p class="caption" id="figSucessoContratacao"> Preenchimento dos campos obrigatórios da secção "Contratação" realizado com sucesso. </p>

O estado do equipamento selecionado para upgrade é automaticamente alterado para **Desativado por upgrade** ([](#figConsultaUpgrade)).

![figConsultaUpgrade](img/pages/cap13/consulta_upgrade.png)

<p class="caption" id="figConsultaUpgrade"> Consulta do equipamento upgrade e do equipamento que foi alvo do upgrade que alterou o seu nº de série com o estado atribuído automaticamente para "Desativado por upgrade". </p>

<p id="outros-painis"></p>
### 13.1.2. Outros painéis

|    | Outros módulos a preencher                 |
|----|--------------------------------------------| 
| a) | Contratação ([](#figContratacao))            |
| b) | Localização/Estado ([](#figLocalizacao))     |
| c) | Manutenção  ([](#figManutencao))
| d) | Atividade   ([](#figAtividade))            |
| e) | Autorização Ministerial / Licença de Instalação ([](#figAutorizacao))|
| f) | Recursos Humanos Afetos ([](#figRhAfetos))|


|    | Campos Obrigatórios do módulo Contratação ([](#figContratacao))                                      |
|----|------------------------------------------------------------------------------------------------------|
| a) | Se Tipo de Contrato = Aquisição, Concessão, Locação/Leasing, Oferta |  Nº inventário/ID Equipamento                                       | 
|    |                                |  Data de publicação da abertura do concurso                         |
|    |                                | Custo de aquisição                                                   |
|    |                                | Data de ínicio de funcionamento                                      |
| b) | Se Tipo de Contrato = Outros |  Nº inventário/ID Equipamento                                       | 
|    |                                |  Data de publicação da abertura do concurso                         |
|    |                                | Custo de aquisição                                                   |
|    |                                | Data de ínicio de funcionamento                                      |
|    |                                | Especificações (tipo de contrato Outros)                             |

![figContratacao](img/pages/cap12/12_1_2_1.jpg)

<p class="caption" id="figContratacao"> Criar novo Equipamento - Contratação</p>

|    | Campos Obrigatórios do módulo Localização/Estado ([](#figLocalizacao)) | | |
|----|----------------------------------------------------|----------||
| a) | Estado                               		      | Abatido    ||
||                                                        | Avariado    ||
||                                                        | Em Funcionamento ||
||                                                        | Não Instalado ||
||                                                        | Parado       ||
||                                                        | Desativado por substituição  ||
||                                                        | Desativado por upgrade     ||
| b) | Instalação Fixa				                      | Sim| Localização |
||                                                        | Não ||
| c) | Se Estado = Abatido, Desativado por substituição ou por upgrade  | Data de Alteração do Estado||
| d) | Se Estado = Avariado                    	          | Data de Alteração do Estado||
|    |                                                    | Motivo ||
| e) | Se Estado = Não instalado ou Parado                | Motivo ||

![figLocalizacao](img/pages/cap12/12_1_2_2_v1.jpg)

<p class="caption" id="figLocalizacao"> Criar novo Equipamento - Localização/Estado</p>

|    | Campos Obrigatórios do módulo Atividade ([](#figAtividade)) | | 
|----|----------------------------------------------------|----------|
| a) | Tipo Atividade                               	| Partilhada (Programada/Urgência) |
||                                                      | Programada    |
||                                                      | Urgência ||
| b) | Se Estado diferente urgência				        | Carga Semanal| 
| c) | Se Estado diferente urgência				        | Nº dias por semana| 
| d) | Tipo de Utilização                    	        | Exclusiva do serviço* |
|                                                       | Partilhada por Diferentes Serviços |

\* Caso o tipo de utilização seja exclusiva do serviço, têm de existir os serviços que constam nas especialidades do estabelecimento ([](#figEspecialidade)).

![figAtividade](img/pages/cap12/12_1_2_4.PNG)

<p class="caption" id="figAtividade"> Criar novo Equipamento - Atividade</p>


|    | Campos Obrigatórios do módulo Manutenção ([](#figManutencao)) ||
|----|----------------------------------------------------|----------|
| a) | Ano               			                	  | |
| b) | Tipo de Manutenção                           	  | Corretiva|
|	|        		                         	          | Preventiva |
|	|        		                         	          | Preventiva e Corretiva |
| c) | Duração   Contrato                           	  | Anual|
|	|        		                         	          | Bianual |
|	|        		                         	          | Quadrienal |
|	|        		                         	          | Quinquenal |
|	|        		                         	          | Semestral |
|	|        		                         	          | Trianual |
| d) |  Se Tipo de Manutenção = Corretiva, Preventiva ou Preventiva e Corretiva | Preventiva com Peças|
| e) | Se Designação=TC, com ampola                       | Sim |
|	|        		                         	          | Não |
| f) | Detetores                              	          | Sim |
|	|        		                         	          | Não |
| g) | Outros                             	          	  |  |
| h) | Nome da empresa                            	      |  |
| i) | Custo                             	          	  |  |
| j) | Horas de paragem/Ano                                   |  |


![figManutencao](img/pages/cap12/12_1_2_3.PNG)

<p class="caption" id="figManutencao"> Criar novo Equipamento - Manutenção</p>


|    | Campos Obrigatórios do módulo Autorização Ministerial/ Licença de Instalação ([](#figAutorizacao)) | | |
|----|----------------------------------------------------|----------|--|
| a) | Autorização Ministerial*                         	  | Sim||
||                                                   	  | Não||
| b) | Instalação licenciada pela DGS?                    | Sim| Data da Licença* |
||                                                   	  | Não||
| c) | Observação                                         |    | |                   

\* O campo *autorização ministerial* não é aplicável para equipamentos com Designação =Câmara Hiperbárica, RM, RM (Dedicada Exclusivamente à Radioterapia), Robot Cirúrgico (tipo D’avinci), Simulador, TC, TC-Simulador e TC (Dedicada exclusivamente à radioterapia); 

Depois de o utilizador selecionar a data da licença, o campo *período de vigência* (que se encontra sempre inativo) fica, automaticamente, preenchido com 5 anos.

![figAutorizacao](img/pages/cap12/12_1_2_5.jpg)

<p class="caption" id="figAutorizacao"> Criar novo Equipamento - Autorização Ministeria/ Licença de Instalação</p>

Depois de preencher cada um dos painéis referidos anteriormente  utilizador deve clicar em **GUARDAR** para que a informação fique gravada.

Para o utilizador aceder ao painel *Recursos Humanos Afetos*([](#figRhAfetos)) deverá clicar na *tab* respectiva, e selecionar o ano pretendido.
Para que o botão **CRIAR** esteja ativo, é necessário que o campo *Data de Início de Funcionamento* do campo *Contratação* esteja preenchido.
O utilizador tem, ainda, a possibilidade de replicar a informação do ano imediatamente anterior ao selecionado. 
Após clicar em **ALTERAR** irá ser notificado com o resultado da operação.

|    | Campos Obrigatórios do módulo Recursos Humanos Afetos ([](#figRhAfetos)) | | 
|----|----------------------------------------------------|----------|
| a) | Ano               			                	  | |
| b) | Grupo Profissional                         	      | |
| c) | Área Afetação   		                           	  | |
| d) | ECTS 		   		                           	  | |


![figRhAfetos](img/pages/cap12/12_1_2_6.PNG)

<p class="caption" id="figRhAfetos"> Criar novo Equipamento - Recursos Humanos Afetos</p>


<p id="alteraEquipamento"></p>

## 13.2. Editar Equipamento

A página de edição de um equipamento está disponível através da consulta de equipamento clicando no botão **EDITAR EQUIPAMENTO**. O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.

 Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)) o utilizador pode navegar diretamente para a edição após selecionar um equipamento da lista e clicar no botão **EDITAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [13.1 Criar Equipamento](#criar-equipamento).
Para gravar as alterações o utilizador  deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.
O utilizador pode navegar entre os equipamentos do estabelecimento clicando em **SEGUINTE** ou **ANTERIOR**.

<p id="upgradeSemAlteracaoNSerie"></p>
### 13.2.1. Registar um upgrade que não altera o nº de série de um equipamento

Este tipo de upgrade deve ser registado quando não ocorre alteração do número de série do equipamento. O registo é feito diretamente na edição de um equipamento existente com estado **Em funcionamento** ou **Avariado**.

Na secção **Identificação**, ative a opção:  
**O equipamento foi alvo de um upgrade (sem alteração do nº de série)?**, selecione **Sim** 

São apresentados novos campos ([](#figNovosCamposEdicao)) :  

| Campo | Secção |
|--------|---------|
| Observações | Identificação |
| Upgrade aumenta o tempo de vida útil? | Contratação |
| Valor do upgrade | Contratação |

![figNovosCamposEdicao](img/pages/cap13/novos_campos_edicao.png)

<p class="caption" id="figNovosCamposEdicao"> Novos campos de preenchimento obrigatório.</p>

Preencha **Observações** com uma breve descrição do upgrade realizado e carregue no botão **Guardar** da secção *Identificação*([](#figSucessoEdicaoUpgradeIdentificacao)).  

<a id="figSucessoEdicaoUpgradeIdentificacao"></a>
<img src="img/pages/cap13/sucesso_edicao_upgrade_identificacao.png" style="max-width: 1021px; width: 100%; height: auto;">

<p class="caption" id="figSucessoEdicaoUpgradeIdentificacao"> Secção "Identificação" alterada com sucesso.</p>

Preencha os novos campos da secção **Contratação**.  
Caso o upgrade aumente o tempo de vida útil do equipamento o campo **Indique em quantos anos:** torma-de de preenchimento obrigatório ([](#figEdicaoContratacao)).

<a id="figEdicaoContratacao"></a>
<img src="img/pages/cap13/contratacao_edicao_preenchido.png" style="max-width: 1021px; width: 100%; height: auto;">

<p class="caption" id="figEdicaoContratacao"> Novos campos da secção "Contratação" preenchidos.</p>

Clique novamente no botão **Guardar** da secção. O upgrade fica registado no equipamento mantendo o mesmo número de série ([](#figSucessoContratacaoUpgrade)).

<a id="figSucessoContratacaoUpgrade"></a>
<img src="img/pages/cap13/contratacao_sucesso_upgrade.png" style="max-width: 1021px; width: 100%; height: auto;">

<p class="caption" id="figSucessoContratacaoUpgrade"> Upgrade que não altera o nº de série do equipamento registado com sucesso. </p>

<p id="consultaEquipamento"></p>

## 13.3. Consultar Equipamento

Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a consulta após selecionar um equipamento da lista e clicar no botão **CONSULTAR**. O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.

<p id="transfereEquipamento"></p>

## 13.4. Transferir Equipamento

Na página de equipamentos de um estabelecimento([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um equipamento da lista e clicar no botão **TRANSFERIR**. O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.

|    | Campos Obrigatórios para transferir equipamento ([](#figTransfEquipamento))         |
|----|----------------------------------------------------|
| a) | Data de Fim                                        | 
| b) | Motivo                                             | 
| c) | Tipo de Entidade                                   | 
| d) | Entidade                                           | 
| e) | Estabelecimento                                    | 

![figTransfEquipamento](img/pages/cap12/12_4_1_v1.jpg)

<p class="caption" id="figTransfEquipamento"> Transferir Equipamento</p>

<p id="historicoEquipamento"></p>

Na página de transferência o utilizador pode consultar toda a informação respeitante ao equipamento que vai transferir.

## 13.5. Histórico de Equipamento
A página de histórico de um equipamento pode ser acedida através da página de equipamentos de estabelecimento ([](#figEqpEstabelecimento)), ou através da página do equipamento no canto superior direito ([](#figCriarEquipamento)), clicando no botão **HISTÓRICO**.
O utilizador pode aceder a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.
Uma vez na página de histórico, o utilizador poderá visualizar as versões resultantes da edição da entidade, a data em que as alterações foram efetuadas, o utilizador que as realizou, identificação dos campos alterados, bem como a informação anterior e a informação nova. O menu permite ainda pesquisa das alterações efetuadas através de filtros como intervalo de tempo (data de - data até), Seccção, Utilizador, ou Campo ([](#figMenuHistorico)). É ainda possível efetuar a extração do resultado da pesquisa realizada. Este menu apenas apresenta as próprias alterações, apenas com as devidas permissões, apresenta todo o histórico de alterações de todos os utilizadores.

![figMenuHistorico](img/pages/cap12/40.1.1.jpg)
<p class="caption" id="figMenuHistorico"> Menu do histórico de alterações do equipamento</p>

