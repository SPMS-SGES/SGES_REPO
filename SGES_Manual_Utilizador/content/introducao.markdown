---
layout: default
title: "Introdução"
---

<p id="sobre-este-manual"></p>
# 1.Sobre este Manual
Este manual descreve o modo de funcionamento do sistema, apresentando os respectivos ecrãs, a sua sequência, modo de preenchimento e as regras de negócio que lhe estão subjacentes. 
Está dividido nos seguintes capítulos:

 - “Sobre este Manual”, o capítulo atual que descreve o conteúdo do
   manual, a sua organização e como pode ser consultado; 
 - “Tabela de  Acrónimos”, que contém todos os acrónimos usados ao longo deste manual e que permitirá que o utilizador fique familiarizado com determinadas abreviaturas apresentadas na aplicação; 
 - “Introdução”,   onde é apresentado o sistema SGES, o seu contexto e objetivo e os propósitos da utilização da aplicação informática;
- “Conceitos básicos”, onde se explicam os principais conceitos que suportam a aplicação, em particular, o conceito de “navegação" no sistema. Este capítulo inclui os seguintes sub-capítulos:

	* “Aceder ao SGES”, onde é descrita como o utilizador pode aceder ao sistema;
	* “Alteração da senha”, onde é descrito a sequência de ações que o utilizador tem de realizar para alterar a sua senha;
	* “Gestão de utilizadores”, onde é apresentada a possibilidade de criar e gerir utilizadores;
	* “Natureza Jurídica e os seus campos” onde são indicadas as permissões fornecidas às entidades das diferentes naturezas jurídicas.

- “Menu Principal”, onde é apresentado o menu principal de pesquisa da aplicação;

- “Sequências de menus”, onde são apresentados os menus, aos quais o utilizador pode aceder através da aplicação, e as suas funcionalidades.

Este manual foi desenvolvido com o intuito de agilizar a interação das entidade ULS, Centros Hospitalares e Hospitais do Sistema Nacional de Saúde com 
a aplicação SGES.

<p id="tabela-de-acrnimos"></p>

# 2.Tabela de Acrónimos

Na tabela seguinte estão apresentadas, por ordem alfabética, a siglas que serão referidas no manual e na aplicação.

|  Sigla |  Designação             |           
|--------|-------------------------|
|  ACSS  |  Administração Central do Sistema de Saúde |           
|  ACES  |  Agrupamentos de Centros de Saúde |           
|  ARS   |  Administração Regional de Saúde|           
|  EPE   |  Entidade Pública Empresarial|           
|  ERS   |  Entidade Reguladora da Saúde|   
|  ETCS  |  Designação             |           
|  IPSS  |  Instituições Particulares de Solidariedade Social|           
|  UF    |  Unidade Funcional |           
|  ULS   |  Unidade Local de Saúde |    
|  SPMS  |  Serviços Partilhados do Ministério da Saúde|               
|  PPP   |  Parceria Público-Privada|           
 
<p id="termos-e-definies"></p>
# 3.Introdução
O Sistema de Gestão de Entidades de Saúde (SGES) é um projeto estruturante para o sistema de informação de saúde, promovendo a criação de um repositório central de Entidades de Saúde, fiável e permanentemente atualizado, a partilhar com todos os SI, eliminando a redundância de informação e promovendo o aumento da qualidade dos dados.
Considerando a evolução dos requisitos funcionais e técnicos, resultante das interações ocorridas com os diferentes intervenientes ao longo do projeto a que este sistema deu origem, identificam-se como principais objetivos que através do SGES seja possível:
* Conhecer as entidades prestadoras de cuidados de saúde, a sua distribuição geográfica, a sua capacidade instalada e a sua relação com o SNS;
* Dispor de um repositório de entidades de saúde único, integrado e partilhado;
* Disponibilizar informação consistente, de qualidade e atempada aos diferentes SI da Saúde;
* Reduzir os custos de manutenção e implementação dos SI da Saúde;
* Maior celeridade na obtenção de respostas e tratamento de processos, por parte dos organismos utilizadores;
* Facilitar o acesso da informação sobre entidades de saúde ao cidadão;
* Reduzir o número de interações entre o cidadão e os serviços do SNS, para obtenção de informação sobre entidades convencionadas;
* Otimizar a gestão dos recursos disponíveis.

