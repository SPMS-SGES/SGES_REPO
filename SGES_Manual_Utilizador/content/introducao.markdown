---
layout: default
title: "Introdução"
---


# 1.Sobre este Manual
Este manual descreve o modo de funcionamento do sistema, apresentando os respectivos ecrãs, sua sequência, modo de preenchimento e as regras de negócio que lhe estão subjacentes. 
Será organizado:

 - “Sobre este Manual”, o capítulo atual que descreve o conteúdo do
   manual, qual a sua organização e como pode ser consultado; 
 - “Tabela de  Acrónimos”, que contêm todos os acrónimos usados ao longo deste manual e que permitirá familiarizar desde já o utilizador com determinadas abreviaturas apresentadas na aplicação; 
 - “Introdução”,   onde é apresentado o sistema SGES, qual o seu contexto e propósito,  incluindo os seguintes subcapítulos:
	 * “Objetivos do Sistema” onde se descrevem os propósitos da utilização da aplicação informática;
	 * “Conceitos básicos” onde se explicam os principais conceitos que suportam a aplicação, concretamente conceitos tipo “navegação" no sistema, explicando o que se entende por isso;
 	 * “Instruções de acesso”, onde é descrito como o utilizador pode aceder ao sistema
- “Sequências de menus”
 

# 2.Tabela de Acrónimos

A tabela seguinte está ordenada por ordem alfabética segundo as siglas.

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
 
# 3.Termos e Definições

A tabela seguinte está ordenada por ordem alfabética segundo os termos.

|  Termo          |  Definição             |           
|-----------------|------------------------|
| Entidade        |   |  
| Equipamento     |   |  
| Estabelecimento |   |  
| Instalações     |   |  

# 4.Introdução
O Sistema de Gestão de Entidades de Saúde (*SGES*) é um projeto estruturante para o sistema de informação de saúde, promovendo a criação de um repositório central de Entidades de Saúde, fiável e permanentemente atualizado, a partilhar com todos os SI, eliminando a redundância de informação e promovendo a melhoria da qualidade dos dados.

Objetivos do Sistema:

* Considerando a evolução dos requisitos funcionais e técnicos, resultante das iterações ocorridas com os diferentes intervenientes ao longo do projeto a que este sistema deu origem, identificam-se como principais objetivos conseguir através do SGES
* Conhecer as entidades prestadoras de cuidados de saúde, a sua distribuição geográfica, a sua capacidade instalada e a sua relação com o SNS;
* Dispor de um repositório de entidades de saúde único, integrado e partilhado;
* Disponibilizar informação consistente, de qualidade e atempada aos diferentes SI da Saúde;
* Reduzir os custos de manutenção e implementação dos SI da Saúde;
* Maior celeridade na obtenção de respostas e tratamento de processos, por parte dos organismos utilizadores;
* Facilitar o acesso da informação sobre entidades de saúde ao cidadão;
* Reduzir o número de interações do cidadão com os serviços do SNS, para obtenção de informação sobre entidades convencionadas;
* Otimizar a gestão dos recursos disponíveis.

# 5.Conceitos Básicos

Associada a essa interação existe um conjunto de conceitos para os quais é chamada a atenção neste Capítulo.
Todos os formulários que permitem criação ou edição de dados têm um conjunto de regras de negócio e validações para facilitar o preenchimento correto dos dados.
Para auxiliar as validações existem 4 tipos de mensagens:

* Mensagem de Informação

![logo](img/informacao.jpg)

* Mensagem de Alerta

![logo](img/alerta.jpg)

* Mensagem de Erro

![logo](img/erro.jpg)

* Mensagem de Sucesso

![logo](img/sucesso.jpg)

No cabeçalho das páginas do **SGES** existe um conjunto de dados que serve para informação/contextualização do utilizador. 

Aparece na 1ªlinha o perfil do utilizador e caso este pertenca a uma entidade, o nome dessa. Na 2ª linha aparece o nome do utilizador.


