---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---


# 7.Estabelecimentos
É neste módulo que são feitas ações sobre os estabelecimentos.
O utilizador pode consultar a lista de estabelecimentos associados a uma entidade através do separador **Estabelecimentos** ([Fig. 14](#fig14)).

![img/pages/fig14](img/pages/7_1.jpg)

<p class="caption" id="fig14"> Fig. 14 -Estabelecimentos da Entidade</p>

## 7.1.Criar Estabelecimento

Para criar um novo estabelecimento, o utilizador deve clicar em **CRIAR** na página de estabelecimentos associados a uma entidade  ([Fig. 14](#fig14)). De seguida, será encaminhado para a página de criação de estabelecimento, onde deverá preencher os campos obrigatórios para poder efetuar o registo do estabelecimento.

|    | Campos Obrigatórios da ([Fig. 15](#fig15))         |      |
|----|---------------------------------------------------|----------|
| a) | Tipo de Estabelecimento                          |  Hospital | 
||                                                      |  Unidade funcional| 
||                                                      |  Consultório| 
||                                                      |  Laboratório| 
| b) |Tipo de Unidade Funcional (se Tipo de Estabelecimento = Unidade Funcional)                                                                                                                                                    |UCC| 
||                                                      |  UCSP| 
||                                                      |  USF| 
||                                                      |  USP| 
||                                                      |  URAP| 
| c) |Estado                                            | Ativa|
||                                                      | Encerrado|
||                                                      | Suspenso|
||                                                      | Transferido|
| d) |Nome/Designação social                       | |
| e) |Morada                                       | |
| f) |Código-Postal                                | |
| g) |Distrito                                     | |
| h) |Concelho                                     | |
| i) |Freguesia                                    | |
| j) |Telefone                                     | |
| k) |Fax                                          | |
| l) |Email                                        | |
| m) |Site                                         | |

|    | Campos Obrigatórios do painel do gabinete do cidadão, se aplicável([Fig. 15.1](#fig15.1))  |      |
|----|---------------------------------------------------|----------|
| m) |E-mail do Gabinete Cidadão (só se Balcão de Apoio ao Cidadão aplicável )||
| n) |Telefone do Gabinete Cidadão (só se Balcão de Apoio ao Cidadão aplicável) ||
| m) |Site de Preços do Gabinete Cidadão (só se Balcão de Apoio ao Cidadão aplicável )||


![img/pages/fig15](img/pages/7_1_1.jpg)

<p class="caption" id="fig15"> Fig. 15 -Criar Estabelecimento</p>

![img/pages/fig15_1](img/pages/7_1_2.jpg)

<p class="caption" id="fig15_1"> Fig. 15.1 - Painel Gabinete ao cidadão</p>

Após o preenchimento da identificação do estabelecimento, dependendo do tipo deste, será necessário o preenchimento dos módulos adicionais.

