===============================================================================
SPRINT 6 — MÓDULO VARIÁVEIS
===============================================================================
Prioridade: BAIXA (argumento variádico, uso avançado)
Instância global: variáveis

Estrutura ListaVariádicos (5 campos):
  deslocamentoInteiro, deslocamentoReal,
  deslocamentoEstouro/áreaEstouro (união), áreaRegistros

Funções Padrão do Gerenciador:
  - variáveis.crie()                                    → construtor
  - variáveis.destrua(ListaVariádicos*)                 → destrutor
  - variáveis.extenda(ListaVariádicos*, ListaVariádicos*) → estende uma instância

Acessores:
  - variáveis.defina_deslocamento_inteiro / variáveis.obtenha_deslocamento_inteiro
  - variáveis.defina_deslocamento_real / variáveis.obtenha_deslocamento_real
  - variáveis.defina_área_estouro / variáveis.obtenha_área_estouro
  - variáveis.defina_área_registros / variáveis.obtenha_área_registros

Funções Específicas:
  - variáveis.inicie(ListaVariádicos*, Vazio*)
  - variáveis.obtenha(ListaVariádicos*, Inteiro, Inteiro, Inteiro)
  - variáveis.copie(ListaVariádicos*, ListaVariádicos*)
  - variáveis.finalize(ListaVariádicos*)

Total de Funções: 15

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Variaveis.int (ListaVariádicos, CtecErroVariáveis, InterfaceGerenciadorVariáveis)
  [ ] Documentar variáveis.crie — aloca instância inicializada
  [ ] Documentar variáveis.destrua — libera instância
  [ ] Documentar variáveis.extenda — copia campos entre instâncias
  [ ] Documentar variáveis.inicie — inicializa lista de argumentos variádicos
  [ ] Documentar variáveis.obtenha — obtém o próximo argumento da lista
  [ ] Documentar variáveis.copie — copia estado da lista para outra
  [ ] Documentar variáveis.finalize — finaliza lista de argumentos
  [ ] Documentar variáveis.defina_deslocamento_inteiro / variáveis.obtenha_deslocamento_inteiro
  [ ] Documentar variáveis.defina_deslocamento_real / variáveis.obtenha_deslocamento_real
  [ ] Documentar variáveis.defina_área_estouro / variáveis.obtenha_área_estouro
  [ ] Documentar variáveis.defina_área_registros / variáveis.obtenha_área_registros

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: variáveis.crie retorna ponteiro não-nulo
  [ ] Teste: variáveis.destrua libera sem falha
  [ ] Teste: variáveis.extenda copia todos os campos
  [ ] Teste: variáveis.inicie zera deslocamentos e define área de registros
  [ ] Teste: variáveis.copie replica todos os campos corretamente
  [ ] Teste: variáveis.finalize executa sem falha
  [ ] Teste: variáveis.obtenha avança o deslocamento pelo tamanho do argumento
  [ ] Teste: variáveis.defina_deslocamento_inteiro / variáveis.obtenha_deslocamento_inteiro
  [ ] Teste: variáveis.defina_deslocamento_real / variáveis.obtenha_deslocamento_real
  [ ] Teste: variáveis.defina_área_estouro / variáveis.obtenha_área_estouro
  [ ] Teste: variáveis.defina_área_registros / variáveis.obtenha_área_registros

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_variaveis_crie
  [ ] Implementar ctec_convencional_variaveis_destrua
  [ ] Implementar ctec_convencional_variaveis_extenda
  [ ] Implementar ctec_convencional_variaveis_inicie
  [ ] Implementar ctec_convencional_variaveis_obtenha
  [ ] Implementar ctec_convencional_variaveis_copie
  [ ] Implementar ctec_convencional_variaveis_finalize
  [ ] Implementar 8 acessores (defina/obtenha × 4 campos)
  [ ] Montar instância variáveis

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Variaveis.nld como objeto
  [ ] Incluir na biblioteca estática
  [ ] Incluir na biblioteca dinâmica

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo: função variádica que soma N argumentos inteiros

===============================================================================
