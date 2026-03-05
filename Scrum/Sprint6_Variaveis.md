===============================================================================
SPRINT 6 — MÓDULO VARIÁVEIS
===============================================================================
Prioridade: BAIXA (argumento variádico, uso avançado)

Funções:
  - inicie(ListaVariádicos*, Vazio*)
  - obtenha(ListaVariádicos*, Inteiro, Inteiro, Inteiro)
  - copie(ListaVariádicos*, ListaVariádicos*)
  - finalize(ListaVariádicos*)

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Variaveis.int (ListaVariádicos, CtecErroVariáveis, InterfaceGerenciadorVariáveis)
  [ ] Documentar inicie — inicializa lista de argumentos variádicos
  [ ] Documentar obtenha — obtém o próximo argumento da lista
  [ ] Documentar copie — copia estado da lista para outra
  [ ] Documentar finalize — finaliza lista de argumentos

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: inicie zera deslocamentos e define área de registros
  [ ] Teste: copie replica todos os campos corretamente
  [ ] Teste: finalize executa sem falha
  [ ] Teste: obtenha avança o deslocamento pelo tamanho do argumento

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_variaveis_inicie
  [ ] Implementar ctec_convencional_variaveis_obtenha
  [ ] Implementar ctec_convencional_variaveis_copie
  [ ] Implementar ctec_convencional_variaveis_finalize
  [ ] Montar instância GerenciadorVariáveis

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
