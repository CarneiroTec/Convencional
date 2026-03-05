===============================================================================
SPRINT 4 — MÓDULO ARQUIVO
===============================================================================
Prioridade: MÉDIA (depende de Dados)
Instância global: arquivo

Tipo: Pseudônimo Dados Arquivo (alias de Dados — campos herdados)

Funções Padrão do Gerenciador:
  - arquivo.crie(Imutável Caractere*, Imutável Caractere*)  → construtor
  - arquivo.destrua(Arquivo*)                                → destrutor (feche + libere)

Funções de I/O:
  - arquivo.abra, arquivo.feche
  - arquivo.leia, arquivo.escreva, arquivo.despeje
  - arquivo.escreva_formatado, arquivo.leia_formatado
  - arquivo.posicione, arquivo.obtenha_posição, arquivo.reinicie
  - arquivo.fim_arquivo, arquivo.erro_arquivo, arquivo.limpe_erro
  - arquivo.obtenha_caractere, arquivo.exiba_caractere
  - arquivo.obtenha_linha, arquivo.exiba_linha
  - arquivo.devolva_caractere
  - arquivo.defina_reserva, arquivo.configure_reserva
  - arquivo.temporário, arquivo.nome_temporário
  - arquivo.remova, arquivo.renomeie

Total de Funções: 27

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Arquivo.int (Arquivo, CtecErroArquivo, InterfaceGerenciadorArquivo)
  [ ] Documentar arquivo.crie — cria/abre arquivo em modo especificado
  [ ] Documentar arquivo.destrua — fecha e libera recursos do arquivo
  [ ] Documentar arquivo.abra — abre arquivo existente
  [ ] Documentar arquivo.feche — fecha arquivo aberto
  [ ] Documentar arquivo.leia — leitura binária de blocos
  [ ] Documentar arquivo.escreva — escrita binária de blocos
  [ ] Documentar arquivo.despeje — força escrita do buffer para disco
  [ ] Documentar arquivo.escreva_formatado — escrita formatada em arquivo
  [ ] Documentar arquivo.leia_formatado — leitura formatada de arquivo
  [ ] Documentar arquivo.posicione — move cursor para posição
  [ ] Documentar arquivo.obtenha_posição — retorna posição atual do cursor
  [ ] Documentar arquivo.reinicie — move cursor para o início
  [ ] Documentar arquivo.fim_arquivo — verifica se atingiu o fim do arquivo
  [ ] Documentar arquivo.erro_arquivo — verifica se houve erro no arquivo
  [ ] Documentar arquivo.limpe_erro — limpa indicadores de erro e fim
  [ ] Documentar arquivo.obtenha_caractere — lê um caractere do arquivo
  [ ] Documentar arquivo.exiba_caractere — escreve um caractere no arquivo
  [ ] Documentar arquivo.obtenha_linha — lê uma linha do arquivo
  [ ] Documentar arquivo.exiba_linha — escreve uma linha no arquivo
  [ ] Documentar arquivo.devolva_caractere — devolve caractere ao buffer de leitura
  [ ] Documentar arquivo.defina_reserva — define buffer com modo e tamanho
  [ ] Documentar arquivo.configure_reserva — configura buffer padrão
  [ ] Documentar arquivo.temporário — cria arquivo temporário anônimo
  [ ] Documentar arquivo.nome_temporário — gera nome temporário único
  [ ] Documentar arquivo.remova — remove arquivo do disco
  [ ] Documentar arquivo.renomeie — renomeia arquivo

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: arquivo.crie e arquivo.feche com sucesso
  [ ] Teste: arquivo.destrua libera arquivo sem falha
  [ ] Teste: escrita e leitura de caractere
  [ ] Teste: escrita e leitura de linha
  [ ] Teste: posicionamento e obtenha_posição
  [ ] Teste: escrita e leitura de blocos binários
  [ ] Teste: detecção de fim de arquivo e erro
  [ ] Teste: arquivos temporários e nomes temporários
  [ ] Teste: renomear e remover arquivo
  [ ] Teste: devolva_caractere
  [ ] Teste: escrita/leitura formatada e despeje
  [ ] Teste: configuração de reserva (buffer)

-------------------------------------------------------------------------------
Fase 3 — Implementação
-------------------------------------------------------------------------------
  [ ] Implementar todas as 27 funções ctec_convencional_arquivo_*
  [ ] Montar instância arquivo

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Arquivo.nld como objeto
  [ ] Incluir na biblioteca estática
  [ ] Incluir na biblioteca dinâmica

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo: arquivo.crie, arquivo.escreva, arquivo.feche, arquivo.remova

===============================================================================
