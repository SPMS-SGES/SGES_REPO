---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

# 12. Equipamentos

É neste módulo que são feitas ações sobre os equipamentos. O utilizador pode consultar a lista de equipamentos associados a um estabelecimento através do separador Equipamentos ([](#figEqpEstabelecimento))

![figEqpEstabelecimento](img/pages/12_1.jpg)

<p class="caption" id="figEqpEstabelecimento"> Equipamentos de um estabelecimento</p>

<p id="criaEquipamento"></p>

## 12.1. Criar Equipamento
Para criar um novo equipamento, o utilizador deve clicar em **CRIAR** na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)). De seguida, será encaminhado para a página de criação de equipamento, onde deverá preencher os campos obrigatórios do painel Identificação para poder efetuar o registo do equipamento.



### 12.1.1. Identificação

|    | Campos Obrigatórios da ([](#figCriarEquipamento))         |      |
|----|----------------------------------------------------|----------|
| a) | Designação                                         |      |
| b) | Número de Série                                    |      |
| c) | Posto de Trabalho (Todos os serviços a que um equipamento se encontra associado devem ser considerados)                           |      |
| d) | Marca                                              |      |
| e) | Modelo                                             |      |
| f) |Se Designação = Acelerador Linear,Angiógrafo,Câmara Gama, Câmara Hiperbárica,RM, RM (Dedicada exclusivamente à Radioterapia,TC ou TC (Dedicada exclusivamente à Radioterapia                           |Característica Técnica| 
| g) | Produção para Exterior?                          | Sim     |


![figCriarEquipamento](img/pages/12_1_1_1.PNG)

<p class="caption" id="figCriarEquipamento"> Criar novo Equipamento - Identificação</p>

Após o registo dos dados deve clicar em **GUARDAR** para gravar o equipamento. Após clicar irá ser notificado com o resultado da operação.

### 12.1.2. Outros painéis

|    | Outros módulos a preencher                 |
|----|--------------------------------------------| 
| a) | Contratação ([](#figContratacao))            |
| b) | Localização/Estado ([](#figLocalizacao))     |
| c) | Manutenção  ([](#figManutencao))
| d) | Atividade   ([](#figAtividade))            |
| e) | Autorização Ministerial / Licença de Instalação ([](#figAutorizacao))|
| f) | Recursos Humanos Afetos ([](#figRhAfetos))|


|    | Campos Obrigatórios do módulo Contratação ([](#figContratacao)) | |
|----|----------------------------------------------------|----------|
| a) | Tipo de Contrato                                   | Aquisição    |
||                                                        | Concessão    |
||                                                        | Locação/Leasing |
||                                                        | Oferta       |
| b) | Data de Início de Funcionamento                     || 
| c) | Se Tipo de Contrato diferente de Concessão         |Nº inventário/ID Equipamento |
| d) | Se Tipo de Contrato= Aquisição (apenas para novas aquisições)| Data de Publicação da abertura de concurso |
| e) | Se Tipo de Contrato= Aquisição                     | Custo Aquisição |
| f) | Se Tipo de Contrato= Aquisição                     | Data de Receção  |

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
| d) | Tipo de Utilização                    	        ||

![figManutencao](img/pages/12_1_2_3.PNG)

<p class="caption" id="figManutencao"> Criar novo Equipamento - Manutenção</p>


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
| d) |  Se Tipo de Manutenção = Preventiva ou Preventiva e Corretiva           	  | Preventiva com Peças|
| e) | Com ampola                              	          | Sim |
|	|        		                         	          | Não |
| f) | Detetores                              	          | Sim |
|	|        		                         	          | Não |
| f) | Custo                             	          	  |  |



![figAtividade](img/pages/12_1_2_4.PNG)

<p class="caption" id="figAtividade"> Criar novo Equipamento - Atividade</p>


|    | Campos Obrigatórios do módulo Autorização Ministeria/ Licença de Instalação ([](#figAutorizacao)) | | |
|----|----------------------------------------------------|----------|--|
| a) | Autorização Ministerial                         	  | Sim||
||                                                   	  | Não||
| b) | Instalação licenciada pela DGS?                    | Sim| Data da Licença |
||                                                   	  | Não||


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

Para o utilizador aceder ao painel *Recursos Humanos Afetos*([](#figRhAfetos)) deverá clicar na tab respectiva, e selecionar o ano pretendido. 
Após preencher os campos em cada painel, o utilizador deve clicar em  **GUARDAR** no painel respectivo, para gravar o equipamento. 
Após clicar irá ser notificado com o resultado da operação.

<p id="alteraEquipamento"></p>

## 12.2. Editar Equipamento

A página de edição de um equipamento está disponível através da consulta de equipamento clicando no botão **EDITAR EQUIPAMENTO**. Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)) o utilizador pode navegar diretamente para a edição após selecionar um equipamento da lista e clicar no botão **ALTERAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [13.1 Criar Equipamento](#criar-equipamento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.
O utilizador pode navegar entre os equipamentos do estabelecimento clicando em **SEQGUINTE** ou **ANTERIOR**.

<p id="consultaEquipamento"></p>

## 12.3. Consultar Equipamento

Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a consulta após selecionar um equipamento da lista e clicar no botão **CONSULTAR**. 

<p id="transfereEquipamento"></p>

## 12.4. Transferir Equipamento

Na página de equipamentos de um estabelecimento([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um equipamento da lista e clicar no botão **TRANSFERIR**.
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

## 12.5. Histórico de Equipamento
A página de histórico de um equipamento pode ser acedida através da página de equipamentos de estabelecimento ([](#figEqpEstabelecimento)) e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico poderá visualizar todas as versões resultantes da edição do equipamento, bem como a identificação dos campos alterados.
