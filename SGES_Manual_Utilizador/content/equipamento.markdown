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

# 12. Equipamentos

Neste módulo que são feitas ações sobre os equipamentos. 
Estas só poderão ser realizadas caso de no separador *Estabelecimento* estar indicado que existe equipamento médico pesado.
O utilizador pode consultar a lista de equipamentos associados a um estabelecimento através do separador *Equipamentos* ([](#figEqpEstabelecimento))

![figEqpEstabelecimento](img/pages/12_1.jpg)

<p class="caption" id="figEqpEstabelecimento"> Equipamentos de um estabelecimento</p>

<p id="criaEquipamento"></p>

## 12.1. Criar Equipamento
Para criar um novo equipamento, o utilizador pode clicar em **CRIAR** na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)) à qual pode aceder através do menu Entidade ou do menu Equipamentos.
Na página de criação de equipamento, o utilizador deverá preencher os campos obrigatórios do painel *Identificação* para poder 
efetuar o registo do equipamento.

<p id="identificao"></p>
### 12.1.1. Identificação

|    | Campos Obrigatórios da ([](#figCriarEquipamento))         |      |
|----|----------------------------------------------------|----------|
| a) | Designação                                         |      |
| b) | Número de série                                    |      |
| c) | Posto de trabalho (todos os serviços a que um equipamento se encontra associado devem ser considerados)                           |      |
| d) | Marca                                              |      |
| e) | Modelo                                             |      |
| f) | Se Designação = Acelerador Linear,Angiógrafo,Câmara Gama, Câmara Hiperbárica,RM, RM (Dedicada exclusivamente à Radioterapia),TC ou TC (Dedicada exclusivamente à Radioterapia)                           |Característica Técnica| 
| g) | Produção para Exterior?                          | Sim     |
|    |                                                  | Não     |
| h) | O equipamento é partilhado por mais alguma entidade? | Sim| A entidade pertence ao SNS?| |Sim| Tipo de Entidade| |Entidade*|
|    |                                                      |Não| Qual o nome da entidade?|

* Para que seja possível selecionar a entidade o utilizador deve, primeiro, selecionar o tipo de entidade.

![figCriarEquipamento](img/pages/12_1_1_1.PNG)

<p class="caption" id="figCriarEquipamento"> Criar novo Equipamento - Identificação</p>

Após o registo dos dados deve clicar em **GUARDAR** para gravar o equipamento. Após clicar irá ser notificado com o resultado da operação.

<p id="outros-painis"></p>
### 12.1.2. Outros painéis

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
| a) | Se Tipo de Contrato = Aquisição|  Nº inventário/ID Equipamento                                       | 
|    |                                |  Data de publicação da abertura do concurso                         |
|    |                                |Custo de aquisição                                                   |
|    |                                |Data de ínicio de funcionamento                                      |
| b) | Se Tipo de Contrato = Concessão | Data início de funcionamento                                       |
| c) | Se Tipo de Contrato = Locação/Leasing ou Oferta | Nº inventário/ID Equipamento                       | 
|    |                                                 | Data de início de funcionamento                    |

![figContratacao](img/pages/12_1_2_1.jpg)

<p class="caption" id="figContratacao"> Criar novo Equipamento - Contratação</p>

|    | Campos Obrigatórios do módulo Localização/Estado ([](#figLocalizacao)) | | |
|----|----------------------------------------------------|----------||
| a) | Estado                               		      | Abatido    ||
||                                                        | Avariado    ||
||                                                        | Em Funcionamento ||
||                                                        | Não Instalado ||
||                                                        | Parado       ||
| b) | Instalação Fixa				                      | Sim| Localização |
||                                                        | Não ||
| c) | Se Estado = Não Instalado,Parado ou Avariado       | Motivo||
| d) | Se Estado = Abatido                    	          | Data de Abate|

![figLocalizacao](img/pages/12_1_2_2.jpg)

<p class="caption" id="figLocalizacao"> Criar novo Equipamento - Localização/Estado</p>

|    | Campos Obrigatórios do módulo Atividade ([](#figAtividade)) | | 
|----|----------------------------------------------------|----------|
| a) | Tipo Atividade                               	| Partilhada (Programada/Urgência) |
||                                                      | Programada    |
||                                                      | Urgência ||
||                                                      | Parado       |
| b) | Se Estado diferente urgência				        | Carga Semanal| 
| c) | Se Estado diferente urgência				        | Nº dias por semana| 
| d) | Tipo de Utilização                    	        | Exclusiva do serviço* |
| e) |                                                  | Partilhada por Diferentes Serviços |

![figManutencao](img/pages/12_1_2_3.PNG)

<p class="caption" id="figManutencao"> Criar novo Equipamento - Manutenção</p>

