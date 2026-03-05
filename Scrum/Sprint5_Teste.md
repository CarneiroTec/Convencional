===============================================================================
SPRINT 5 — MÓDULO TESTE
===============================================================================
Prioridade: MÉDIA (framework de testes utilizado por todos os outros módulos)
Instâncias globais: Imutável caso, Imutável grupo

===============================================================================
GERENCIADOR CASO (caso.*)
===============================================================================

Estrutura Caso (5 campos):
  estado, arquivo, função, linha, mensagem

Funções Padrão:
  - caso.crie(Caractere*, Caractere*, Inteiro, Caractere*) → construtor
  - caso.destrua(Caso*)                                     → destrutor
  - caso.clone(Caso*, Caso*)                               → estende instância
  - caso.instancie()                                         → construtor com macros auto

Acessores:
  - caso.defina_estado / caso.obtenha_estado
  - caso.defina_arquivo / caso.obtenha_arquivo
  - caso.defina_função / caso.obtenha_função
  - caso.defina_linha / caso.obtenha_linha
  - caso.defina_mensagem / caso.obtenha_mensagem

Total Caso: 14 funções

Fase 1 — Documentação:
  [ ] Documentar caso.crie — cria caso de teste com metadados explícitos
  [ ] Documentar caso.instancie — cria caso com macros ARQUIVO, FUNÇÃO, LINHA
  [ ] Documentar caso.destrua — limpa os campos do caso
  [ ] Documentar caso.clone — copia campos de origem para destino
  [ ] Documentar caso.defina_estado / caso.obtenha_estado
  [ ] Documentar caso.defina_arquivo / caso.obtenha_arquivo
  [ ] Documentar caso.defina_função / caso.obtenha_função
  [ ] Documentar caso.defina_linha / caso.obtenha_linha
  [ ] Documentar caso.defina_mensagem / caso.obtenha_mensagem

Fase 2 — Testes:
  [ ] Teste: caso.instancie preenche arquivo, função e linha automaticamente
  [ ] Teste: caso.crie preenche todos os campos corretamente
  [ ] Teste: caso.destrua zera todos os campos
  [ ] Teste: caso.clone copia todos os campos
  [ ] Teste: caso.defina_estado / caso.obtenha_estado retorna valor definido
  [ ] Teste: caso.defina_arquivo / caso.obtenha_arquivo retorna valor definido
  [ ] Teste: caso.defina_função / caso.obtenha_função retorna valor definido
  [ ] Teste: caso.defina_linha / caso.obtenha_linha retorna valor definido
  [ ] Teste: caso.defina_mensagem / caso.obtenha_mensagem retorna valor definido

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_teste_caso_crie
  [ ] Implementar ctec_convencional_teste_caso_instancie
  [ ] Implementar ctec_convencional_teste_caso_destrua
  [ ] Implementar ctec_convencional_teste_caso_clone
  [ ] Implementar 10 acessores (defina/obtenha × 5 campos)
  [ ] Montar instância caso

===============================================================================
GERENCIADOR GRUPO (grupo.*)
===============================================================================

Estrutura Grupo (5 campos):
  nome, listaCasos, quantidadeCasos, quantidadePassou, quantidadeFalhou

Funções Padrão:
  - grupo.crie(Caractere*)         → construtor
  - grupo.destrua(Grupo*)          → destrutor
  - grupo.clone(Grupo*, Grupo*)  → estende instância

Acessores:
  - grupo.defina_nome / grupo.obtenha_nome
  - grupo.obtenha_quantidade_casos
  - grupo.obtenha_quantidade_passou
  - grupo.obtenha_quantidade_falhou

Funções Específicas:
  - grupo.adicione(Grupo*, FunçãoTeste)
  - grupo.execute(Grupo*)

Total Grupo: 12 funções

Fase 1 — Documentação:
  [ ] Documentar grupo.crie — cria grupo de testes com nome
  [ ] Documentar grupo.destrua — limpa os campos do grupo
  [ ] Documentar grupo.clone — estende um grupo com outro
  [ ] Documentar grupo.adicione — adiciona função de teste ao grupo
  [ ] Documentar grupo.execute — executa todos os testes e exibe resumo
  [ ] Documentar grupo.defina_nome / grupo.obtenha_nome
  [ ] Documentar grupo.obtenha_quantidade_casos
  [ ] Documentar grupo.obtenha_quantidade_passou
  [ ] Documentar grupo.obtenha_quantidade_falhou

Fase 2 — Testes:
  [ ] Teste: grupo.crie inicializa com 0 casos
  [ ] Teste: grupo.destrua limpa todos os campos
  [ ] Teste: grupo.clone copia testes de um grupo para outro
  [ ] Teste: grupo.adicione incrementa contador
  [ ] Teste: grupo.adicione retorna falso quando grupo está cheio (256)
  [ ] Teste: grupo.execute conta passes e falhas corretamente
  [ ] Teste: grupo.defina_nome / grupo.obtenha_nome retorna valor definido
  [ ] Teste: grupo.obtenha_quantidade_casos reflete total de adições
  [ ] Teste: grupo.obtenha_quantidade_passou / grupo.obtenha_quantidade_falhou

Fase 3 — Implementação:
  [ ] Implementar ctec_convencional_teste_grupo_crie
  [ ] Implementar ctec_convencional_teste_grupo_destrua
  [ ] Implementar ctec_convencional_teste_grupo_clone
  [ ] Implementar ctec_convencional_teste_grupo_adicione
  [ ] Implementar ctec_convencional_teste_grupo_execute
  [ ] Implementar acessores (defina_nome, obtenha_nome, obtenha_quantidade_*)
  [ ] Montar instância grupo

===============================================================================
TOTAL MÓDULO TESTE: 26 funções (14 Caso + 12 Grupo)
===============================================================================

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
