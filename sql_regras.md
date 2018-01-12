# Regras de construção de sql

Regras de construção de ficheiros sql, pl/sql. 
Para todas as alterações, deve-se criar um novo ficheiro, ou continuar o ultimo, pois os utilizadores que não vêem essa alteração podem não ter em conta esses dados.
Esse ficheiro deve seguir a ordem anterior, para isso, deve-se efetuar o update. 
As ordens devem ser do tipo: 01, 02, 03, 04 (...), 10, 11, e o script deve ter como nome: <ordem>_<nome_descritivo_dado>

# Tabelas

Todas os nomes das tabelas começam por uma abreviatura:
* **GEN** tabelas genericas
* **PRM** tabelas de parametros
* **EP** tabelas relacionadas com episódio
* **MAP** tabelas relacionado com mapeamento

## Criação de tabelas

Quase todas as tabelas contêm: 

* **Id_<nome_tabela>** id do nome da tabela, este id é único, e chave primária, mas  pode ser diferente nos diferentes ambientes (DEV,QUALIDADE e PRODUCAO).
* **update_date** data de atualizacao da linha da tabela, este dado é importante para gestão de histórico
* **updated_by** nome do utilizador que alterou
* **created_date** data de criação
* **created_by** nome do utilizador que criou
* **state_id** 1- ativo, 2- desativo; Estes estados simulam o "eliminar", mas não são retirados da base de dados para efeitos de histórico

As tabelas de parametros contem:
* **codigo** codigo do valor, utilizado para pesquisas, e convem que seja unico. Como é sempre o mesmo nos ambientes, é este que é utilizado nas pesquisas.

### Ao criar uma tabela também se deve criar.

Ao criar uma nova tabela, será necessário criar novos objetos para fim de organizar melhor os dados e para efeitos de histórico:

* **tabela historico** - com o nome: *<nome_tabela>_HIST * , de igual construção que a tabela, mas como chaves primarias: o *id* e o *update_date *.
* **trigger historico** - com o nome *TRG_HT_<nome_tabela> * , para antes do update à tabela copiar todos os dados para a tabela de histório
* **sequencia** - com o nome *SEQ_<nome_tabela>, utilizado para inserir novos valores na tabela, o id da tabela deve sempre seguir a ordem da sequencia.

Ao criar o trigger ou procedures, deve-se colocar no fim: END;/ para os comandos seguintes continuarem.

### Adicionar chaves estrangeiras

O nome da chave estrangeira de ter como nome, algo preceptivel que nos indique que tabelas essa "constraint" relaciona. Como por exemplo,
* **<nome_tabela>_<nome_tabela_estangeira>_FK**- O nome das tabelas deve ser reduzido de forma a ter no máximo 30 caracteres.

## Alteração das tabelas

### Adicionar e remover colunas

Ao adicionar e remover as colunas, é necessário: 

* verificar se estas não interferem com outras tabelas
* remover/adicionar o nome ao trigger.

## Adicionar dados
Ao adicionar dados preencher as linhas sempre com estes dados:

* **Id_<nome_tabela>** SEQ_<nome_tabela>.nextval
* **update_date** sysdate
* **updated_by** nome da origem, por exemplo: migracao_webgdh, instalacao ,migracao.sges, etc;
* **created_date** sysdate
* **created_by** nome da origem, por exemplo: migracao_webgdh, instalacao ,migracao.sges, etc;
* **state_id** 1- ativo, 2- desativo; o desativo pode ser utilizado aqui, mas em raros casos.

Se houver codigo, também se deve preencher esse campo. Se não houver dados para preencher esse codigo, usar: 100, 200, 300, 400 (ou de 10 em 10).

Ao adicionar os dados é necessário colocar COMMIT; no fim.