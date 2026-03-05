===============================================================================
SPRINT 1 — MÓDULO DADOS
===============================================================================
Prioridade: ALTA (dependência de Arquivo e outros módulos)

Funções:
  - inicialize(Dados*)
  - limpe(Dados*)

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Dados.int (estrutura Dados, CtecErroDados, InterfaceGerenciadorDados)
  [ ] Documentar inicialize — inicializa todos os campos de Dados com valores padrão
  [ ] Documentar limpe — limpa/reinicia os campos de Dados

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: inicialize zera todos os campos corretamente
  [ ] Teste: inicialize com ponteiro nulo não causa falha
  [ ] Teste: limpe reinicia os campos para valores padrão
  [ ] Teste: limpe com ponteiro nulo não causa falha

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_dados_inicialize
  [ ] Implementar ctec_convencional_dados_limpe
  [ ] Montar instância GerenciadorDados

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Dados.nld como objeto
  [ ] Incluir na biblioteca estática (.a / .lib)
  [ ] Incluir na biblioteca dinâmica (.so / .dll)

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo de uso: inicializar e limpar um Dados

===============================================================================
