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
Neste separador são feitas ações sobre os estabelecimentos.
O utilizador pode consultar a lista de estabelecimentos associados a uma entidade através do separador **Estabelecimentos** ([](#figEstEntidade)).

![figEstEntidade](img/pages/cap7/7_1.jpg)

<p class="caption" id="figEstEntidade"> Estabelecimentos da Entidade</p>

<p id="criarEstabelecimento"></p>

## 7.1.Criar Estabelecimento

Para criar um novo estabelecimento, o utilizador deve clicar em **CRIAR** na página de estabelecimentos associados a uma entidade  ([](#figEstEntidade)). De seguida, será encaminhado para a página de criação de estabelecimento, onde deverá preencher os campos obrigatórios para poder efetuar o registo do estabelecimento (ver tabela abaixo e [](#figCriarEstabelecimento)).

|    | Campos Obrigatórios para identificação do estabelecimento    |          |
|----|---------------------------------------------------|----------|
| a) | Tipo de Estabelecimento                          |  Hospital | 
||                                                      |  Unidade funcional| 
||                                                      |  Consultório| 
||                                                      |  Laboratório|
||                                                      |  Hospital Militar| 
||                                                      |  Posto Empresa|
||                                                      |  SUB| 
| b) | Tipo de Unidade Funcional (se Tipo de Estabelecimento = Unidade Funcional)                                                                                                                                                    |UCC| 
||                                                      |  UCSP| 
||                                                      |  USF| 
| c) |Estado                                            | Ativa|
||                                                      | Encerrado|
||                                                      | Suspenso|
||                                                      | Transferido|
||                                                      | Pendente|
||                                                      | Visualizado|
| d) | Nome/Designação social                       | |
| e) | Morada                                       | |
| f) | Código-Postal                                | |
| g) | Distrito                                     | |
| h) | Concelho                                     | |
| i) | Freguesia                                    | |
| j) | Telefone                                     | |
| k) | Email                                          | |
| l) | Existe Equipamento Médico Pesado?                                         | Sim |
||                                                      | Não ||

Na tabela abaixo e na [](#figPainelGabCidadao) são mostrados os campos de preenchimento obrigatório referentes ao painel do gabinete do cidadão. 

|    | Campos Obrigatórios do painel do gabinete do cidadão |      |
|----|---------------------------------------------------|----------|
| a) |E-mail do Gabinete Cidadão ||
| b) |Telefone do Gabinete Cidadão ||
| c) |Site Tabela Preços em vigor* ||

\* Preços em vigor dos cuidados a prestar pelo hospital; correspondem aos preços a pagar por um utente independente, sem qualquer sistema de saúde.


![figCriarEstabelecimento](img/pages/cap7/7_1_1_v1.jpg)

<p class="caption" id="figCriarEstabelecimento"> Criar Estabelecimento</p>

![figPainelGabCidadao](img/pages/cap7/7_1_2.jpg)

<p class="caption" id="figPainelGabCidadao"> Painel Gabinete ao cidadão</p>

Após o preenchimento da identificação do estabelecimento, dependendo do tipo deste, será necessário o preenchimento dos campos adicionais.

|  Tipo de Estabelecimento | Campos de preenchimento  | 
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

![figUrgencias](img/pages/cap7/7_1_3.jpg)

<p class="caption" id="figUrgencias"> Estabelecimento do tipo Hospital - Urgências</p>

