---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

# 14. Instalações

É neste módulo que serão feitas ações sobre as instalações.
O utilizador pode consultar as instalações de um estabelecimento no separador “Instalações” ([](#figEstabeSInst)) e ([](#fig39)), através do ponto [7.3 Consultar Estabelecimento](#consultar-estabelecimento), ou selecionando um estabelecimento e clicando em **Instalações** ([](#fig39_1)) na página de consulta de estabelecimentos existentes numa entidade, através do ponto [7. Estabelecimentos](#estabelecimentos). É possível, ainda, aceder às instalações de um estabelecimento através do sub-menu Instalações [](#figura_menu_ADMIN_entidade).

![figEstabeSInst](img/pages/38.JPG)

<p class="caption" id="figEstabeSInst"> Exemplo de Estabelecimento sem Instalações</p>

![fig39](img/pages/39.JPG)

<p class="caption" id="fig39"> Exemplo de Estabelecimento com Instalações</p>

## 14.1. Criar Instalações

Caso ainda não exista informação acerca das instalações de um estabelecimento, o utilizador pode criar instalações.
Para criar instalações, o utilizador deve clicar em **CRIAR INSTALAÇÃO** na página de instalações de estabelecimento ([](#figEstabeSInst)). De seguida, será encaminhado para a página de criação de instalações, onde deverá preencher os campos obrigatórios para poder efetuar o registo das instalações.
Para o Registo de Instalações será necessário primeiro submeter os campos da Caracterização Geral do(s) edifício(s), sem estes submetidos não é possível preencher outros campos.

### 14.1.1 Caracterização

Para poder criar a instalação o utilizador deve preencher, pelo menos, os campos obrigatórios da *Caracterização Geral* e clicar em **SUBMETER**;


|    | Campos Obrigatórios – Caracterização Geral - ([](#fig40))  |   | | |
|----|----------------------------------------------------------------|----|-|-|
| 1. Se estabelecimento tem vários edifícios  = Sim e se edifícios que compõem o estabelecimento localizados no mesmo terreno?= Sim|
|a)| Propriedade do Terreno  |Estado  | | |
| |                       |Privado com cedência de direito de superfície|||
| |                       |SCM|| |
|b)| Nome edifício ||||
|c) | Propriedade do(s) Edifício(s)  |Arrendado| | |
|    |                               |Estado| | |
|    |                               |PPP| | |
|    |                               |SCM| | |
| 2. Se estabelecimento tem vários edifícios  = Sim e se edifícios que compõem o estabelecimento localizados no mesmo terreno?= Não|
|a)| Nome edifício ||||
|b)| Propriedade do Terreno  |Estado  | | |
| |                          |Privado com cedência de direito de superfície|||
| |                          |SCM|| |
|c) | Propriedade do(s) Edifício(s)  |Arrendado| | |
|    |                               |Estado| | |
|    |                               |PPP| | |
|    |                               |SCM| | |
|d)| Se mesma morada que o estabelecimento = Não |Morada| | |
|    |                                           |Código Postal| | |
|    |                                           |Concelho| | |
|    |                                           |Freguesia| | |
| 3. Se estabelecimento tem vários edifícios  = Não|
|a)| Nome edifício ||||
|b)| Propriedade do Terreno  |Estado  | | |
| |                          |Privado com cedência de direito de superfície|||
| |                          |SCM|| |
|c) | Propriedade do(s) Edifício(s)  |Arrendado| | |
|    |                               |Estado| | |
|    |                               |PPP| | |
|    |                               |SCM| | |
|d)| Se mesma morada que o estabelecimento = Não |Morada| | |
|    |                                           |Código Postal| | |
|    |                                           |Concelho| | |
|    |                                           |Freguesia| | |
___________________________________________________________________________                                                                                                                                      
| f) | Edifícios construídos na mesma fase? |Sim|Número de fases de construção=1||
||                                          |Não|Quantas fases de construção existiram?||
| g) | Heliporto?                           |Sim|Heliporto Certificado?| Sim|
||||                                                                   | Não|
||||                                             Heliporto Operacional?| Sim|
||||                                                                   | Não|
||                                          |Não|||

![fig40](img/pages/40.JPG)

<p class="caption" id="fig40"> Criar Instalações – Caracterização Geral</p>

Pode inserir informação acerca das áreas e estacionamento, submetendo no final de cada um de ambos os módulos.

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

![fig41](img/pages/41.JPG)

<p class="caption" id="fig41"> Criar Instalação - Áreas Totais e Estacionamento</p>

