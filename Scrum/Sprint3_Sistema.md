===============================================================================
SPRINT 3 — MÓDULO SISTEMA
===============================================================================
Prioridade: ALTA (funções fundamentais de I/O, memória, tempo, ambiente, execução)

Estrutura:
  InterfaceGerenciadorSistema com structs aninhadas:
    .terminal   (6 funções)
    .ambiente   (2 funções)
    .execução   (4 funções)
    .tempo      (3 funções)
    .memória    (4 funções)
  Uso: GerenciadorSistema.terminal.exiba_formatado(...)

===============================================================================
TERMINAL (GerenciadorSistema.terminal.*)
===============================================================================

Funções:
  - exiba_caractere(Caractere)
  - exiba_formatado(Imutável Caractere*, ...)
  - exiba_texto(Imutável Caractere*)
  - leia_caractere()
  - leia_formatado(Imutável Caractere*, ...)
  - leia_texto(Caractere*)

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
AMBIENTE (GerenciadorSistema.ambiente.*)
===============================================================================

Funções:
  - defina_variável(Imutável Caractere*, Imutável Caractere*)
  - obtenha_variável(Imutável Caractere*)

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
EXECUÇÃO (GerenciadorSistema.execução.*)
===============================================================================

Funções:
  - aborte()
  - finalize(Inteiro)
  - finalize_imediamente(Inteiro)
  - suceda(Vazio(*)(Vazio))

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
TEMPO (GerenciadorSistema.tempo.*)
===============================================================================

Funções:
  - obtenha_tempo(Longo*)
  - obtenha_relógio()
  - aguarde(Longo)

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
MEMÓRIA (GerenciadorSistema.memória.*)
===============================================================================

Funções:
  - aloque(Natural Inteiro)
  - aloque_zerado(Natural Inteiro, Natural Inteiro)
  - realoque(Vazio*, Natural Inteiro)
  - libere(Vazio*)

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

  [ ] Montar instância GerenciadorSistema com structs aninhadas
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
  [ ] Criar exemplo: exibir texto, alocar memória, ler variável de ambiente

===============================================================================
