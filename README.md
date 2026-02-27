# Convencional (Biblioteca CTEC)

Projeto de biblioteca base para a linguagem CTEC, contendo implementações padronizadas para operações comuns de sistema, entrada/saída, memória e testes unitários.

## Estrutura de Diretórios

O projeto segue um padrão estrito de separação entre Interface e Implementação:

*   **`Interface/`**: Define os tipos de dados `.int` e assinaturas das funções.
    *   *Regra*: Os arquivos aqui expõem as frentes (`Externo`) dos gerenciadores. O include central é `Convencional.int`.
*   **`Fonte/`**: Contém a implementação real em `.nld`.
    *   *Regra*: As funções são declaradas como `Fixo` (internas ao módulo) e exportadas através da struct `Gerenciador<Módulo>`.
*   **`Teste/Unidade/`**: Cada módulo possui uma subpasta com um arquivo `Teste<Módulo>.nld` (ex: `TesteDados.nld`) e o seu executável construído.
*   **`Construcao/Biblioteca/Objeto/`**: Contém os arquivos compilados `.o` estáticos de cada módulo (gerados a partir de `Fonte/`).

## Convenções de Nomenclatura

Para manter a consistência em todo o código, as seguintes regras são aplicadas estritamente (detalhadas em `Padrao de Desenvolvimento.md`):

| Objeto                 | Padrão                     | Exemplo                                                |
| :--------------------- | :------------------------- | :----------------------------------------------------- |
| **Variáveis Locais**   | `camelCase`                | `nomeArquivo`, `quantidadeCasos`, `vetorRealocado`     |
| **Campos de Structs**  | `camelCase`                | `listaCasos`, `deslocamentoInteiro`, `tamanhoReserva` |
| **Macros/Constantes**  | `MAIÚSCULAS_COM_SNAKE`     | `ARQUIVO`, `LINHA`, `ERRO_NÃO_EXISTE`                  |
| **Funções (públicas/privadas)** | `snake_case`      | `ctec_convencional_arquivo_abra`, `obtenha_relógio`    |
| **Tipos e Structs**    | `PascalCase`               | `Arquivo`, `Dados`, `ListaVariádicos`, `Caso`, `Grupo` |
| **Instâncias Globais** | `PascalCase`               | `GerenciadorMemória`, `GerenciadorErro`                |

**Importante:** A diretiva `#Defina` deve ser usada **exclusivamente** para Inludes Guards (ex: `#SeNãoDefinido ...`). Para constantes de valores em código, utilize a estrutura `Enumerador`.

## Lista de Módulos (Referência Rápida)

As funcionalidades são acessadas usando a sintaxe de gerenciadores, ex: `GerenciadorMemória.aloque(100)`.

**🌎 GerenciadorAmbiente**
* `defina_variável(nome, valor)`: Define variável de ambiente.
* `obtenha_variável(nome)`: Lê variável de ambiente.

**📄 GerenciadorArquivo**
* `abra(nomeArquivo, modo)` / `crie(...)`: Abre ou cria novo arquivo.
* `feche(arquivo)`: Fecha o arquivo.
* `leia(...)` / `escreva(...)`: I/O em bloco de memória.
* `leia_formatado(...)` / `escreva_formatado(...)`: I/O com formato (`printf`/`scanf`).
* `obtenha_caractere(...)` / `exiba_caractere(...)`: I/O caractere a caractere.
* `obtenha_linha(...)` / `exiba_linha(...)`: I/O linha a linha.
* `posicione(...)` / `obtenha_posição(...)` / `reinicie(...)`: Controle de cursor.
* `fim_arquivo(...)` / `erro_arquivo(...)` / `limpe_erro(...)`: Status e EOF.
* `temporário()` / `nome_temporário(...)`: Arquivos temporários.
* `remova(...)` / `renomeie(...)`: Sistema de arquivos.

**📦 GerenciadorDados**
* `aloque(tipo, reserva)`: Cria um buffer de blocos genéricos de dados.
* `limpe(dados)`: Reinicializa o construto sem liberar a base alocada.
* `libere(dados)`: Destrói permanentemente.

**🚨 GerenciadorErro**
* `defina_erro(valor)` / `obtenha_erro()`: Getter e Setter para diretiva global de falha.
* `mensagem(erro)`: Transforma um enumerador numânico num Caractere amigável.