|  Tipo de Estabelecimento | Módulos de preenchimento  | 
|------------------------------------|
| **Hospital**          |Urgências ([Fig. 16.1](#fig16_1)) |
|                       |Especialidade ([Fig. 16.2](#fig16_2)) |
|                       |Capacidade ([Fig. 16.3](#fig16_3)) - Se Entidade Pública |
| **Consultório**       |Especialidade ([Fig. 16.2](#fig16_2)) |
| **Laboratório**       |Especialidade ([Fig. 16.2](#fig16_2)) |
|                       |Postos de colheita ([Fig. 17](#fig17))|
| **Unidade Funcional** |Unidade Funcional ([Fig. 18](#fig18)) |



|    | Campos Obrigatórios – Urgências - ([Fig. 16.1](#fig16_1))    |      |
|----|--------------------------------------------------------|------|
| a) | Urgências                         |  Sim| 
| |                                       |  Não| 
| b) | 	Se urgências                     |  Tipo de urgência| 
||                                       |Classificação do Serviço de Urgência| 

|    | Campos Obrigatórios –  Especialidade -([Fig. 16.2](#fig16_2))   |      |
|----|--------------------------------------------------------|------|
| a) | 	Especialidades e Exames          | Área |
|| 	                                     | Especialidade|
|| 	                                     | Adultos e/ou Pediátricos|



|    | Campos Obrigatórios – Capacidade - ([Fig. 16.3](#fig16_3))    |      |
|----|--------------------------------------------------------|------|
| a) | 	Ano                       								| |
| b) | 	Capacidade                       |Tipo Área Capacidade |
||                                       |  Área Capacidade| 
||                                       |  Tipo Capacidade| 
||                                       |  Capacidade Lotação| 


![img/pages/fig16_1](img/pages/7_1_3.jpg)

<p class="caption" id="fig16_1"> Fig. 16.1 -Estabelecimento do tipo Hospital - Urgências</p>


![img/pages/fig16_2](img/pages/7_1_4.jpg)

<p class="caption" id="fig16_2"> Fig. 16.2 - Painel das Especialidades </p>


![img/pages/fig16_3](img/pages/7_1_5.jpg)

<p class="caption" id="fig16_3"> Fig. 16.3 - Painel das Capacidades </p>


|    | Campos Obrigatórios – Unidade Funcional - ([Fig. 17](#fig17))  | |
|----|--------------------------------------------------------|------|
| a) | Centro de Saúde                                        | | 
| b) |População Abrangida                          | Distrito |
||                                                 | Concelho | 
||                                                 | Freguesias| 
| c) | Se Unidade Funcional = USF, UCSP            | Nº de Gabinetes Médicos| 
||                                                 | Nº de Gabinetes Tratamento| 
| d) | Se Unidade Funcional = USF                  | Modelo USF| 


![img/pages/fig17](img/pages/7_1_6.jpg)

<p class="caption" id="fig17"> Fig. 17 -Estabelecimento do tipo Unidade Funcional</p>
 
 
|    | Campos Obrigatórios – Postos de Colheita -  ([Fig. 18](#fig18))  | 
|----|--------------------------------------------------------|
| a) | Nome                                                   |
| b) | Morada                                                 |
| c) | Código-Postal                                          |
| d) | Distrito                                               |
| e) | Concelho                                               |
| f) | Freguesia                                              |

![img/pages/fig18](img/pages/7_1_7.jpg)

<p class="caption" id="fig18"> Fig. 18 -Estab elecimento do tipo Laboratório - Postos de Colheita</p>

Após o registo dos dados em cada módulo, deve clicar em **GUARDAR** para gravar o estabelecimento. Após clicar irá ser notificado com o resultado da operação.

## 7.2. Editar Estabelecimento

A página de edição de um estabelecimento está disponível através da consulta de estabelecimento clicando no botão **EDITAR ESTABELECIMENTO**. Se tiver acesso à pesquisa de estabelecimentos ([Fig. 8](#fig8)) ou à página de estabelecimentos associados a uma entidade ([Fig. 14](#fig14)) pode navegar diretamente para a edição após selecionar um estabelecimento da lista de resultados e clicar no botão **EDITAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [7.1 Criar Estabelecimento](#criar-estabelecimento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

## 7.3. Consultar Estabelecimento
Se o utilizador tiver acesso à pesquisa de estabelecimentos ([Fig. 8](#fig8)) ou à página de estabelecimentos associados a uma entidade ([Fig. 14](#fig14)) pode navegar diretamente para a consulta após selecionar um estabelecimento da lista de resultados e clicar no botão **CONSULTAR**. 

## 7.4. Transferir Estabelecimento 
Na página de estabelecimentos associados a uma entidade ([Fig. 14](#fig14)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um estabelecimento da lista e clicar no botão **TRANSFERIR**.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.

|    | Campos Obrigatórios – ([Fig. 19](#fig19))  | 
|----|--------------------------------------------------------|
| a) | Entidade destino                                       |

![img/pages/fig19](img/pages/7_4_1.jpg)

<p class="caption" id="fig19"> Fig. 19 - Transferir Estabelecimento</p>

Após clicar no botão surge alerta a questionar se pretende mesmo encerrar o estabelecimento, se confirmar irá ser notificado com o resultado da operação.

## 7.5. Encerrar Estabelecimento 
Para encerrar um estabelecimento tem de pesquisar pelo mesmo ([Fig. 8](#fig8)) e depois de o selecionar na lista de resultados deve clicar no botão **ENCERRAR**.
Uma vez na página de **Encerrar Estabelecimento** ([Fig. 20](#fig20)) deve preencher os campos *Mês*, *Ano*, *Motivo*, *Observação* se for necessário e depois clicar no botão “Encerrar”. Após clicar no botão surge alerta a questionar se pretende mesmo encerrar o estabelecimento, se confirmar irá ser notificado com o resultado da operação.

![img/pages/fig20](img/pages/7_5_1.jpg)

<p class="caption" id="fig20"> Fig. 20 -Encerrar Estabelecimento</p>

## 7.6. Histórico Estabelecimento 

A página de histórico de um estabelecimento pode ser acedida através da pesquisa de estabelecimentos ([Fig. 8](#fig8))  ou através da página de estabelecimentos associados a uma entidade ([Fig. 14](#fig14)) , selecionando uma entidade da lista de resultados e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico ([Fig. 21](#fig21))  poderá visualizar todas as versões resultantes da edição do estabelecimento, bem como a identificação dos campos alterados.

![img/pages/fig20](img/pages/7_6_1.jpg)

<p class="caption" id="fig21"> Fig. 21 -Histórico de Estabelecimento </p>