|    | Campos Obrigatórios –  Especialidade -([](#figEspecialidade))   |      |
|----|--------------------------------------------------------|------|
| a) | 	Especialidades e Exames          | Área |
|| 	                                     | Especialidade|
|| 	                                     | Adultos e/ou Pediátricos|


![figEspecialidade](img/pages/cap7/7_1_4.jpg)

<p class="caption" id="figEspecialidade"> Painel das Especialidades </p>


|    | Campos Obrigatórios – Capacidade - ([](#figCapacidade))    |      |
|----|--------------------------------------------------------|------|
| a) | 	Ano                       								| |
| b) | 	Capacidade                       |Tipo Área Capacidade |
||                                       |  Área Capacidade*| 
||                                       |  Tipo Capacidade| 
||                                       |  Capacidade Lotação| 


 \* No Painel das Capacidades ([](#figCapacidade)) ao ser selecionado a Área Capacidade é visível um texto descritivo ( aplicáveis só a algumas áreas). O Internamento Total (lotação) inclui o internamento normal e os internamentos especiais (s/Berçário, Quartos Particulares, Lar Doentes e Cuidados Paliativos Rede).

![figCapacidade](img/pages/cap7/7_1_5.JPG)

<p class="caption" id="figCapacidade"> Painel das Capacidades com a Descrição e o Internamento Total </p>

O estabelecimento pode ter ainda atividades associadas. Estas são mostradas no separador Atividades ([](#figAtividades)). Salienta-se que esta informação apenas pode ser consultada.

![figAtividades](img/pages/cap7/7_1_1_5.jpg)

<p class="caption" id="figAtividades"> Painel das Atividades </p>

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


![figPostosColheita](img/pages/cap7/7_1_6.jpg)

<p class="caption" id="figPostosColheita"> Estabelecimento do tipo Unidade Funcional</p>
 
 
|    | Campos Obrigatórios – Postos de Colheita -  ([](#figUnidadeFunc))  | 
|----|--------------------------------------------------------|
| a) | Nome                                                   |
| b) | Morada                                                 |
| c) | Código-Postal                                          |
| d) | Distrito                                               |
| e) | Concelho                                               |
| f) | Freguesia                                              |

![figUnidadeFunc](img/pages/cap7/7_1_7.jpg)

<p class="caption" id="figUnidadeFunc"> Estabelecimento do tipo Laboratório - Postos de Colheita</p>

Após o registo dos dados em cada bloco de informação, deve clicar em **GUARDAR** para gravar os dados. Após clicar irá ser notificado com o resultado da operação.

<p id="alteraEstabelecimento"></p>

## 7.2. Editar Estabelecimento

<!-- A página de edição de um estabelecimento está disponível através da consulta do estabelecimento clicando no botão **EDITAR ESTABELECIMENTO**. -->

Se o utilizador tiver acesso à página de estabelecimentos associados a uma entidade ([](#figEstEntidade)) pode navegar diretamente para a edição após selecionar um estabelecimento da lista de resultados e clicar no botão **EDITAR**.


A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [7.1 Criar Estabelecimento](#criar-estabelecimento).

No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

<p id="consultarEstabelecimento"></p>

## 7.3. Consultar Estabelecimento

A consulta dos dados referentes a um estabelecimento é possível se o utilizador tiver acesso à página de estabelecimentos associados a uma entidade ([](#figEstEntidade)) o utilizador pode navegar diretamente para a consulta após selecionar um estabelecimento da lista de resultados e clicar no botão **CONSULTAR**. 

<p id="transfereEstabelecimento"></p>

## 7.4. Transferir Estabelecimento 
Na página de estabelecimentos associados a uma entidade ([](#figEstEntidade)), o utilizador pode navegar diretamente para a página de transferência de estabelecimento após selecionar um estabelecimento da lista e clicar no botão **TRANSFERIR**.
Para poder transferir o estabelecimento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.
Após clicar no botão, surge um alerta que confirma se o utilizador pretende transferir o estabelecimento. 
Se o utilizador confirmar irá ser notificado com o resultado da operação.

|    | Campos Obrigatórios para transferir estabelecimento – ([](#figTransfEstabelecimento))  | 
|----|--------------------------------------------------------|
| a) | Entidade destino                                       |

![figTransfEstabelecimento](img/pages/cap7/7_4_1_v1.jpg)

<p class="caption" id="figTransfEstabelecimento"> Transferir Estabelecimento</p>

<p id="encerrarEstabelecimento"></p>

## 7.5. Encerrar Estabelecimento 
Para encerrar um estabelecimento, depois de o selecionar na lista de resultados, deve clicar no botão **ENCERRAR** ([](#figEstEntidade)).
Uma vez na página de **Encerrar Estabelecimento** ([](#figEncerraEstabelecimento)), deve clicar no botão “Encerrar”. Após clicar no botão, surge alerta que confirma se o utilizador pretende encerrar o estabelecimento. Se o utilizador confirmar irá ser notificado com o resultado da operação.

![figEncerraEstabelecimento](img/pages/cap7/7_5_1.jpg)

<p class="caption" id="figEncerraEstabelecimento"> Encerrar Estabelecimento</p>

<p id="historicoEstabelecimento"></p>

## 7.6. Histórico Estabelecimento 

A página de histórico de um estabelecimento pode ser acedida através da página de estabelecimentos associados a uma entidade ([](#figEstEntidade)) , selecionando uma entidade da lista de resultados e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico ([](#figHistoricoEstabelecimento)), o utilizador poderá visualizar todas as versões resultantes da edição do estabelecimento, a data em que as alterações foram efetuadas, o utilizador que as realizou, bem como a identificação dos campos alterados.
![figHistoricoEstabelecimento](img/pages/cap7/7_6_1.jpg)

<p class="caption" id="figHistoricoEstabelecimento"> Histórico de Estabelecimento </p>
