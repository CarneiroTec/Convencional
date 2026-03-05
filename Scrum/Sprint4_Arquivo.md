===============================================================================
SPRINT 4 — MÓDULO ARQUIVO
===============================================================================
Prioridade: MÉDIA (depende de Dados)

Funções:
  - crie, abra, feche
  - leia, escreva, despeje
  - escreva_formatado, leia_formatado
  - posicione, obtenha_posição, reinicie
  - fim_arquivo, erro_arquivo, limpe_erro
  - obtenha_caractere, exiba_caractere
  - obtenha_linha, exiba_linha
  - devolva_caractere
  - defina_reserva, configure_reserva
  - temporário, nome_temporário
  - remova, renomeie

-------------------------------------------------------------------------------
Fase 1 — Documentação
-------------------------------------------------------------------------------
  [ ] Documentar Arquivo.int (tipo Arquivo, CtecErroArquivo, InterfaceGerenciadorArquivo)
  [ ] Documentar crie — cria arquivo em modo especificado
  [ ] Documentar abra — abre arquivo existente
  [ ] Documentar feche — fecha arquivo aberto
  [ ] Documentar leia — leitura binária de blocos
  [ ] Documentar escreva — escrita binária de blocos
  [ ] Documentar despeje — força escrita do buffer para disco
  [ ] Documentar escreva_formatado — escrita formatada em arquivo
  [ ] Documentar leia_formatado — leitura formatada de arquivo
  [ ] Documentar posicione — move cursor para posição
  [ ] Documentar obtenha_posição — retorna posição atual do cursor
  [ ] Documentar reinicie — move cursor para o início
  [ ] Documentar fim_arquivo — verifica se atingiu o fim do arquivo
  [ ] Documentar erro_arquivo — verifica se houve erro no arquivo
  [ ] Documentar limpe_erro — limpa indicadores de erro e fim
  [ ] Documentar obtenha_caractere — lê um caractere do arquivo
  [ ] Documentar exiba_caractere — escreve um caractere no arquivo
  [ ] Documentar obtenha_linha — lê uma linha do arquivo
  [ ] Documentar exiba_linha — escreve uma linha no arquivo
  [ ] Documentar devolva_caractere — devolve caractere ao buffer de leitura
  [ ] Documentar defina_reserva — define buffer com modo e tamanho
  [ ] Documentar configure_reserva — configura buffer padrão
  [ ] Documentar temporário — cria arquivo temporário anônimo
  [ ] Documentar nome_temporário — gera nome temporário único
  [ ] Documentar remova — remove arquivo do disco
  [ ] Documentar renomeie — renomeia arquivo

-------------------------------------------------------------------------------
Fase 2 — Testes
-------------------------------------------------------------------------------
  [ ] Teste: crie e feche arquivo com sucesso
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
  [ ] Implementar todas as 25 funções ctec_convencional_arquivo_*
  [ ] Montar instância GerenciadorArquivo

-------------------------------------------------------------------------------
Fase 4 — Biblioteca
-------------------------------------------------------------------------------
  [ ] Compilar Arquivo.nld como objeto
  [ ] Incluir na biblioteca estática
  [ ] Incluir na biblioteca dinâmica

-------------------------------------------------------------------------------
Fase 5 — Exemplo
-------------------------------------------------------------------------------
  [ ] Criar exemplo: criar arquivo, escrever, ler, fechar e remover

===============================================================================