Ao lado do nome de utilizador, encontra-se o botão das opções avançadas ![logo](img/definicao.png). 
Ao clicar neste o utilizador tem acesso a um conjunto de opções relativas ao perfil do utilizador, como o alterar password ([5.2. Alteração da senha](#alterao-da-senha)) e a criação de utilizadores ([5.3. Gestão de utilizadores](#gesto-de-utilizadores)).


A qualquer momento, em qualquer página existe a ligação ao manual de utilizador através do botão no canto superior direito. 
![logo](img/manual.jpg).


O acesso às páginas e a sua navegação é representada nos *breadcrumbs* ![logo](img/breadcrumbs.jpg), que são clicáveis se o utilizador pretender voltar a uma página já navegada.


De modo a familiarizar o utilizador com a aplicação, apresentam-se, de seguida, alguns exemplos ilustrativos de ações genéricas de interação com o SGES.

## 5.1. Aceder ao SGES

O acesso ao SGES é realizado através da navegação até ao seu endereço em [http://sges.min-saude.pt/SGES/login.html](http://sges.min-saude.pt/SGES/login.html) num browser de Internet que o utilizador tenha disponível no seu computador e irá surgir-lhe a página que surge na [](#figLogin).

![figLogin](img/pages/5_1_1.jpg)

<p class="caption" id="figLogin">Página de acesso do SGES </p>

Caso o utilizador saiba as suas credenciais, inserir os campos obrigatórios, e clicar em **Avançar**.

Caso contrário, deverá clicar em **Recuperar Senha**, inserir os campos obrigatórios, e clicar em **Enviar**.

|    |  Campos Obrigatórios [](#figLoginRecuperacao).  |           
|----|----------------------------------------|
| a) | e-mail associado á conta da aplicação  |  

![figLoginRecuperacao](img/pages/5_1_2.jpg)

<p class="caption" id="figLoginRecuperacao"> Recuperação da Senha </p>

Uma vez identificado e autenticado, é apresentada ao utilizador a página de entrada do SGES, 
[](#figPaginaEntrada) ou [](#figPaginaEntradaEnt) caso seja do perfil ENTIDADE, onde pode então aceder às funcionalidades que lhe estão disponíveis.

![figPaginaEntrada](img/pages/5_1_4.jpg)

<p class="caption" id="figPaginaEntrada"> Página de entrada no SGES </p>

![figPaginaEntradaEnt](img/pages/5_1_5.jpg)

<p class="caption" id="figPaginaEntradaEnt"> Página de entrada no SGES Entidade </p>

Na primeira vez que o utilizador acede a aplicação, aparecerá a página de ([5.2. Alteração da senha](#alterao-da-senha)).

## 5.2. Alteração da senha

A qualquer momento, o utilizador pode fazer a alteração da sua senha, clicando no botão das opções avançadas situado no canto superior direito da página ([5.Conceitos Básicos](#conceitos-bsicos)). 
Após clicar em **Alterar Password** é lhe apresentada uma página de alteração de senha, [](#figAlteracaoSenha). O utilizador deverá inserir os campos obrigatórios:

|    |  Campos Obrigatórios [](#figAlteracaoSenha)  |           
|----|----------------------------------------|
| a) |  senha utilizada atualmente            | 
| b) |  nova senha pretendida                 |  
| c) |  repetição da senha pretendida         |

Após o preenchimento dos campos, o utilizador deverá finalizar a alteração clicando em **Alterar**.

![figAlteracaoSenha](img/pages/5_2_1.jpg)

<p class="caption" id="figAlteracaoSenha"> Página de alteração de senha </p>

## 5.3. Página de Pesquisa

A aplicação tem uma página onde podem ser efetuadas pesquisa de entidades ou estabelecimentos, que será a página de entrada de alguns perfis.
Caso pretenda pesquisar por entidades, o utilizador deverá selecionar **Entidade** no campo *Pesquisar por:* presente no formulário e preencher pelo menos 3 campos de pesquisa. Em seguida clicar em **Pesquisar** para executar a pesquisa.

|   |  Campos Obrigatórios [](#figPesquisaEntidade)  |           
|----|----------------------------------------|
| a) | Campo de identificação do tipo de pesquisa | 

![figPesquisaEntidade](img/pages/5_3_1.jpg)

<p class="caption" id="figPesquisaEntidade"> Pesquisa de entidade </p>

Caso pretenda pesquisar por estabelecimentos, o utilizador deverá selecionar **Estabelecimentos** no campo *Pesquisar por:* presente no formulário e preencher pelo menos 3 campos de pesquisa. Em seguida clicar em **Pesquisar** para executar a pesquisa.

![figPesquisaEstabelecimento](img/pages/5_3_2.jpg)

<p class="caption" id="figPesquisaEstabelecimento"> Pesquisa de estabelecimentos </p>

Na próxima imagem ([](#figPesquisaExEntidade)) podemos observar o resultado da pesquisa onde se pretende listar todos os Centros Hospitalares públicos no distrito do Porto.

![figPesquisaExEntidade](img/pages/5_3_3.jpg)

<p class="caption" id="figPesquisaExEntidade"> Pesquisa exemplo de entidades </p>

Clicando num dos registos da lista, o utilizador pode clicar nas opções que se encontram no final da tabela.
Se a lista de resultados for superior a 10 registos, surgirá no canto superior da tabela a navegação para a(s) próxima(s) página(s);


## 5.4. Gestão de utilizadores
<p id="gestaoUtilizadores"></p>

O utilizador, se tiver permissões, pode criar/gerir utilizadores para atualizarem os diferentes paineis no SGES na entidade respectiva.
Será possivel criar utilizadores com os seguintes perfis:

* **SGES_ENTIDADE** - Os utilizadores poderão executar as operações sobre a *entidade* assim como criar e alterar *estabelecimentos*.

* **SGES_EQUIPAMENTOS** - Os utilizadores poderão executar as operações sobre os *equipamentos* médicos pesados e sobre a *produção* dos mesmos.

Para criar novos utilizadores, deve clicar no botão das opções avançadas situado no canto superior direito da página 
([5.Conceitos Básicos](#conceitos-bsicos)). Após clicar em **Gestão de Utilizadores**, aparecerá a página de **Gestão de Utilizadores** [](#figGestaoUtilizadores).

![figGestaoUtilizadores](img/pages/5_4_1.jpg)

<p class="caption" id="figGestaoUtilizadores"> Gestão de utilizadores </p>

## 5.4.1. Criação de utilizadores

O utilizador deve clicar em **Criar**, para aparecer a página de *Criar Utilizador* [](#figCriarUtilizador).

![figCriarUtilizador](img/pages/5_4_2.jpg)

<p class="caption" id="figCriarUtilizador"> Criar utilizador </p>

Para a criação de utilizador deve ser preenchido os seguintes campos obrigatórios:

|    |  Campos Obrigatórios [](#figCriarUtilizador)  | |    
|----|----------------------------------------|----|
| a) |  Nome       		                ||
| b) |  BI/CC                           ||
| c) |  Data de nascimento              ||
| d) |  Sexo                            ||
| e) |  E-mail                          ||
| f) |  Perfil                          | SGES_ENTIDADE|
| |                                     | SGES_EQUIPAMENTOS|

No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.







