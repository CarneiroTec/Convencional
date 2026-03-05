===============================================================================
SPRINT 2 — MÓDULO ERRO
===============================================================================
Prioridade: ALTA (dependência de todos os módulos para tratamento de erros)
Instância global: Imutável erro

Tipo: Pseudônimo Inteiro Erro (sem campos de estrutura — sem acessores)

Funções:
  - erro.obtenha_erro()
  - erro.defina_erro(Erro)
  - erro.mensagem(Inteiro)

Total de Funções: 3

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Erro.int (tipo Erro, CtecErroErro, códigos de erro, InterfaceGerenciadorErro)
  [ ] Documentar erro.obtenha_erro — retorna o código de erro atual (errno)
  [ ] Documentar erro.defina_erro — define o código de erro atual
  [ ] Documentar erro.mensagem — retorna a mensagem textual de um código de erro
  [ ] Documentar todos os códigos de erro (ERRO_PERMISSÃO .. ERRO_FORA_INTERVALO)

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: erro.defina_erro seguido de erro.obtenha_erro retorna o valor correto
  [ ] Teste: erro.mensagem retorna string não-nula para código válido
  [ ] Teste: erro.obtenha_erro sem erro anterior retorna 0

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_erro_obtenha_erro
  [ ] Implementar ctec_convencional_erro_defina_erro
  [ ] Implementar ctec_convencional_erro_mensagem
  [ ] Montar instância erro

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