O separador *Caracterização do Edifício* contém os dados referentes ao(s) edíficio(s) tais como o nome, a área útil do programa funcional, a área útil de projeto, a área bruta, a área de implantação, nº de pisos acima do 0, nº de pisos abaixo do 0 e área de estacionamento construído. caracterização do projeto, como os custos e datas. Estes dados devem ser inseridos para cada fase de construção dos edifícios ([](#fig41_1)).

![fig42](img/pages/42.JPG)

<p class="caption" id="fig42"> Caracterização do Edifício</p>

O separador *Projeto* contem a caracterização do projeto, como os custos e datas. Estes dados devem ser inseridos para cada fase de construção dos edifícios;

![fig43](img/pages/43.JPG)

<p class="caption" id="fig43"> Caracterização do Projeto -  Projeto e Construção</p>

![fig43](img/pages/43_1.JPG)

<p class="caption" id="fig43_1"> Caracterização do Projeto -  Custos </p>

![fig44](img/pages/44.JPG)

<p class="caption" id="fig44"> Caracterização do Projeto - Datas Chaves</p>

O separador *Construção* contém a caracterização da construção, como os seus custos e custos de equipamentos. Estes dados devem ser inseridos para cada fase de construção dos edifícios;

![fig45](img/pages/45.JPG)

<p class="caption" id="fig45"> Caracterização da Construção</p>

### 14.1.2 Detalhe

Contem informação acerca da energia, águas e gases medicinais utilizados na instalação, assim como os seus custos e consumos e a produção de resíduos.


|    | Campos Obrigatórios em Detalhe                            | | |
|----|-----------------------------------------------------------|-|-|
| a) | Energia ([](#fig46))   | Ano de alteração;            | |
| |                                  | Nível da tensão de alimentação – rede elétrica de distribuição pública;  | |
| |                                  | Topologia de alimentação de energia elétrica; | | **lista*?
| |                                  | Potência Contratada; | |
| |                                  | Potência instalada; | |
| |                                  | Nº grupos eletrogéneos; | |
| |                                  | Potência instalada; | |
| |                                  | Sistema de Cogeração; | |
| |                                  | Sistema de Trigeração; | |
| |                                  | Painéis Solares Térmicos; | Sim | Área do campo coletores instalados|
| |                                  | Painéis Fotovoltaicos;  | Sim| Potência instalada em painéis fotovoltaicos|
| |                                  | Aero-geradores;         | Sim | Potência instalada em energia eólica|
| |                                  | Sistemas de aproveitamento da biomassa; | |
| |                                  | Certificação Energética; | Sim | Qual a classificação energética| |A+| | |
| |                                                                                                      |A| | |
| |                                                                                                      |B| | |
| |                                                                                                      |B-| | |
| |                                                                                                      |C| | |
| |                                                                                                      |D| | |
| |                                                                                                      |E| | |
| |                                                                                                      |F| | |
|b)|Água / Águas Residuais  ((#fig47))  | Ano de alteração;            | |
||                                               | Volume de armazenamento total; | |
||                                               | Volume de armazenamento de água para rede de incêndios; | |
||                                               | Furo de captação de águas subterrâneas; | |
||                                               | ETAR / ETARI;| |
|c)| Gases Medicinais  ((#fig48)) | Ano de alteração;            | |
||                                         | Instalação registada no Infarmed como Dispositivo Médico?| |
|d)| Consumos e Custos  ((#fig49)) | Ano                   | |
|  |                                        | Energias Renováveis  |Energia elétrica produzida por painéis fotovoltaicos; |
|  |                                        |                      |Energia elétrica produzida por aerogeradores; |
|  |                                        | Combustíveis      |Consumo nafta; |
|  |                                        |                   |Custo nafta; |
|  |                                        |                   |Consumo gasóleo; |
|  |                                        |                   |Custo gasóleo; |
|  |                                        |                   |Consumo outros; |
|  |                                        |                   |Custo outros; |
|  |                                        | Águas             |Consumo água; |
|  |                                        |                   |Custo água; |
|  |                                        | Gases Medicinais  |Consumo oxigénio; |
|  |                                        |              |Custo oxigénio; |
|  |                                        |              |Consumo azoto; |
|  |                                        |              |Custo azoto; |
|  |                                        |              |Consumo protóxido; |
|  |                                        |              |Custo Protóxido; |
|  |                                        |              |Consumo dióxido de carbono;|
|  |                                        |              |Custo dióxido de carbono; |
|  |                                        |           |Consumo ar comprimido medicinal;|
|  |                                        |           |Custo ar comprimido medicinal;|
|  |                                        |           |Consumo ar comprimido medicinal produzido localmente;|
|  |                                        |           |Custo ar comprimido medicinal produzido localmente;|
|  |                                        |           |Consumo produção em Vácuo;|
|  |                                        |           |Custo produção em Vácuo;|
|  |                                        |     |Consumo exaustão de gases anestésicos;|
|  |                                        |     |Custo exaustão de gases anestésicos;|
|e)| Produção de Resíduos  ([](#fig50)) | Ano                   | |
|  |                                   |Quantidade de Resíduos Produzidos |Grupo I e II; |
|  |                                   |                                  |Grupo III; |
|  |                                   |                                  |Grupo IV; |

![fig46](img/pages/46.JPG)

<p class="caption" id="fig46"> Detalhe Energia</p>

![fig47](img/pages/47.JPG)

<p class="caption" id="fig47"> Detalhe Água/Águas Residuais</p>

![fig48](img/pages/48.JPG)

<p class="caption" id="fig48"> Detalhe Gases Medicinais</p>

![fig49](img/pages/49.JPG)

<p class="caption" id="fig49"> Detalhe Consumos e Custos</p>

![fig50](img/pages/50.JPG)

<p class="caption" id="fig50"> Detalhe Produção de Resíduos</p>

### 15.1.3 Equipamentos Críticos 

Contém a informação de todos os equipamentos críticos para o funcionamento da instalação, como as instalações elétricas, instalações mecânicas e instalações de águas e esgotos.
Após guardar cada registo na tabela, e para não se perder os dados será necessário submeter.

|    | Campos Obrigatórios em Equipamentos Críticos              | |
|----|-----------------------------------------------------------|-|
| a) | Instalações Elétricas ((#fig51)), Instalações Mecânicas ((#fig52)) ,Instalações de Águas e Esgotos ((#fig53)) | Designação do Equipamento;    ||
|| Designação | Central de deteção automático de deteção de incêndios||
||            | Central de deteção de CO| |
||            | Central de deteção de gás combustível||
||            | Central de deteção de intrusão ||
||            | Gerador(es) de emergência ||
||            | Posto de transformação (PT)||
||            | Quadro geral de baixa tensão (QGBT)||
||            | UPS||
||                                                       | Data de entrada;   | |
||                                                       | Data de entrada;   | |
||                                                       | Data de entrada;   | |
||                                                       | Data de entrada;   | |
||                                                       | Data de entrada;   | |
||                                                       | Estado;   | |
||                                                       | Data de Abate (caso Estado=Abatido)   | |

![fig51](img/pages/51.JPG)

<p class="caption" id="fig51"> Equipamentos Críticos - Instalações Elétricas</p>

![fig52](img/pages/52.JPG)

<p class="caption" id="fig52"> Equipamentos Críticos - Instalações Mecânicas</p>

![fig53](img/pages/53.JPG)

<p class="caption" id="fig53"> Equipamentos Críticos - Instalações de Águas e Esgotos</p>

### 15.1.4 Serviços

Contém toda a informação relacionada com os serviços que foram realizados nas instalações do estabelecimento, assim como os seus custos e serviços de apoio.

|    | Campos Obrigatórios em Serviços             | |
|----|-----------------------------------------------------------|-|
|a)  | Serviço de Instalação e Equipamento ([](#fig54)) | Ano de Alteração (Ano em que acontece a alteração, se estiver a criar o ano de alteração deve ser igual ao ano actual) |
|    |                                     | Equipa de Manutenção Permanente;|
|    |                                     | Serviço de Instalações e Equipamentos – Em regime de outsourcing;|
|    |                                     | Número de elementos;|
|    |                                     | Em regime de outsourcing| Sim| Nome da Empresa|
| b) | Custos do Serviço ([](#fig55))| Orçamento anual do serviço de instalações e equipamentos;|
| |                                         | Custos anuais com manutenção corretiva;|
| |                                         | Custos anuais com contratos de manutenção;|
| |                                         |Custos anuais com substituição de equipamento;|
| c) | Serviços de Apoio ([](#fig56))| Esterilização serviço em outsourcing|Sim|Custos anuais com o serviço;|
| |                                         | Existe lavandaria|Sim|Custos anuais com o serviço;|
| |                                         | Resíduos serviço em outsourcing| Sim| Custos anuais com o serviço;|

![fig54](img/pages/54.JPG)

<p class="caption" id="fig54">Fig. 54 -Serviços - Serviço de Instalação e Equipamento</p>

![fig55](img/pages/55.JPG)

<p class="caption" id="fig55"> Serviços - Custos do Serviço</p>

![fig56](img/pages/56.JPG)

<p class="caption" id="fig56"> Serviços - Serviços de Apoio</p>

### 15.1.5 Contratos de Manutenção

Contém a informação dos contratos de manutenção dos equipamentos das instalações.

|    | Campos em Contratos de Manutenção – ([](#fig57)]     | |
|----|-----------------------------------------------------------|-|
|a)  |Possibilidade de filtrar pelo estado do contrato          | |
|b)  | Equipamento com contrato de manutenção | Bomba(s) rede de incêndios |
| |                                           | Motor(es) de cogeração |
| |                                           | Autoclave(s)|
| |                                           | Central de Deteção de CO |
| |                                           | Bomba(s) circuladoras |
| |                                           | Central de deteção de gás combustível |
| |                                           | Chiller de adsorção |
| |                                           | Central deteção intrusão |
| |                                           | Câmara(s) frigorífica(s) |
| |                                           | Gerador(es) de emergência |
| |                                           | UPS |
| |                                           | Posto de transformação (PT) |
| |                                           | Gerador(es) de emergência |
| |                                           | Máquinas de lavar/desinfetar|
| |                                           | Quadro geral de baixa tensão (QGBT) |
| |                                           | Bomba(s) circuladoras |
| |                                           | Unidade de tratamento de ar (UTA) |
| |                                           | Unidade de tratamento de ar novo (UTAN) |
| |                                           | Bomba(s) de vácuo |
| |                                           | Bomba(s) de ar comprimido medicinal |
| |                                           | Central de protóxido |
| |                                           | Central de extração de gases anestésicos |
| |                                           | Ventilador(es) associado(s) ao sistema de incêndios |
| c)| Data Início ||
| d)| Data Fim ||
| e) |      Tipo de Manutenção                | Preventiva |
| |                                           | Corretiva |
| |                                           | Preventiva e Corretiva |
|  d)|Com peças? (Se Tipo de Manutenção = “Preventiva” ou ”Corretiva ou Preventiva”)       |                                               Sim |
| |                                           | Não |
| f) |      Duração do Contrato               | Semestral |
| |                                           | Anual |
| |                                           | Bianual|
| |                                           | Trianual|
| |                                           | Quadrienal|
| |                                           | Quinquenal|
| g) |   Contrato contém SLA – Service Level Agreement?    | Sim|
| |                                                        | Não|
| h) |  Existe equipa de manutenção associada a este contrato?    | Sim| |Números de elementos de equipa|
| |                                                        | Não|

![fig57](img/pages/57.JPG)

<p class="caption" id="fig57"> Contratos de Manutenção </p>


### 15.1.6 Avaliação Pós-Ocupação

Contém a informação acerca da avaliação dos edifícios da instalação; útil instrumento na implementação de melhorias na criação de edifícios no futuro.

|    | Campos em Avaliação Pós-Ocupação – ([](#fig58))    | |
|----|-----------------------------------------------------------|-|
|a)  | Existe APO efetuada?                | Data de realização |
|b)  | Serviços avaliados                						||
|c)  | Upload para repositório?            | Ficheiro           |

![fig58](img/pages/58.JPG)

<p class="caption" id="fig58"> Avaliação Pós-Ocupação </p>

### 15.1.7 Ações ACSS

Contém a informação de todas as ações que a ACSS executou naquelas instalações.

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


![fig59](img/pages/59.JPG)

<p class="caption" id="fig59"> Ações ACSS </p>

## 15.2. Editar Instalações

O utilizador pode navegar para a página de edição de instalação na página de instalações de estabelecimento ([](#fig39)) e clicar no botão **ALTERAR INSTALAÇÃO**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [12.1 Criar Instalações](#criar-instalaes)
No final da edição o utilizador para gravar as alterações deve clicar no botão **SUBMETER** ou **GUARDAR**, dependendo dos painéis alterados. Após clicar irá ser notificado com o resultado da operação.

## 15.3. Consultar Instalações
O utilizador pode navegar para a página de consulta de instalação na página de instalações de estabelecimento ([](#fig39)) e clicar no botão **CONSULTAR INSTALAÇÃO**.

## 15.4. Histórico Instalações

A página de histórico de uma entidade pode ser acedida através da página de instalações de estabelecimento ([](#fig39)) e clicando no botão **HISTÓRICO INSTALAÇÃO** .
Uma vez na página de histórico poderá visualizar todas as versões resultantes da edição das instalações, bem como a identificação dos campos alterados.
