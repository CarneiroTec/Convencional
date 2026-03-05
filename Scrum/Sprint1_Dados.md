===============================================================================
SPRINT 1 — MÓDULO DADOS
===============================================================================
Prioridade: ALTA (dependência de Arquivo e outros módulos)
Instância global: Imutável dados

Estrutura Dados (8 campos):
  ponteiro, tamanho, base, tipo, arquivo,
  reservaCaractere, tamanhoReserva, nomeArquivo

Funções Padrão do Gerenciador:
  - dados.crie()                     → construtor
  - dados.destrua(Dados*)            → destrutor
  - dados.extenda(Dados*, Dados*)    → estende uma instância com outra

Acessores (defina/obtenha por campo):
  - dados.defina_ponteiro / dados.obtenha_ponteiro
  - dados.defina_tamanho / dados.obtenha_tamanho
  - dados.defina_base / dados.obtenha_base
  - dados.defina_tipo / dados.obtenha_tipo
  - dados.defina_arquivo / dados.obtenha_arquivo
  - dados.defina_reserva_caractere / dados.obtenha_reserva_caractere
  - dados.defina_tamanho_reserva / dados.obtenha_tamanho_reserva
  - dados.defina_nome_arquivo / dados.obtenha_nome_arquivo

Funções Auxiliares:
  - dados.inicialize(Dados*)
  - dados.limpe(Dados*)

Total de Funções: 21

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Dados.int (Dados, CtecErroDados, InterfaceGerenciadorDados)
  [ ] Documentar dados.crie — aloca e retorna instância inicializada
  [ ] Documentar dados.destrua — libera instância alocada
  [ ] Documentar dados.extenda — copia campos de origem para destino
  [ ] Documentar dados.inicialize — inicializa campos com valores padrão
  [ ] Documentar dados.limpe — reinicia campos para valores padrão
  [ ] Documentar dados.defina_ponteiro / dados.obtenha_ponteiro
  [ ] Documentar dados.defina_tamanho / dados.obtenha_tamanho
  [ ] Documentar dados.defina_base / dados.obtenha_base
  [ ] Documentar dados.defina_tipo / dados.obtenha_tipo
  [ ] Documentar dados.defina_arquivo / dados.obtenha_arquivo
  [ ] Documentar dados.defina_reserva_caractere / dados.obtenha_reserva_caractere
  [ ] Documentar dados.defina_tamanho_reserva / dados.obtenha_tamanho_reserva
  [ ] Documentar dados.defina_nome_arquivo / dados.obtenha_nome_arquivo

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: dados.crie retorna ponteiro não-nulo
  [ ] Teste: dados.destrua libera sem falha
  [ ] Teste: dados.destrua com ponteiro nulo não causa falha
  [ ] Teste: dados.extenda copia todos os campos corretamente
  [ ] Teste: dados.inicialize zera todos os campos
  [ ] Teste: dados.inicialize com ponteiro nulo não causa falha
  [ ] Teste: dados.limpe reinicia os campos após modificação
  [ ] Teste: dados.limpe com ponteiro nulo não causa falha
  [ ] Teste: dados.defina_ponteiro / dados.obtenha_ponteiro retorna valor definido
  [ ] Teste: dados.defina_tamanho / dados.obtenha_tamanho retorna valor definido
  [ ] Teste: dados.defina_base / dados.obtenha_base retorna valor definido
  [ ] Teste: dados.defina_tipo / dados.obtenha_tipo retorna valor definido
  [ ] Teste: dados.defina_arquivo / dados.obtenha_arquivo retorna valor definido
  [ ] Teste: dados.defina_reserva_caractere / dados.obtenha_reserva_caractere
  [ ] Teste: dados.defina_tamanho_reserva / dados.obtenha_tamanho_reserva
  [ ] Teste: dados.defina_nome_arquivo / dados.obtenha_nome_arquivo

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar ctec_convencional_dados_crie
  [ ] Implementar ctec_convencional_dados_destrua
  [ ] Implementar ctec_convencional_dados_extenda
  [ ] Implementar ctec_convencional_dados_inicialize
  [ ] Implementar ctec_convencional_dados_limpe
  [ ] Implementar ctec_convencional_dados_defina_ponteiro
  [ ] Implementar ctec_convencional_dados_obtenha_ponteiro
  [ ] Implementar ctec_convencional_dados_defina_tamanho
  [ ] Implementar ctec_convencional_dados_obtenha_tamanho
  [ ] Implementar ctec_convencional_dados_defina_base
  [ ] Implementar ctec_convencional_dados_obtenha_base
  [ ] Implementar ctec_convencional_dados_defina_tipo
  [ ] Implementar ctec_convencional_dados_obtenha_tipo
  [ ] Implementar ctec_convencional_dados_defina_arquivo
  [ ] Implementar ctec_convencional_dados_obtenha_arquivo
  [ ] Implementar ctec_convencional_dados_defina_reserva_caractere
  [ ] Implementar ctec_convencional_dados_obtenha_reserva_caractere
  [ ] Implementar ctec_convencional_dados_defina_tamanho_reserva
  [ ] Implementar ctec_convencional_dados_obtenha_tamanho_reserva
  [ ] Implementar ctec_convencional_dados_defina_nome_arquivo
  [ ] Implementar ctec_convencional_dados_obtenha_nome_arquivo
  [ ] Montar instância dados

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Dados.nld como objeto
  [ ] Incluir na biblioteca estática (.a / .lib)
  [ ] Incluir na biblioteca dinâmica (.so / .dll)

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo: criar, acessar campos, estender e destruir Dados

===============================================================================
