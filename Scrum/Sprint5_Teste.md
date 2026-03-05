===============================================================================
SPRINT 5 — MÓDULO TESTE
===============================================================================
Prioridade: MÉDIA (framework de testes utilizado por todos os outros módulos)

Funções (Caso):
  - crie(Caractere*, Caractere*, Inteiro, Caractere*)
  - instancie()
  - destrua(Caso*)

Funções (Grupo):
  - crie(Caractere*)
  - adicione(Grupo*, FunçãoTeste)
  - execute(Grupo*)
  - destrua(Grupo*)

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Teste.int (Caso, Grupo, FunçãoTeste, CtecErroTeste)
  [ ] Documentar Caso.crie — cria caso de teste com metadados explícitos
  [ ] Documentar Caso.instancie — cria caso com metadados automáticos (ARQUIVO, FUNÇÃO, LINHA)
  [ ] Documentar Caso.destrua — limpa os campos do caso
  [ ] Documentar Grupo.crie — cria grupo de testes com nome
  [ ] Documentar Grupo.adicione — adiciona função de teste ao grupo
  [ ] Documentar Grupo.execute — executa todos os testes e exibe resumo
  [ ] Documentar Grupo.destrua — limpa os campos do grupo

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: Caso.instancie preenche arquivo, função e linha automaticamente
  [ ] Teste: Caso.crie preenche todos os campos corretamente
  [ ] Teste: Caso.destrua zera todos os campos
  [ ] Teste: Grupo.crie inicializa com 0 casos
  [ ] Teste: Grupo.adicione incrementa contador
  [ ] Teste: Grupo.adicione retorna falso quando grupo está cheio (256)
  [ ] Teste: Grupo.execute conta passes e falhas corretamente
  [ ] Teste: Grupo.destrua limpa todos os campos

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_teste_caso_crie
  [ ] Implementar ctec_convencional_teste_caso_instancie
  [ ] Implementar ctec_convencional_teste_caso_destrua
  [ ] Implementar ctec_convencional_teste_grupo_crie
  [ ] Implementar ctec_convencional_teste_grupo_adicione
  [ ] Implementar ctec_convencional_teste_grupo_execute
  [ ] Implementar ctec_convencional_teste_grupo_destrua
  [ ] Montar instâncias GerenciadorCaso e GerenciadorGrupo

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Teste.nld como objeto
  [ ] Incluir na biblioteca estática
  [ ] Incluir na biblioteca dinâmica

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo: grupo com 3 casos de teste (1 passe, 1 falha, 1 passe)

===============================================================================
