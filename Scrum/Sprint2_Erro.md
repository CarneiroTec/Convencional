===============================================================================
SPRINT 2 — MÓDULO ERRO
===============================================================================
Prioridade: ALTA (dependência de todos os módulos para tratamento de erros)

Funções:
  - obtenha_erro()
  - defina_erro(Erro)
  - mensagem(Inteiro)

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Erro.int (tipo Erro, CtecErroErro, códigos de erro, InterfaceGerenciadorErro)
  [ ] Documentar obtenha_erro — retorna o código de erro atual (errno)
  [ ] Documentar defina_erro — define o código de erro atual
  [ ] Documentar mensagem — retorna a mensagem textual de um código de erro
  [ ] Documentar todos os códigos de erro (ERRO_PERMISSÃO .. ERRO_FORA_INTERVALO)

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: defina_erro seguido de obtenha_erro retorna o valor correto
  [ ] Teste: mensagem retorna string não-nula para código válido
  [ ] Teste: obtenha_erro sem erro anterior retorna 0

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_erro_obtenha_erro
  [ ] Implementar ctec_convencional_erro_defina_erro
  [ ] Implementar ctec_convencional_erro_mensagem
  [ ] Montar instância GerenciadorErro

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Erro.nld como objeto
  [ ] Incluir na biblioteca estática
  [ ] Incluir na biblioteca dinâmica

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo de uso: definir erro, obter e exibir mensagem

===============================================================================
