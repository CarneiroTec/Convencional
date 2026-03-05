===============================================================================
SPRINT 3 — MÓDULO SISTEMA
===============================================================================
Prioridade: ALTA (funções fundamentais de I/O, memória, tempo, ambiente, execução)
Instância global: Imutável sistema

Estrutura: InterfaceGerenciadorSistema com structs aninhadas
  (sem campos de dados próprios — sem acessores defina/obtenha)

  sistema.terminal.*    (6 funções)
  sistema.ambiente.*    (2 funções)
  sistema.execução.*    (4 funções)
  sistema.tempo.*       (3 funções)
  sistema.memória.*     (4 funções)

Uso: sistema.terminal.exiba_formatado("Olá %s", "Mundo")
Total de Funções: 21 (agrupadas, sem acessores)

===============================================================================
TERMINAL (sistema.terminal.*)
===============================================================================

Funções:
  - sistema.terminal.exiba_caractere(Caractere)
  - sistema.terminal.exiba_formatado(Imutável Caractere*, ...)
  - sistema.terminal.exiba_texto(Imutável Caractere*)
  - sistema.terminal.leia_caractere()
  - sistema.terminal.leia_formatado(Imutável Caractere*, ...)
  - sistema.terminal.leia_texto(Caractere*)

Fase 1 — Documentação:
  [ ] Documentar exiba_caractere — exibe um caractere no terminal
  [ ] Documentar exiba_formatado — exibe texto formatado (printf)
  [ ] Documentar exiba_texto — exibe uma linha de texto
  [ ] Documentar leia_caractere — lê um caractere do teclado
  [ ] Documentar leia_formatado — lê entrada formatada (scanf)
  [ ] Documentar leia_texto — lê uma linha de texto

Fase 2 — Testes:
  [ ] Teste: exiba_caractere retorna o caractere escrito
  [ ] Teste: exiba_formatado retorna quantidade de caracteres escritos
  [ ] Teste: exiba_texto retorna valor não-negativo em sucesso
  [ ] Teste: leia_caractere (teste de integração manual)
  [ ] Teste: leia_formatado (teste de integração manual)
  [ ] Teste: leia_texto (teste de integração manual)

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_sistema_exiba_caractere
  [ ] Implementar ctec_convencional_sistema_exiba_texto
  [ ] Implementar ctec_convencional_sistema_leia_caractere
  [ ] Implementar ctec_convencional_sistema_leia_texto
  [ ] Mapear exiba_formatado → printf
  [ ] Mapear leia_formatado → scanf

===============================================================================
AMBIENTE (sistema.ambiente.*)
===============================================================================

Funções:
  - sistema.ambiente.defina_variável(Imutável Caractere*, Imutável Caractere*)
  - sistema.ambiente.obtenha_variável(Imutável Caractere*)

Fase 1 — Documentação:
  [ ] Documentar defina_variável — define uma variável de ambiente
  [ ] Documentar obtenha_variável — obtém o valor de uma variável de ambiente

Fase 2 — Testes:
  [ ] Teste: defina_variável seguido de obtenha_variável retorna o valor definido
  [ ] Teste: obtenha_variável para variável inexistente retorna NULO

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_sistema_defina_variável
  [ ] Implementar ctec_convencional_sistema_obtenha_variável

===============================================================================
EXECUÇÃO (sistema.execução.*)
===============================================================================

Funções:
  - sistema.execução.aborte()
  - sistema.execução.finalize(Inteiro)
  - sistema.execução.finalize_imediamente(Inteiro)
  - sistema.execução.suceda(Vazio(*)(Vazio))

Fase 1 — Documentação:
  [ ] Documentar aborte — encerra o programa abruptamente
  [ ] Documentar finalize — encerra o programa com código de saída
  [ ] Documentar finalize_imediamente — encerra sem executar callbacks
  [ ] Documentar suceda — registra função para execução na finalização

Fase 2 — Testes:
  [ ] Teste: suceda registra callback com sucesso (retorna 0)
  [ ] Teste: aborte, finalize, finalize_imediamente (testes de integração manual)

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_sistema_aborte
  [ ] Implementar ctec_convencional_sistema_finalize
  [ ] Implementar ctec_convencional_sistema_finalize_imediamente
  [ ] Implementar ctec_convencional_sistema_suceda

===============================================================================
TEMPO (sistema.tempo.*)
===============================================================================

Funções:
  - sistema.tempo.obtenha_tempo(Longo*)
  - sistema.tempo.obtenha_relógio()
  - sistema.tempo.aguarde(Longo)

Fase 1 — Documentação:
  [ ] Documentar obtenha_tempo — retorna o tempo atual em segundos desde 1970
  [ ] Documentar obtenha_relógio — retorna ticks do relógio do processador
  [ ] Documentar aguarde — pausa a execução por N milissegundos

Fase 2 — Testes:
  [ ] Teste: obtenha_tempo retorna valor maior que 0
  [ ] Teste: obtenha_relógio retorna valor não-negativo
  [ ] Teste: aguarde pausa por pelo menos o tempo solicitado

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_sistema_obtenha_tempo
  [ ] Implementar ctec_convencional_sistema_obtenha_relógio
  [ ] Implementar ctec_convencional_sistema_aguarde

===============================================================================
MEMÓRIA (sistema.memória.*)
===============================================================================

Funções:
  - sistema.memória.aloque(Natural Inteiro)
  - sistema.memória.aloque_zerado(Natural Inteiro, Natural Inteiro)
  - sistema.memória.realoque(Vazio*, Natural Inteiro)
  - sistema.memória.libere(Vazio*)

Fase 1 — Documentação:
  [ ] Documentar aloque — aloca bloco de memória não-inicializado
  [ ] Documentar aloque_zerado — aloca bloco de memória zerado
  [ ] Documentar realoque — redimensiona bloco de memória existente
  [ ] Documentar libere — libera bloco de memória alocado

Fase 2 — Testes:
  [ ] Teste: aloque retorna ponteiro não-nulo para tamanho válido
  [ ] Teste: aloque_zerado retorna memória zerada
  [ ] Teste: realoque preserva conteúdo anterior
  [ ] Teste: libere não causa falha com ponteiro válido

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_sistema_aloque
  [ ] Implementar ctec_convencional_sistema_aloque_zerado
  [ ] Implementar ctec_convencional_sistema_realoque
  [ ] Implementar ctec_convencional_sistema_libere

===============================================================================
MONTAGEM FINAL
===============================================================================

  [ ] Montar instância sistema com structs aninhadas
  [ ] Documentar Sistema.int completo (CtecErroSistema, InterfaceGerenciadorSistema)

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Sistema.nld como objeto
  [ ] Incluir na biblioteca estática
  [ ] Incluir na biblioteca dinâmica

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo: sistema.terminal.exiba_texto, sistema.memória.aloque/libere

===============================================================================
