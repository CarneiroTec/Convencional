# Padrão de Desenvolvimento — Projeto Convencional

> Documento de referência extraído dos arquivos-fonte do projeto **Convencional** (CTEC).

---

## 1. Estrutura de Diretórios

```
Convencional/
├── Projeto.nds                  # Metadados do projeto
├── Inicio.ctec                  # Ponto de entrada
├── Dependencia/
│   └── Autocarregamento.nld     # Inclui automaticamente todas as interfaces
├── Interface/
│   ├── Convencional.int         # Interface raiz (agrupa todos os módulos)
│   ├── Arquivo/
│   │   └── Arquivo.int          # Interface do módulo Arquivo
│   ├── Dados/
│   │   └── Dados.int            # Interface do módulo Dados
│   ├── Teste/
│   │   ├── Teste.int            # Interface raiz do módulo Teste
│   │   ├── Caso.int             # Definição da estrutura Caso
│   │   └── Grupo.int            # Definição da estrutura Grupo
│   └── ...                      # Demais módulos (Memoria, Erro, etc.)
├── Fonte/
│   ├── Convencional.nld         # Fonte raiz (autocarregamento)
│   ├── Arquivo/
│   │   └── Arquivo.nld          # Implementação do módulo Arquivo
│   ├── Teste/
│   │   └── Grupo.nld            # Implementação do módulo Teste/Grupo
│   └── ...
├── Teste/
│   ├── Teste.nld                # Cabeçalho de teste (autocarregamento)
│   └── Unidade/
│       ├── Arquivo/
│       │   └── TesteArquivo.nld # Testes unitários do módulo Arquivo
│       ├── Teste/
│       │   ├── TesteCaso.nld    # Testes unitários do módulo Caso
│       │   └── TesteGrupo.nld   # Testes unitários do módulo Grupo
│       └── ...
└── Construcao/                  # Artefatos de compilação
```

### Regra geral

| Camada          | Diretório     | Extensão | Responsabilidade                          |
|-----------------|---------------|----------|-------------------------------------------|
| Interface       | `Interface/`  | `.int`   | Definição de tipos, estruturas e contratos |
| Implementação   | `Fonte/`      | `.nld`   | Lógica concreta de cada módulo             |
| Teste           | `Teste/`      | `.nld`   | Testes unitários e de integração           |
| Dependência     | `Dependencia/`| `.nld`   | Autocarregamento de interfaces             |

---

## 2. Convenção de Nomes

### 2.1 Regras de Caixa

| Elemento               | Convenção     | Exemplo                                         |
|------------------------|---------------|-------------------------------------------------|
| Variáveis locais       | **camelCase**  | `novoGrupo`, `percentual`, `vetorRealocado`     |
| Campos de struct       | **camelCase**  | `quantidadeCasos`, `listaCasos`, `nomeArquivo`  |
| Funções                | **snake_case** | `testa_abertura_fechamento`, `auxiliar_sempre_passa` |
| Funções internas (Fixo)| **snake_case com prefixo** | `ctec_convencional_arquivo_abra`   |
| Tipos / Estruturas     | **PascalCase** | `Grupo`, `Caso`, `Arquivo`, `Dados`             |
| Instâncias globais     | **PascalCase** | `GerenciadorArquivo`, `GerenciadorGrupo`         |

### 2.2 Uso de `#Defina`

> **`#Defina` deve ser usado SOMENTE para guardas de inclusão.**

Para constantes, use **Enumeradores** ou **tabelas** (structs com valores fixos):

```nld
// ❌ ERRADO — não use #Defina para constantes
#Defina ERRO_PERMISSÃO 1
#Defina ERRO_NÃO_EXISTE 2

// ✅ CORRETO — use Enumerador
Enumerador {
    ERRO_PERMISSÃO = 1,
    ERRO_NÃO_EXISTE = 2
};
```

### 2.3 Guardas de Inclusão