**⚙️ GerenciadorExecução**
* `finalize(código)` / `finalize_imediamente(código)`: Termina o programa.
* `aborte()`: Encerra forçadamente por exceção.
* `suceda(função)`: Registra callacks a serem chamadas quando o programa finalizar com sucesso (`atexit`).

**🧠 GerenciadorMemória**
* `aloque(tamanho)`: Reserva bloco cru de memória (`malloc`).
* `aloque_zerado(quantidade, tamanho)`: Reserva garantindo bytes `0` (`calloc`).
* `realoque(ponteiro, novo_tamanho)`: Amplia blocos previamente tomados (`realloc`).
* `libere(ponteiro)`: Libera memória heap (`free`).

**⌚ GerenciadorTempo**
* `obtenha_tempo(ponteiro)`: Timestamp base sistema (UNIX Time).
* `obtenha_relógio()`: Quantidade de "ticks" de CPU.
* `aguarde(milissegundos)`: Paralisa a thread ativa por tempo (sleep).

**🖥️ GerenciadorTerminal**
* `exiba_texto(...)` / `leia_texto(...)`: I/O interativo da entrada principal (puts / gets).
* `exiba_formatado(...)` / `leia_formatado(...)`: Console estilizado (printf / scanf).
* `exiba_caractere(...)` / `leia_caractere(...)`: Lida com buffer primário nativo byte a byte.

**🧪 GerenciadorCaso / GerenciadorGrupo (Módulo Teste)**
* `GerenciadorCaso.instancie(nome, mensagem)`: Macro para criação unificada capturando `ARQUIVO`, `FUNÇÃO` e `LINHA`.
* `GerenciadorGrupo.crie(nome)`: Inicia suíte.
* `GerenciadorGrupo.adicione(grupo, funcao_mock)`: Escuta uma execução test case.
* `GerenciadorGrupo.execute(grupo)`: Processa árvore e emite relatório via Terminal informando taxa de sucesso % e onde cada falha ocorreu.

**🧩 GerenciadorVariádicos**
* `inicie(lista, quadroChamada)`: Escapa ponteiro p/ quadro (`va_start`).
* `obtenha(lista, tipo_argumento, tamanho_argumento, alinhamento_argumento)`: Processador iterável para retirar N argumentos.
* `copie(destino, origem)`: Cria branch ou sublista.
* `finalize(lista)`: Libera iterável (`va_end`).

## Como Compilar e Testar

Todo código fonte deve primeiro ser gerado em objeto antes do link do utilitário de testes ou empacotamento.

```powershell
# 1. Compilando os módulos em objetos (.o)
nld -c Fonte/Dados/Dados.nld -I Interface/ -o Construcao/Biblioteca/Objeto/Dados.o

# 2. Compilando o teste vinculando aos objetos criados
nld Teste/Unidade/Dados/TesteDados.nld Construcao/Biblioteca/Objeto/*.o -I Interface/ -o Teste/Unidade/Dados/TesteDados.exe

# 3. Rodando o teste
.\Teste\Unidade\Dados\TesteDados.exe
```

### Gerando Bibliotecas Distribuíveis

Você pode agrupar todos os `.o` gerados nas etapas anteriores em bibliotecas prontas para importação em outros projetos CTEC:

```powershell
# Gerar Biblioteca Estática (.a)
nld -ar rc Construcao/Biblioteca/Estatica/libConvencional.a Construcao/Biblioteca/Objeto/*.o

# Gerar Biblioteca Dinâmica (.dll)
nld -shared Construcao/Biblioteca/Objeto/*.o -o Construcao/Biblioteca/Dinamica/Convencional.dll
```

## Como Criar um Novo Módulo

1.  Crie `Interface/<Nome>/<Nome>.int` contendo suas estruturas em PascalCase e a interface `ModeloGerenciador<Nome>`.
2.  Adicione a linha `#Inclua "<Nome>/<Nome>.int"` em `Interface/Convencional.int`.
3.  Crie `Fonte/<Nome>/<Nome>.nld` agrupando todas as funções `Fixo` com nomes obedecendo prefixos do projeto, atribuindo-as a uma variável global exportada (ex: `Gerenciador<Nome>`).
4.  Crie `Teste/Unidade/<Nome>/Teste<Nome>.nld` e valide via `GerenciadorGrupo` todas as suas operações criadas cobrindo fluxos de erro e sucesso completo.