<p id="conceitos-bsicos"></p>
# 4.Conceitos Básicos

Associada a essa interação existe um conjunto de conceitos que serão referidos neste capítulo.

Todos os formulários que permitem criação ou edição de dados têm um conjunto de regras de negócio e validações para facilitar o preenchimento correto dos dados.
Para auxiliar o processo de criação e edição de dados existem quatro tipos de mensagens:

* Mensagem de informação ([](#figInfo));

![figInfo](img/pages/cap4/informacao.jpg)

<p class="caption" id="figInfo"> Exemplo de uma mensagem de informação. </p>

* Mensagem de Alerta ([](#figAlerta));

![figAlerta](img/pages/cap4//alerta.jpg)

<p class="caption" id="figAlerta"> Exemplo de uma mensagem de alerta. </p>

* Mensagem de Erro ([](#figErro));

![figErro](img/pages/cap4/erro.jpg)

<p class="caption" id="figErro"> Exemplo de uma mensagem de erro. </p>

* Mensagem de Sucesso ([](#figSucesso));

![figSucesso](img/pages/cap4/sucesso.jpg)

<p class="caption" id="figSucesso"> Exemplo de uma mensagem de sucesso. </p>


No cabeçalho das páginas do SGES existe um conjunto de dados que serve para informação/contextualização do utilizador. 

No canto superior direito da página da aplicação, na primeira linha, é mostrado o perfil do utilizador e, caso este pertença a uma entidade, é mostrado o nome desta. Na segunda linha aparece o nome do utilizador.

Ao lado do nome de utilizador, encontra-se o botão das opções avançadas ([](#figDef)). Ao clicar no referido botão, o utilizador tem acesso a um 
conjunto de opções relativas ao perfil do utilizador, tais como: a alteração de password ([4.2. Alteração da senha](#alterao-da-senha)), a criação de utilizadores (caso o utilizador tenha permissões para tal) ([4.3. Gestão de utilizadores](#gesto-de-utilizadores)) e a gestão de alertas. 
De referir que a opção de Gestão de Utilizadores também está disponível no menu principal da aplicação (caso o utilizador tenha permissões para tal) ([](#figatalho_menu)).

![figDef](img/pages/cap4/definicao.png)

<p class="caption" id="figDef"> Botão das opções avançadas. </p>

A qualquer momento, em qualquer página, existe possibilidade de o utilizador consultar o manual de utilizador através de um botão no canto superior direito ([](#figManual)).

![figManual](img/pages/cap4/manual.jpg)

<p class="caption" id="figManual"> Botão que permite o acesso ao manual de utilizador. </p>

O acesso às páginas e a sua navegação é representada nos panéis de navegação ([](#figPN)). 
Estes são clicáveis o que permite ao utilizador voltar a uma página já navegada.

![figPN](img/pages/cap4/breadcrumbs.jpg)

<p class="caption" id="figPN"> Painel de navegação. </p>

De modo a familiarizar o utilizador com a aplicação, apresentam-se, de seguida, alguns exemplos ilustrativos de ações fundamentais para interagir com o SGES.

<p id="aceder-ao-sges"></p>

Nota: Em qualquer campo da aplicação que não seja possível visualizar completamente o texto nele contido o utilizador pode ver o conteúdo total da linha se deixar o cursor do rato alguns segundos sobre a referida linha.

## 4.1. Aceder ao SGES

O acesso ao SGES é possível através da navegação até ao seu endereço em [https://sges.min-saude.pt/SGES/login.html](https://sges.min-saude.pt/SGES/login.html) num *browser* de internet.
Quando a página do SGES é carregada, o utilizador tem de inserir as suas credenciais de *login* ([](#figLogin)) para aceder à aplicação.

![figLogin](img/pages/cap4/5_1_1.jpg)

<p class="caption" id="figLogin">Página de acesso do SGES </p>

Caso o utilizador conheça as suas credenciais, deve preencher os campos obrigatórios, e clicar em **Avançar**.

Caso contrário, deverá clicar em **Recuperar Senha**, preencher os campos mostrados na ([](#figLoginRecuperacao)), e clicar em **Enviar**.

|    |  Campos Obrigatórios para recuperar a senha ([](#figLoginRecuperacao)) |           
|----|----------------------------------------|
| a) | Endereço eletrónico* associado à conta da aplicação ou nome de utilizador|  

![figLoginRecuperacao](img/pages/cap4/5_1_2.jpg)

<p class="caption" id="figLoginRecuperacao"> Recuperação da Senha </p>

\* Só será possível recuperar a senha indicando o endereço eletrónico se este estiver associado apenas a um utilizador.

Junto ao logotipo do SGES, encontra-se o botão de atalho para os diferentes menus ([](#figatalho_menu)). Este botão permite ao utilizador, em qualquer momento na navegação, mudar para um determinado menu.

![figatalho_menu](img/pages/cap4/5_1_3_2.JPG)

<p class="caption" id="figatalho_menu"> Botão de atalho para os diferentes menus destacado a amarelo e a janela mostrada quando se carrega no referido botão. </p> 

Na primeira vez que o utilizador acede à aplicação, aparecerá a página de ([4.2. Alteração da senha](#alterao-da-senha)).  

<p id="alteracao-de-senha"></p>
## 4.2. Alteração da senha

A qualquer momento, o utilizador pode fazer a alteração da sua senha, clicando no botão das opções avançadas situado no canto superior direito da página [4.Conceitos Básicos](#conceitos-bsicos). 
Após clicar em **Alterar Password** é apresentada uma página de alteração de senha, ([](#figAlteracaoSenha)). O utilizador deverá inserir os campos obrigatórios.

|    |  Campos Obrigatórios para alterar senha ([](#figAlteracaoSenha) |           
|----|----------------------------------------|
| a) |  Senha utilizada atualmente            | 
| b) |  Nova senha pretendida                 |  
| c) |  Repetição da senha pretendida         |

Após o preenchimento dos campos, o utilizador deverá finalizar a alteração clicando em **Alterar**.

![figAlteracaoSenha](img/pages/cap4/5_2_1_v1.jpg)

<p class="caption" id="figAlteracaoSenha"> Página de alteração de senha </p>

<p id="gestaoUtilizadores"></p>
## 4.3. Gestão de utilizadores
<p id="gestaoUtilizadores"></p>

Se o utilizador tiver o perfil de administrador (ARS_ADMIN, ADMIN_ENTIDADE, ACSS_ADMIN ou ADMIN_ENT_GERAL), pode criar/gerir utilizadores para atualizarem os diferentes painéis no SGES na entidade respetiva.
É possível criar utilizadores com os seguintes perfis:

* **SGES_ENTIDADE** - Os utilizadores com este perfil poderão executar as operações sobre a entidade assim como criar e alterar estabelecimentos;

* **SGES_EQUIPAMENTOS** - Os utilizadores com este perfil poderão executar as operações sobre os equipamentos médicos pesados e sobre a produção dos mesmos;

* **SGES_INSTALACOES** - Os utilizadores com este perfil poderão executar as operações sobre as instalações de cada estabelecimento médico.

Além dos apresentados, é também possível criar os seguintes perfis: ENT_INSTALACOES, RESPONSAVEL UF, ADMIN_ENT_GERAL, SGES_CONVENCOES.

Para criar novos utilizadores, o utilizador deve clicar no botão das opções avançadas situado no canto superior direito da página 
([](#figDef)). Após clicar em **Gestão de Utilizadores**, aparecerá a página mostrada na [](#figGestaoUtilizadores).

![figGestaoUtilizadores](img/pages/cap4/5_4_1.JPG)

<p class="caption" id="figGestaoUtilizadores"> Gestão de utilizadores </p>

**4.3.1.** O utilizador deve clicar em **Criar**, para aparecer a página de Criar Utilizador ([](#figCriarUtilizador)).

![figCriarUtilizador](img/pages/cap4/5_4_2_v1.jpg)

<p class="caption" id="figCriarUtilizador"> Criar utilizador </p>

Para a criação de um utilizador devem ser preenchidos os campos obrigatórios mostrados na tabela abaixo.

|    |  Campos Obrigatórios para criar utilizador [](#figCriarUtilizador)  | |    
|----|----------------------------------------|----|
| a) |  Nome       		                ||
| b) |  BI/CC                           ||
| c) |  Data de nascimento              ||
| d) |  Sexo                            ||
| e) |  E-mail                          ||
| f) |  Perfil                          | SGES_ENTIDADE|
| |                                     | SGES_EQUIPAMENTOS|
| |                                     | SGES_INSTALACOES|
| |                                     | ENT_INSTALACOES|
| |                                     | RESPONSAVEL UF|
| |                                     | ADMIN_ENT_GERAL|
| |                                     | SGES_CONVENCOES|

No final da edição, para gravar as alterações o utilizador deve clicar no botão **SUBMETER**. Após clicar irá ser notificado com o resultado da operação.

No SGES podem ainda existir utilizadores com outros perfis. No subcapítulo [A2 Perfis e respetivas permissões ](#listaperfis) é possível consultar a lista de perfis, e respetivas permissões, disponíveis no SGES.

<br>

**4.3.2.** O utilizador deve selecionar o utilizador pretendido e clicar em **Editar**, para que seja possível editar os dados de um determinado utilizador.

<br>

**4.3.3.** O utilizador deve selecionar o utilizador pretendido e  clicar em **Consultar**, para que seja possível consultar os dados de um determinado utilizador.

<br>

**4.3.4.** O utilizador deve selecionar o utilizador pretendido e clicar em **Bloquear**/**Desbloquear**, caso deseje  um determinado utilizador.

<br>

**4.3.5.** O utilizador deve selecionar o utilizador pretendido e clicar em **Apagar**, caso deseje eliminar um determinado utilizador

<br>

**4.3.6.** O utilizador deve selecionar o utilizador pretendido e clicar em **Reiniciar Password** caso deseje voltar a enviar as credenciais de acesso à aplicação a um determinado utilizador. Esta funcionalidade pode ser útil caso, por exemplo, se tenha inserido, inicialmente, o endereço eletrónico errado e, consequentemente, as credenciais tenham sido enviadas para o e-mail errado.

<br>

<p id="natureza-juridica"></p>
## 4.4. Natureza jurídica e os seus campos
As entidades públicas - ULS, Centros Hospitalares e Hospitais do SNS - têm acesso a informações relativas a entidades, estabelecimentos,equipamentos e instalações (ver capítulos 6 a 14 inclusive).

Informações relativas a Acordos/Convenções são acedidas, exclusivamente, pelas ARSs e ACSS (ver capítulo 15).

<p id="home"></p>
## 5. Menu Principal

Uma vez identificado e autenticado, é apresentado ao utilizador o menu principal do SGES onde pode aceder às diferentes funcionalidades que lhe estão disponíveis consoante o seu perfil; caso o utilizador tenha o perfil de administrador de uma entidade pública o menu principal que irá visualizar será o mostrado na [](#figura_menu_ADMIN_entidade).

![figura_menu_ADMIN_entidade](img/pages/cap5/5_1_3_v1.jpg)

<p class="caption" id="figura_menu_ADMIN_entidade"> Menu Principal para um utilizador com o perfil de administrador de uma entidade pública. </p>

Para além dos menus mostrados na figura anterior, existe ainda o menu Acordos e Convenções - [](#figacordos_convencoes) - e o menu Ficha Técnica - [](#figFT).

![figacordos_convencoes](img/pages/cap5/5_1_3_1.jpg) 

<p class="caption" id="figacordos_convencoes"> Menu Acordos e Convenções. </p>

![figFT](img/pages/cap5/5_1_3_1_1_v1.jpg)

<p class="caption" id="figFT"> Menu Ficha Técnica. </p>


O menu Acordos e Convenções, que permite a gestão de acordos e convenções, pode ser acedido por utilizadores com o perfil ACSS_CONVENCOES, ARS_ADMIN e ARS_CONVENCOES. 

Por sua vez, o menu Ficha Técnica, que permite o carregamento de fichas técnicas, pode ser acedido por utilizadores com o perfil ACSS_CONVENCOES e ARS_CONVENCOES.

O perfil ARS_ADMIN apenas consulta Acordos e Convenções.

