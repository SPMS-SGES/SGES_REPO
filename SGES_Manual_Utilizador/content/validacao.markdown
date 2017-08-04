---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

<p id="validacao"></p>

# 13. Validações

Os módulos do SGES contêm um painel que permite validar os dados do mesmo. Este painel tem a finalidade de permitir ao utilizador verificar/confirmar que o preenchimento dos dados do módulo é válido.
([](#figValicaoPanel))

![figValicaoPanel](img/pages/13_1.jpg)

<p class="caption" id="figValicaoPanel">Painel Validação</p>

<p id="validarModulo"></p>

## 13.1. Validar Módulo

Para validar um módulo, basta selecionar a checkbox do painel e clicar no botão **GUARDAR**. Caso os dados sejam validados com sucesso, a mensagem do painel é atualizada com a data de validação e o username do utilizador que validou.
([](#figValidarModulo))

![figValidarModulo](img/pages/13_1_1.jpg)
<p class="caption" id="figValidarModulo">Validar Módulo</p>

Sempre que os dados de um módulo sejam alterados, eles deixam de estar validados. Sendo assim, o utilizador deve voltar a validá-los.

<p id="modulosValidaveis"></p>

## 13.2. Módulos com validação

Atualmente os módulos do SGES que contêm este painel são:

|                  |Módulos Validáveis                   |  |
|------------------|-------------------------------------|--|
| Entidades        | Identificação                       |  |
|                  | Estabelecimentos Existentes         |  |
|                  | RH Serviços                         |  |
|                  | Produção de Equipamentos            |  |
|                  | Produção no Exterior                |  |
|                  | Tempos de Espera                    |  |
|------------------|-------------------------------------|--|
| Estabelecimentos | Identificação                       |  |
|                  | Capacidades (Se do tipo Hospital)   |  |
|                  | Equipamentos Existentes             |  |
|------------------|-------------------------------------|--|
