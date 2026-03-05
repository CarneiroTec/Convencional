# CTEC Convencional — Referência Rápida

Biblioteca padrão da linguagem NLD.

```
#Inclua <Convencional.int>
```

## Compilação

```powershell
# Estática (tudo embutido no executável)
nld programa.nld -I Interface Construcao\libconvencional.a -o programa.exe

# Dinâmica (requer convencional.dll junto ao executável)
nld programa.nld -I Interface -L Construcao -lconvencional -o programa.exe
```

---

## 1. Sistema — `sistema`

Instância global `Imutável` com 5 sub-áreas acessadas via structs aninhadas.

### sistema.terminal

| Função | Uso |
|---|---|
| `exiba_caractere` | `sistema.terminal.exiba_caractere('A')` |
| `exiba_formatado` | `sistema.terminal.exiba_formatado("%d", x)` |
| `exiba_texto` | `sistema.terminal.exiba_texto("Olá")` |
| `leia_caractere` | `sistema.terminal.leia_caractere()` |
| `leia_formatado` | `sistema.terminal.leia_formatado("%d", &x)` |
| `leia_texto` | `sistema.terminal.leia_texto(buf)` |

### sistema.ambiente

| Função | Uso |
|---|---|
| `defina_variável` | `sistema.ambiente.defina_variável("NOME", "valor")` |
| `obtenha_variável` | `sistema.ambiente.obtenha_variável("NOME")` |

### sistema.execução

| Função | Uso |
|---|---|
| `aborte` | `sistema.execução.aborte()` |
| `finalize` | `sistema.execução.finalize(0)` |
| `finalize_imediamente` | `sistema.execução.finalize_imediamente(1)` |
| `suceda` | `sistema.execução.suceda(func)` |

### sistema.tempo

| Função | Uso |
|---|---|
| `obtenha_tempo` | `sistema.tempo.obtenha_tempo(&t)` |
| `obtenha_relógio` | `sistema.tempo.obtenha_relógio()` |
| `aguarde` | `sistema.tempo.aguarde(1000)` |

### sistema.memória

| Função | Uso |
|---|---|
| `aloque` | `sistema.memória.aloque(1024)` |
| `aloque_zerado` | `sistema.memória.aloque_zerado(10, 4)` |
| `realoque` | `sistema.memória.realoque(ptr, 2048)` |
| `libere` | `sistema.memória.libere(ptr)` |

---

## 2. Arquivo — `arquivo`

Encapsula I/O de arquivo (fopen, fread, fprintf, etc.). `Arquivo` é pseudônimo de `Dados`.

| Função | Uso |
|---|---|
| `crie` | `arquivo.crie("nome.txt", "w")` |
| `abra` | `arquivo.abra("nome.txt", "r")` |
| `feche` | `arquivo.feche(arq)` |
| `leia` | `arquivo.leia(buf, tam, qtd, arq)` |
| `escreva` | `arquivo.escreva(buf, tam, qtd, arq)` |
| `despeje` | `arquivo.despeje(arq)` |
| `escreva_formatado` | `arquivo.escreva_formatado(arq, "%d", x)` |
| `leia_formatado` | `arquivo.leia_formatado(arq, "%d", &x)` |
| `posicione` | `arquivo.posicione(arq, 0, 0)` |
| `obtenha_posição` | `arquivo.obtenha_posição(arq)` |
| `reinicie` | `arquivo.reinicie(arq)` |
| `fim_arquivo` | `arquivo.fim_arquivo(arq)` |
| `erro_arquivo` | `arquivo.erro_arquivo(arq)` |
| `limpe_erro` | `arquivo.limpe_erro(arq)` |
| `obtenha_caractere` | `arquivo.obtenha_caractere(arq)` |
| `exiba_caractere` | `arquivo.exiba_caractere('A', arq)` |
| `obtenha_linha` | `arquivo.obtenha_linha(buf, n, arq)` |
| `exiba_linha` | `arquivo.exiba_linha("texto", arq)` |
| `devolva_caractere` | `arquivo.devolva_caractere('X', arq)` |
| `defina_reserva` | `arquivo.defina_reserva(arq, buf, modo, tam)` |
| `configure_reserva` | `arquivo.configure_reserva(arq, buf)` |
| `temporário` | `arquivo.temporário()` |
| `nome_temporário` | `arquivo.nome_temporário(buf)` |
| `remova` | `arquivo.remova("nome.txt")` |
| `renomeie` | `arquivo.renomeie("a.txt", "b.txt")` |