```nld
#SeNãoDefinido CTEC_CONVENCIONAL_<MÓDULO>
#Defina CTEC_CONVENCIONAL_<MÓDULO>

// conteúdo

#FimSe
```

**Padrão:** `CTEC_<PROJETO>_<CAMINHO_DO_MÓDULO>` (separado por `_`, em maiúsculas).

### 2.4 Funções Internas (Fixas)

Funções de implementação usam o qualificador `Fixo` e seguem a nomenclatura:

```
ctec_<projeto>_<módulo>_<ação>
```

**Exemplos:**

```nld
Fixo Arquivo *ctec_convencional_arquivo_abra(...)
Fixo Grupo    ctec_convencional_teste_grupo_crie(...)
Fixo Lógico   ctec_convencional_teste_grupo_execute(...)
```

### 2.5 Instâncias Globais (Gerenciadores)

Cada módulo expõe uma instância global que agrupa todas as operações:

| Módulo   | Tipo da Interface          | Instância Global      |
|----------|----------------------------|-----------------------|
| Arquivo  | `ModeloGerenciadorArquivo` | `GerenciadorArquivo`  |
| Dados    | `InterfaceGerenciadorDados`| `GerenciadorDados`    |
| Grupo    | `InterfaceGerenciadorGrupo`| `GerenciadorGrupo`    |
| Caso     | `InterfaceGerenciadorCaso` | `GerenciadorCaso`     |
| Memória  | `InterfaceGerenciadorMemória`| `GerenciadorMemória`|

---

## 3. Padrão de Interface (`.int`)

Uma interface define o **contrato público** de um módulo: tipos, ponteiros de função e a declaração externa do gerenciador.

### Modelo

```nld
#SeNãoDefinido CTEC_CONVENCIONAL_<MÓDULO>
#Defina CTEC_CONVENCIONAL_<MÓDULO>

// 1. Dependências de outras interfaces
#Inclua "../OutroMódulo/OutroMódulo.int"

// 2. Definição de tipos (campos em camelCase)
Pseudônimo Estrutura {
    TipoCampo nomeCampo;
} NomeTipo;

// 3. Interface do gerenciador (tabela de funções)
Pseudônimo Estrutura {
    TipoRetorno (*nome_operação)(TipoParam param, ...);
} InterfaceGerenciadorNomeTipo;

// 4. Declaração externa da instância global
Externo InterfaceGerenciadorNomeTipo GerenciadorNomeTipo;

#FimSe
```

### Exemplo real: `Grupo.int`

```nld
#SeNãoDefinido CTEC_CONVENCIONAL_TESTE_GRUPO
#Defina CTEC_CONVENCIONAL_TESTE_GRUPO

Pseudônimo Caso (*FunçãoTeste)(Vazio);

Pseudônimo Estrutura {
    Caractere *nome;
    FunçãoTeste listaCasos[256];
    Inteiro quantidadeCasos;
    Inteiro quantidadePassou;
    Inteiro quantidadeFalhou;
} Grupo;

Pseudônimo Estrutura {
    Grupo (*crie)(Caractere* nome);
    Lógico (*adicione)(Grupo* grupo, FunçãoTeste função);
    Lógico (*execute)(Grupo* grupo);
    Lógico (*destrua)(Grupo* grupo);
} InterfaceGerenciadorGrupo;

Externo InterfaceGerenciadorGrupo GerenciadorGrupo;

#FimSe
```

---

## 4. Padrão de Implementação (`.nld`)

A implementação é a camada que contém a lógica concreta e inicializa o gerenciador global.

### Modelo

```nld
#Inclua <Convencional.int>

// 1. Declarações externas de funções C necessárias
Externo TipoRetorno funcao_c(TipoParam, ...);

// 2. Funções internas com prefixo qualificado (snake_case)
Fixo TipoRetorno ctec_convencional_<módulo>_<ação>(TipoParam param) {
    // variáveis locais em camelCase
    TipoLocal minhaVariável = valor;
    // implementação...
}

// 3. Inicialização do gerenciador global
InterfaceGerenciadorNome GerenciadorNome = {
    .operação_1 = ctec_convencional_<módulo>_operação_1,
    .operação_2 = ctec_convencional_<módulo>_operação_2,
};
```

