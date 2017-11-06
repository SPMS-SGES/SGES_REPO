---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

<p id="estabelecimentos"></p>
# 7.Estabelecimentos
Neste módulo são feitas ações sobre os estabelecimentos.
O utilizador pode consultar a lista de estabelecimentos associados a uma entidade através do separador **Estabelecimentos** ([](#figEstEntidade)).

![figEstEntidade](img/pages/7_1.jpg)

<p class="caption" id="figEstEntidade"> Estabelecimentos da Entidade</p>

<p id="criarEstabelecimento"></p>

## 7.1.Criar Estabelecimento

Para criar um novo estabelecimento, o utilizador deve clicar em **CRIAR** na página de estabelecimentos associados a uma entidade  ([](#figEstEntidade)). De seguida, será encaminhado para a página de criação de estabelecimento, onde deverá preencher os campos obrigatórios para poder efetuar o registo do estabelecimento (ver tabela abaixo e [](#figCriarEstabelecimento)).

|    | Campos Obrigatórios para criar estabelecimento    |          |
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

Na tabela abaixo e na [](#figPainelGabCidadao) são mostrados os campos de preenchimento obrigatório referentes ao painel do gabinete do cidadão. 

|    | Campos Obrigatórios do painel do gabinete do cidadão |      |
|----|---------------------------------------------------|----------|
| a) |E-mail do Gabinete Cidadão ||
| b) |Telefone do Gabinete Cidadão ||
| c) |Site Tabela Preços em vigor (É uma tabela de preços em vigor para os cuidados a prestar pelo hospital. (São os preços a pagar por um utente independente, sem qualquer sistema de saúde)||


![figCriarEstabelecimento](img/pages/7_1_1.jpg)

<p class="caption" id="figCriarEstabelecimento"> Criar Estabelecimento</p>

![figPainelGabCidadao](img/pages/7_1_2.jpg)

<p class="caption" id="figPainelGabCidadao"> Painel Gabinete ao cidadão</p>

Após o preenchimento da identificação do estabelecimento, dependendo do tipo deste, será necessário o preenchimento dos módulos adicionais.

|  Tipo de Estabelecimento | Módulos de preenchimento  | 
|------------------------------------|
| **Hospital**          |Urgências ([](#figUrgencias)) |
|                       |Especialidade ([](#figEspecialidade)) |
|                       |Capacidade ([](#figCapacidade)) - Se Entidade Pública |
| **Consultório**       |Especialidade ([](#figEspecialidade)) |
| **Laboratório**        |Especialidade ([](#figEspecialidade)) |
|                       |Postos de colheita ([](#figPostosColheita))|
| **Unidade Funcional** |Unidade Funcional ([](#figUnidadeFunc)) |



|    | Campos Obrigatórios – Urgências - ([](#figUrgencias))    |      |
|----|--------------------------------------------------------|------|
| a) | Urgências                         |  Sim| 
| |                                       |  Não| 
| b) | 	Se urgências                     |  Tipo de urgência| 
||                                       |Classificação do Serviço de Urgência| 

|    | Campos Obrigatórios –  Especialidade -([](#figEspecialidade))   |      |
|----|--------------------------------------------------------|------|
| a) | 	Especialidades e Exames          | Área |
|| 	                                     | Especialidade|
|| 	                                     | Adultos e/ou Pediátricos|



|    | Campos Obrigatórios – Capacidade - ([](#figCapacidade))    |      |
|----|--------------------------------------------------------|------|
| a) | 	Ano                       								| |
| b) | 	Capacidade                       |Tipo Área Capacidade |
||                                       |  Área Capacidade| 
||                                       |  Tipo Capacidade| 
||                                       |  Capacidade Lotação| 


![figUrgencias](img/pages/7_1_3.jpg)

<p class="caption" id="figUrgencias"> Estabelecimento do tipo Hospital - Urgências</p>


![figEspecialidade](img/pages/7_1_4.jpg)

<p class="caption" id="figEspecialidade"> Painel das Especialidades </p>


![figCapacidade](img/pages/7_1_5.jpg)

<p class="caption" id="figCapacidade"> Painel das Capacidades </p>

Os quartos de isolamento podem ser de três tipos diferentes:

   * Quarto de Isolamento de GRAU III – Quarto individual fechado, bem ventilado;

   * Quarto de Isolamento de GRAU IV  –  Quarto individual fechado, bem ventilado, com desinfeção da ventilação e pressão negativa;

   * Quarto de Isolamento de GRAU VI  –  Quarto individual com porta dupla e pressão negativa. 

As próximas tabelas e imagens mostram os campos de preenchimento obrigatório relativos a unidades funcionais e postos de colheita.

|    | Campos Obrigatórios – Unidade Funcional - ([](#figPostosColheita))  | |
|----|--------------------------------------------------------|------|
| a) | Centro de Saúde                                        | | 
| b) |População Abrangida                          | Distrito |
||                                                 | Concelho | 
||                                                 | Freguesias| 
| c) | Se Unidade Funcional = USF, UCSP            | Nº de Gabinetes Médicos| 
||                                                 | Nº de Gabinetes Tratamento| 
| d) | Se Unidade Funcional = USF                  | Modelo USF| 


![figPostosColheita](img/pages/7_1_6.jpg)

<p class="caption" id="figPostosColheita"> Estabelecimento do tipo Unidade Funcional</p>
 
 
|    | Campos Obrigatórios – Postos de Colheita -  ([](#figUnidadeFunc))  | 
|----|--------------------------------------------------------|
| a) | Nome                                                   |
| b) | Morada                                                 |
| c) | Código-Postal                                          |
| d) | Distrito                                               |
| e) | Concelho                                               |
| f) | Freguesia                                              |

![figUnidadeFunc](img/pages/7_1_7.jpg)

<p class="caption" id="figUnidadeFunc"> Estabelecimento do tipo Laboratório - Postos de Colheita</p>

Após o registo dos dados em cada módulo, deve clicar em **GUARDAR** para gravar o estabelecimento. Após clicar irá ser notificado com o resultado da operação.

<p id="alteraEstabelecimento"></p>

## 7.2. Editar Estabelecimento

A página de edição de um estabelecimento está disponível através consulta da página de estabelecimentos associados a uma entidade ([](#figEstEntidade)). O utilizador pode navegar diretamente para a edição após selecionar um estabelecimento da lista de resultados e clicar no botão **EDITAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [7.1 Criar Estabelecimento](#criar-estabelecimento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

<p id="consultarEstabelecimento"></p>

## 7.3. Consultar Estabelecimento

A página de consulta de um estabelecimento está disponível através consulta da página de estabelecimentos associados a uma entidade ([](#figEstEntidade)). O utilizador pode navegar diretamente para a edição após selecionar um estabelecimento da lista de resultados e clicar no botão **CONSULTAR**. 

<p id="transfereEstabelecimento"></p>

## 7.4. Transferir Estabelecimento 
Na página de estabelecimentos associados a uma entidade ([](#figEstEntidade)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um estabelecimento da lista e clicar no botão **TRANSFERIR**.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.
Após clicar no botão, surge um alerta que confirma se o utilizador pretende encerrar o estabelecimento. 
Se o utilizador confirmar irá ser notificado com o resultado da operação.

|    | Campos Obrigatórios – ([](#figTransfEstabelecimento))  | 
|----|--------------------------------------------------------|
| a) | Entidade destino                                       |

![figTransfEstabelecimento](img/pages/7_4_1.jpg)

<p class="caption" id="figTransfEstabelecimento"> Transferir Estabelecimento</p>

<p id="encerrarEstabelecimento"></p>

## 7.5. Encerrar Estabelecimento 
Para encerrar um estabelecimento tem de pesquisar pelo mesmo ([](#figPesquisaEstabelecimento)) e depois de o selecionar na lista de resultados deve clicar no botão **ENCERRAR**.
Uma vez na página de **Encerrar Estabelecimento** ([](#figEncerraEstabelecimento)) deve preencher os campos *Mês*, *Ano*, *Motivo* e, se for o caso, *Observação* e depois clicar no botão “Encerrar”. Após clicar no botão, surge alerta que confirma se o utilizador pretende encerrar o estabelecimento. Se o utilizador confirmar irá ser notificado com o resultado da operação.

![figEncerraEstabelecimento](img/pages/7_5_1.jpg)

<p class="caption" id="figEncerraEstabelecimento"> Encerrar Estabelecimento</p>

<p id="historicoEstabelecimento"></p>

## 7.6. Histórico Estabelecimento 

A página de histórico de um estabelecimento pode ser acedida através da pesquisa de estabelecimentos ([](#figPesquisaEstabelecimento))  ou através da página de estabelecimentos associados a uma entidade ([](#figEstEntidade)) , selecionando uma entidade da lista de resultados e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico ([](#figHistoricoEstabelecimento)), o utilizador  pode visualizar todas as versões resultantes da edição do estabelecimento, bem como a identificação dos campos alterados.

![figHistoricoEstabelecimento](img/pages/7_6_1.jpg)

<p class="caption" id="figHistoricoEstabelecimento"> Histórico de Estabelecimento </p>
