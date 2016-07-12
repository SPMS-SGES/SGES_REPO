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

## 12.1. Criar Equipamento
Para criar um novo equipamento, o utilizador deve clicar em **CRIAR** na página de equipamentos de um estabelecimento ([Fig. 29](#fig29)). De seguida, será encaminhado para a página de criação de equipamento, onde deverá preencher os campos obrigatórios do painel Identificação para poder efetuar o registo do equipamento.

### 12.1.1. Identificação

|    | Campos Obrigatórios da ([Fig. 30](#fig30))         |      |
|----|----------------------------------------------------|----------|
| a) | Designação                                         |      |
| b) | Número de Série                                    |      |
| c) | Posto de Trabalho                                  |      |
| f) | Marca                                              |      |
| e) | Modelo                                             |      |
| f) |Se Designação =Acelerador Linear,Angiógrafo,Câmara Gama, Câmara Hiperbárica,RM, RM (Dedicada exclusivamente à Radioterapia,TC ou TC (Dedicada exclusivamente à Radioterapia                           |Característica Técnica| 
| g) | Produção para Exterior?                          | Sim     |


![img/pages/fig30](img/pages/12_1_1_1.jpg)

<p class="caption" id="fig30"> Fig. 30 -Criar novo Equipamento - Identificação</p>

Após o registo dos dados deve clicar em **GUARDAR** para gravar o equipamento. Após clicar irá ser notificado com o resultado da operação.

### 12.1.2. Outros painéis

|    | Outros módulos a preencher                 |
|----|--------------------------------------------|
| a) | Contratação ([Fig. 31](#fig31))            |
| b) | Localização/Estado ([Fig. 32](#fig32))     |
| c) | Atividade   ([Fig. 33](#fig33))            |
| d) |Autorização Ministerial / Licença de Instalação ([Fig. 34](#fig34))|
| e) | Manutenção  ([Fig. 35](#fig35))            |
| f) | Recursos Humanos Afetos ([Fig. 36](#fig36))|


|    | Campos Obrigatórios do módulo Contratação ([Fig. 31](#fig31)) | |
|----|----------------------------------------------------|----------|
| a) | Tipo de Contrato                                   | Aquisição    |
||                                                        | Concessão    |
||                                                        | Locação/Leasing |
||                                                        | Oferta       |
| b) | Data de Início de Funcionamento                     || 
| c) | Se Tipo de Contrato diferente de Concessão         |Nº inventário/ID Equipamento |
| d) | Se Tipo de Contrato= Aquisição                     | Data de Publicação da abertura de concurso|
| e) | Se Tipo de Contrato= Aquisição                     | Custo Aquisição |
| f) | Se Tipo de Contrato= Aquisição                     | Data de Receção  |

![img/pages/fig31](img/pages/12_1_2_1.jpg)

<p class="caption" id="fig31"> Fig. 31 -Criar novo Equipamento - Contratação</p>

|    | Campos Obrigatórios do módulo Localização/Estado ([Fig. 32](#fig32)) | | |
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

![img/pages/fig32](img/pages/12_1_2_2.jpg)

<p class="caption" id="fig32"> Fig. 32 -Criar novo Equipamento - Localização/Estado</p>

|    | Campos Obrigatórios do módulo Atividade ([Fig. 33](#fig33)) | | 
|----|----------------------------------------------------|----------|
| a) | Tipo Atividade                               	| Partilhada (Programada/Urgência) |
||                                                      | Programada    |
||                                                      | Urgência ||
||                                                      | Parado       |
| b) | Se Estado diferente urgência				        | Carga Semanal| 
| c) | Se Estado diferente urgência				        | Nº dias por semana| 
| d) | Tipo de Utilização                    	        ||

![img/pages/fig33](img/pages/12_1_2_2.jpg)

<p class="caption" id="fig33"> Fig. 33 -Criar novo Equipamento - Atividade</p>


|    | Campos Obrigatórios do módulo Autorização Ministeria/ Licença de Instalação ([Fig. 34](#fig34)) | | |
|----|----------------------------------------------------|----------|--|
| a) | Autorização Ministerial                         	  | Sim||
||                                                   	  | Não||
| b) | Instalação licenciada pela DGS?                    | Sim| Data da Licença |
||                                                   	  | Não||


![img/pages/fig34](img/pages/12_1_2_3.jpg)

<p class="caption" id="fig34"> Fig. 34 -Criar novo Equipamento - Autorização Ministeria/ Licença de Instalação</p>

|    | Campos Obrigatórios do módulo Manutenção ([Fig. 35](#fig35)) | | 
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

![img/pages/fig35](img/pages/12_1_2_4.jpg)

<p class="caption" id="fig35"> Fig. 35 -Criar novo Equipamento - Manutenção</p>

|    | Campos Obrigatórios do módulo Recursos Humanos Afetos ([Fig. 36](#fig36)) | | 
|----|----------------------------------------------------|----------|
| a) | Ano               			                	  | |
| b) | Grupo Profissional                         	      | |
| c) | Área Afetação   		                           	  | |
| d) | ECTS 		   		                           	  | |


![img/pages/fig36](img/pages/12_1_2_5.jpg)

<p class="caption" id="fig36"> Fig. 36 -Criar novo Equipamento - Recursos Humanos Afetos</p>

Para o utilizador aceder ao painel *Manutenção* ([Fig. 35](#fig35)) e *Recursos Humanos Afetos*([Fig. 36](#fig36)) deverá clicar na tab respectiva, e selecionar o ano pretendido. 
Após preencher os campos em cada painel, o utilizador deve clicar em  **GUARDAR** no painel respectivo, para gravar o equipamento. 
Após clicar irá ser notificado com o resultado da operação.


## 12.2. Editar Equipamento

A página de edição de um equipamento está disponível através da consulta de equipamento clicando no botão **EDITAR EQUIPAMENTO**. Na página de equipamentos de um estabelecimento ([Fig. 29](#fig29)) o utilizador pode navegar diretamente para a edição após selecionar um equipamento da lista e clicar no botão **ALTERAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [13.1 Criar Equipamento](#criar-equipamento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.
O utilizador pode navegar entre os equipamentos do estabelecimento clicando em **SEQGUINTE** ou **ANTERIOR**.

## 12.3. Consultar Equipamento

Na página de equipamentos de um estabelecimento ([Fig. 29](#fig29)), o utilizador pode navegar diretamente para a consulta após selecionar um equipamento da lista e clicar no botão **CONSULTAR**. 

## 12.4. Transferir Equipamento

Na página de equipamentos de um estabelecimento([Fig. 29](#fig29)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um equipamento da lista e clicar no botão **TRANSFERIR**.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.

|    | Campos Obrigatórios da ([Fig. 37](#fig37))         |
|----|----------------------------------------------------|
| a) | Data de Fim                                        | 
| b) | Motivo                                             | 
| c) | Entidade de Destino                                | 
| d) | Estabelecimento de Destino                         | 


![img/pages/fig37](img/pages/12_4_1.jpg)

<p class="caption" id="fig37"> Fig. 37 -Transferir Equipamento</p>

## 12.5. Histórico de Equipamento
A página de histórico de um equipamento pode ser acedida através da página de equipamentos de estabelecimento ([Fig. 29](#fig29)) e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico poderá visualizar todas as versões resultantes da edição do equipamento, bem como a identificação dos campos alterados.