---

## 3. Dados — `dados`

Estrutura genérica de dados com 8 campos e gerenciamento de ciclo de vida.

| Função | Uso |
|---|---|
| `crie` | `Dados d = dados.crie()` |
| `destrua` | `dados.destrua(&d)` |
| `copie` | `dados.copie(&dest, &orig)` — cópia rasa |
| `clone` | `dados.clone(&dest, &orig)` — cópia profunda |
| `inicialize` | `dados.inicialize(&d)` |
| `limpe` | `dados.limpe(&d)` |
| `defina_ponteiro` / `obtenha_ponteiro` | Caractere* |
| `defina_tamanho` / `obtenha_tamanho` | Inteiro |
| `defina_base` / `obtenha_base` | Caractere* |
| `defina_tipo` / `obtenha_tipo` | Inteiro |
| `defina_arquivo` / `obtenha_arquivo` | Inteiro |
| `defina_reserva_caractere` / `obtenha_reserva_caractere` | Inteiro |
| `defina_tamanho_reserva` / `obtenha_tamanho_reserva` | Inteiro |
| `defina_nome_arquivo` / `obtenha_nome_arquivo` | Caractere* |

---

## 4. Erro — `erro`

Tratamento de erros com 34 códigos pré-definidos (ERRO_PERMISSÃO, ERRO_NÃO_EXISTE, etc.).

| Função | Uso |
|---|---|
| `obtenha_erro` | `Erro e = erro.obtenha_erro()` |
| `defina_erro` | `erro.defina_erro(ERRO_PERMISSÃO)` |
| `mensagem` | `erro.mensagem(ERRO_PERMISSÃO)` → `"Permissão negada"` |

---

## 5. Teste — `caso` + `grupo`

Framework de testes unitários.

### caso

| Função | Uso |
|---|---|
| `crie` | `caso.crie(arq, func, lin, msg)` |
| `instancie` | `caso.instancie()` — usa macros ARQUIVO, FUNÇÃO, LINHA |
| `destrua` | `caso.destrua(&c)` |

### grupo

| Função | Uso |
|---|---|
| `crie` | `Grupo g = grupo.crie("Nome")` |
| `adicione` | `grupo.adicione(&g, meu_teste)` |
| `execute` | `grupo.execute(&g)` |
| `destrua` | `grupo.destrua(&g)` |

---

## 6. Variádicos — `variádicos`

Suporte a argumentos variádicos (va_start, va_arg, va_copy, va_end).

| Função | Uso |
|---|---|
| `inicie` | `variádicos.inicie(&lista, quadro)` |
| `obtenha` | `variádicos.obtenha(&lista, tipo, tam, alin)` |
| `copie` | `variádicos.copie(&dest, &orig)` |
| `finalize` | `variádicos.finalize(&lista)` |

---

## Exemplo Completo

```nld
#Inclua <Convencional.int>

Inteiro Início() {
    // Terminal
    sistema.terminal.exiba_texto("Olá, Mundo!");
    sistema.terminal.exiba_formatado("2 + 3 = %d\n", 5);

    // Memória
    Inteiro *p = (Inteiro*)sistema.memória.aloque(meça(Inteiro) * 10);
    *p = 42;
    sistema.terminal.exiba_formatado("Valor: %d\n", *p);
    sistema.memória.libere(p);

    // Arquivo
    Arquivo *arq = arquivo.crie("saida.txt", "w");
    arquivo.escreva_formatado(arq, "Gerado pela Convencional!\n");
    arquivo.feche(arq);
    arquivo.remova("saida.txt");

    // Tempo
    Longo agora = sistema.tempo.obtenha_tempo((Vazio*)0);
    sistema.terminal.exiba_formatado("Timestamp: %ld\n", agora);

    Retorne 0;
}
```

---

## Estrutura do Projeto

```
Convencional/
├── Interface/           ← cabeçalhos (.int)
│   ├── Convencional.int ← inclui todos os módulos
│   ├── Arquivo/
│   ├── Dados/
│   ├── Erro/
│   ├── Sistema/
│   ├── Teste/
│   └── Variadicos/
├── Fonte/               ← implementações (.nld)
├── Teste/Unidade/       ← testes unitários
├── Exemplo/             ← exemplos de uso
└── Construcao/          ← bibliotecas geradas
    ├── libconvencional.a
    └── convencional.dll
```