Caso o tipo de utilização seja exclusiva do serviço, têm de existir os serviços que constam nas especialidades do estabelecimento ([](#figEspecialidade)).

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
| d) |  Se Tipo de Manutenção = Preventiva ou Preventiva e Corretiva | Preventiva com Peças|
| e) | Se Designação=TC, com ampola                       | Sim |
|	|        		                         	          | Não |
| f) | Detetores                              	          | Sim |
|	|        		                         	          | Não |
| g) | Outros                             	          	  |  |
| h) | Nome da empresa                            	      |  |
| i) | Custo                             	          	  |  |
| j) | Horas de paragem                                   |  |



![figAtividade](img/pages/12_1_2_4.PNG)

<p class="caption" id="figAtividade"> Criar novo Equipamento - Atividade</p>


|    | Campos Obrigatórios do módulo Autorização Ministeria/ Licença de Instalação ([](#figAutorizacao)) | | |
|----|----------------------------------------------------|----------|--|
| a) | Autorização Ministerial*                         	  | Sim||
||                                                   	  | Não||
| b) | Instalação licenciada pela DGS?                    | Sim| Data da Licença* |
||                                                   	  | Não||
| c) | Observação                                         |    | |                   

• O campo *autorização ministerial* não é aplicável para equipamentos com Designação =Câmara Hiperbárica, RM, RM (Dedicada Exclusivamente à Radioterapia), Robot Cirúrgico (tipo D’avinci), Simulador, TC, TC-Simulador e TC (Dedicada exclusivamente à radioterapia); 

Depois de o utilizador selecionar a data da licença, o campo *período de vigência* (que se encontra sempre inativo) fica, automaticamente, preenchido com 5 anos.

![figAutorizacao](img/pages/12_1_2_5.jpg)

<p class="caption" id="figAutorizacao"> Criar novo Equipamento - Autorização Ministeria/ Licença de Instalação</p>


![figRhAfetos](img/pages/12_1_2_6.PNG)

<p class="caption" id="figRhAfetos"> Criar novo Equipamento - Recursos Humanos Afetos</p>

|    | Campos Obrigatórios do módulo Recursos Humanos Afetos ([](#figRhAfetos)) | | 
|----|----------------------------------------------------|----------|
| a) | Ano               			                	  | |
| b) | Grupo Profissional                         	      | |
| c) | Área Afetação   		                           	  | |
| d) | ECTS 		   		                           	  | |

Para o utilizador aceder ao painel *Recursos Humanos Afetos*([](#figRhAfetos)) deverá clicar na *tab* respectiva, e selecionar o ano pretendido.
Para que o botão **CRIAR** esteja ativo, é necessário que o campo *Data de Início de Funcionamento* do campo *Contratação*.
Após preencher os campos em cada painel, o utilizador deve clicar em  **GUARDAR** no painel respectivo, para gravar o equipamento.
O utilizador tem, ainda, a possibilidade de replicar a informação do ano imediatamente anterior ao selecionado. 
Após clicar irá ser notificado com o resultado da operação.

<p id="alteraEquipamento"></p>

## 12.2. Editar Equipamento

A página de edição de um equipamento está disponível através da consulta de equipamento clicando no botão **EDITAR EQUIPAMENTO**. O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.

 Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)) o utilizador pode navegar diretamente para a edição após selecionar um equipamento da lista e clicar no botão **ALTERAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [13.1 Criar Equipamento](#criar-equipamento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.
O utilizador pode navegar entre os equipamentos do estabelecimento clicando em **SEGUINTE** ou **ANTERIOR**.

<p id="consultaEquipamento"></p>

## 12.3. Consultar Equipamento

Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a consulta após selecionar um equipamento da lista e clicar no botão **CONSULTAR**. O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.

<p id="transfereEquipamento"></p>

## 12.4. Transferir Equipamento

Na página de equipamentos de um estabelecimento([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um equipamento da lista e clicar no botão **TRANSFERIR**. O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.

|    | Campos Obrigatórios da ([](#figTransfEquipamento))         |
|----|----------------------------------------------------|
| a) | Data de Fim                                        | 
| b) | Motivo                                             | 
| c) | Entidade de Destino                                | 
| d) | Estabelecimento de Destino                         | 


![figTransfEquipamento](img/pages/12_4_1.jpg)

<p class="caption" id="figTransfEquipamento"> Transferir Equipamento</p>

<p id="historicoEquipamento"></p>

Na página de transferência o utilizador pode consultar toda a informação respeitante ao equipamento que vai transferir.

## 12.5. Histórico de Equipamento
A página de histórico de um equipamento pode ser acedida através da página de equipamentos de estabelecimento ([](#figEqpEstabelecimento)) e clicando no botão **HISTÓRICO**.
O utilizador pode aceder
a esta página através do menu Entidade ou, diretamente, através do menu Equipamentos.
Uma vez na página de histórico, o utilizador poderá visualizar todas as versões resultantes da edição do equipamento, bem como a identificação dos campos alterados.