---

## 5. Padrão de Testes Unitários

### 5.1 Informações Obrigatórias em Falhas

Quando um teste falha, o framework **DEVE** exibir:
- **Arquivo** — caminho do arquivo de teste
- **Função** — nome da função que falhou
- **Linha** — número da linha onde ocorreu a falha

Isso é garantido por:
1. Inicializar o `Caso` com `ARQUIVO`, `FUNÇÃO` e `LINHA`
2. Atualizar `caso.linha = LINHA` em cada ponto de falha
3. Usar `GerenciadorGrupo.execute()` que imprime essas informações automaticamente

### 5.2 Estrutura de um Caso de Teste

```nld
Caso nome_do_teste() {
    Caso caso = {
        .estado = 1,           // 1 = sucesso por padrão
        .arquivo = ARQUIVO,    // macro: caminho do arquivo
        .função = FUNÇÃO,      // macro: nome da função
        .linha = LINHA,        // macro: número da linha
        .mensagem = ""
    };

    // Lógica do teste...

    Se (condição_de_falha) {
        caso.estado = 0;
        caso.linha = LINHA;    // atualiza a linha do ponto de falha
        caso.mensagem = "Falhou: descrição do problema";
        Retorne caso;
    }

    caso.mensagem = "Passou: descrição do sucesso";
    Retorne caso;
}
```

> **Nota:** Não é necessário reatribuir `caso.arquivo` e `caso.função` em cada ponto de falha — eles já foram definidos na inicialização. Apenas `caso.linha = LINHA` precisa ser atualizado para indicar o ponto exato da falha.

### 5.3 Estrutura do Arquivo de Teste

```nld
// 1. Inclusão do cabeçalho de teste
#Inclua "../../Teste.nld"

// 2. Funções de teste individuais (snake_case)
Caso testa_funcionalidade_a() { /* ... */ }
Caso testa_funcionalidade_b() { /* ... */ }

// 3. Função principal que registra e executa
Inteiro Início() {
    Grupo grupo = GerenciadorGrupo.crie("Nome do Grupo");

    GerenciadorGrupo.adicione(&grupo, testa_funcionalidade_a);
    GerenciadorGrupo.adicione(&grupo, testa_funcionalidade_b);

    GerenciadorGrupo.execute(&grupo);
    GerenciadorGrupo.destrua(&grupo);

    Retorne 0;
}
```

### 5.4 Boas Práticas de Teste

1. **Sempre use `GerenciadorGrupo`** — nunca imprima resultados manualmente
2. **Sempre chame `GerenciadorGrupo.destrua()`** — libere recursos após execução
3. **Limpeza de recursos** — feche e remova arquivos temporários (`*.tmp`) após uso
4. **`caso.linha = LINHA`** em cada ponto de falha — para localização precisa
5. **Mensagens descritivas** — prefixar com `"Passou: "` ou `"Falhou: "`
6. **Estado padrão sucesso** — inicializar `caso.estado = 1`, alterar para `0` na falha
7. **Retorno imediato na falha** — retornar o `Caso` logo após detectar falha

### 5.5 Localização dos Testes

| Tipo               | Caminho                                      |
|--------------------|----------------------------------------------|
| Testes unitários   | `Teste/Unidade/<Módulo>/Teste<Módulo>.nld`   |
| Testes de integração | `Teste/Integracao/`                        |

---

## 6. Autocarregamento e Inclusão

### Cadeia de inclusão

```
Teste.nld  ──(inclui)──>  Dependencia/Autocarregamento.nld
                               │
                               └──(inclui)──>  Interface/Convencional.int
                                                    │
                                                    ├── Arquivo/Arquivo.int
                                                    ├── Dados/Dados.int
                                                    ├── Memoria/Memoria.int
                                                    └── Teste/Teste.int
                                                          ├── Caso.int
                                                          └── Grupo.int
```

**Princípio:** Um único `#Inclua` do autocarregamento disponibiliza **todas** as interfaces do projeto.

---

## 7. Fluxo para Criar um Novo Módulo

1. **Criar a interface** em `Interface/<Módulo>/<Módulo>.int`
   - Definir tipos com `Pseudônimo Estrutura { ... } NomeTipo;` (campos em snake_case)
   - Definir a interface do gerenciador com ponteiros de função
   - Declarar `Externo InterfaceGerenciadorNome GerenciadorNome;`

2. **Registrar** a nova interface no `Convencional.int`:
   ```nld
   #Inclua "<Módulo>/<Módulo>.int"
   ```

3. **Criar a implementação** em `Fonte/<Módulo>/<Módulo>.nld`
   - Incluir `<Convencional.int>`
   - Implementar funções `Fixo` com prefixo `ctec_convencional_<módulo>_<ação>`
   - Variáveis locais em camelCase
   - Inicializar a instância global do gerenciador

4. **Criar os testes unitários** em `Teste/Unidade/<Módulo>/Teste<Módulo>.nld`
   - Incluir `../../Teste.nld`
   - Escrever funções `Caso testa_<cenário>()`
   - Registrar e executar via `GerenciadorGrupo` na função `Início()`
   - **Sempre** chamar `GerenciadorGrupo.destrua()`

---

## 8. Palavras-Chave da Linguagem NLD

| NLD               | Equivalente C     |
|-------------------|-------------------|
| `Pseudônimo`      | `typedef`         |
| `Estrutura`       | `struct`          |
| `Enumerador`      | `enum`            |
| `União`           | `union`           |
| `Externo`         | `extern`          |
| `Fixo`            | `static`          |
| `Imutável`        | `const`           |
| `Retorne`         | `return`          |
| `Se`              | `if`              |
| `Enquanto`        | `while`           |
| `Para`            | `for`             |
| `Vazio`           | `void`            |
| `Inteiro`         | `int`             |
| `Natural`         | `unsigned`        |
| `Caractere`       | `char`            |
| `Longo`           | `long`            |
| `Real`            | `float`/`double`  |
| `Lógico`          | `bool` / `int`    |
| `meça`            | `sizeof`          |
| `Início`          | `main`            |
| `#SeNãoDefinido`  | `#ifndef`         |
| `#Defina`         | `#define`         |
| `#Inclua`         | `#include`        |
| `#FimSe`          | `#endif`          |
| `ARQUIVO`         | `__FILE__`        |
| `FUNÇÃO`          | `__func__`        |
| `LINHA`           | `__LINE__`        |

---

## 9. Metadados do Projeto (`Projeto.nds`)

```
Nome = "Convencional",
Publicador = "CTEC",
Descrição = "Biblioteca Convencional para Linguagem CTEC",
Versão = "0.1.0",

Dependências = {},
```

---

## 10. Checklist para Novo Módulo

- [ ] Criar `Interface/<Módulo>/<Módulo>.int` com tipos (campos camelCase) e gerenciador
- [ ] Adicionar `#Inclua` em `Interface/Convencional.int`
- [ ] Criar `Fonte/<Módulo>/<Módulo>.nld` com implementação (funções snake_case, variáveis/campos camelCase)
- [ ] Inicializar instância global do gerenciador
- [ ] Criar `Teste/Unidade/<Módulo>/Teste<Módulo>.nld`
- [ ] Testar **todas** as operações do gerenciador
- [ ] Registrar testes no `GerenciadorGrupo` dentro de `Início()`
- [ ] Chamar `GerenciadorGrupo.destrua()` após execução
- [ ] Executar testes e verificar 100% de aprovação
