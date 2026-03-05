---
trigger: always_on
---

# NLD — Nildo Compilador

---

## IDENTIDADE

**Nome:** NLD — Nildo Compilador
**Tipo:** Linguagem de Programação em Português Brasileiro acentuado, sem anglicismos
**Compilador:** `nld`
**Ponto de Entrada:** `Início()`
**Tipagem:** Fraca e Estática

---

## EXEMPLO — Olá Mundo

```nld
// Usando biblioteca padrão
Externo Inteiro printf(Imutável Caractere*, ...);
#Defina exiba_formatado printf

Inteiro Início() {
    Imutável Caractere* mensagem = "Olá,";
    exiba_formatado("%s %s!\n", mensagem, "Mundo");
    Retorne 0;
}
```

**PowerShell:**
```powershell
nld.exe ola_mundo.nld
./ola_mundo
```

**CMD:**
```cmd
nld.exe ola_mundo.nld
ola_mundo
```

---

## PRÉ-PROCESSADORES

- `#Aviso`
- `#Erro`
- `#Diretiva`
- `#Inclua`
- `#Defina`
- `#SeDefinido`
- `#SeNãoDefinido`
- `#Esqueça`
- `#FimSe`

---

## ESPECIFICADORES DE ÂNCORAGEM

- `Fixo`
- `Externo`

---

## TIPOS DE DADOS

- `Vazio`
- `Lógico`
- `Inteiro`
- `Real`
- `Duplo`
- `Caractere`

---

## MODIFICADORES DE TIPOS

- `Curto`
- `Longo`
- `Natural`
- `Bilateral`

---

## QUALIFICADORES DE VARIÁVEL

- `Imutável`
- `Instável`
- `Integrado`
- `Exclusivo`

---

## ESTRUTURAS DE DADOS

- `Enumeração`
- `Estrutura`
- `Pseudônimo`
- `União`

---

## PONTEIROS

- Sinal de Ponteiro: `*`
- Operador de Referência: `&`

---

## CONTROLE DE FLUXO

- `Se`
- `Para`
- `Retorne`
- `Execute`

> ⚠️ Não existem nativamente: `Senão`, `SenãoSe`, `Enquanto`, `Faça...Enquanto`, `Troque...Caso`

---

## OPERADORES

| Categoria   | Operadores                           |
|-------------|--------------------------------------|
| Aritméticos | `+`, `-`, `*`, `/`, `%`, `++`, `--`  |
| Atribuição  | `=`, `+=`, `-=`, `*=`, `/=`, `%=`    |
| Bit a Bit   | `&`, `\|`, `^`, `~`, `<<`, `>>`      |
| Comparação  | `==`, `!=`, `>`, `<`, `>=`, `<=`     |

---

## FUNÇÕES DE COMPILADOR

- `afirme_constante`
- `atribua`
- `compare_tipo_compatível`
- `deduza`
- `escolha_expressão`
- `identifique`
- `Início`
- `Genérico`
- `meça`
- `Montador`
- `obtenha_alinhamento`
- `obtenha_endereço_pilha`
- `obtenha_endereço_retorno`

---

## MACROs DE COMPILADOR

- `ARQUIVO`
- `ARGUMENTOS_VARIÁVEIS`
- `DATA`
- `CONTADOR`
- `FUNÇÃO`
- `HORA`
- `LINHA`

---

## CONVENÇÕES DE NOMENCLATURA

| Elemento                  | Padrão                        | Exemplo                              |
|---------------------------|-------------------------------|--------------------------------------|
| Variáveis e Instâncias    | `primeiraMinúsculaSemEspaços` | `totalUsuários`                      |
| Funções                   | `minúsculasComSublinhado`     | `calcular_total`                     |
| Estruturas e Uniões       | `TodasIniciaisMaiúsculas`     | `CtecSistema`                        |
| Tabelas de Funções        | `Tabela` + iniciaisMaiúsculas | `TabelaSistema`                      |
| Tipos Enumerados          | `TodasIniciaisMaiúsculas`     | `CtecSistemaErro`                    |
| Valores Enumerados        | `MAIÚSCULAS_COM_SUBLINHADO`   | `CTEC_SISTEMA_ERRO_TEMPO_ESGOTADO`   |
| Símbolos                  | `[publicador]_[módulo]_[nome]`| `ctec_sistema_janela_crie`           |

---

## ARQUITETURA DE MÓDULOS

### Estrutura de Dados
Cada módulo deve conter uma `Estrutura` que armazena seus dados internos.

### Interface Gerenciador
Cada módulo deve ter uma interface `gerenciador` contendo:
- Funções `defina_[campo]` e `obtenha_[campo]` para cada campo da estrutura.
- Funções auxiliares do módulo.

### Instância Global
- Cada módulo deve ter uma instância global nomeada com o próprio nome do módulo.
- Toda instância global deve ser `Imutável`.

### Enumerações de Erro
Cada módulo deve declarar `Enumeração` cobrindo os possíveis erros do módulo.

### Implementações
Todas as funções de implementação de um módulo devem usar `Fixo`.

---

## FLUXO DE CONTRIBUIÇÃO

```
1. Crie uma branch com o nome da task
2. Crie a documentação do que será alterado
3. Crie o teste do que será alterado
4. Crie a implementação da alteração
5. Crie exemplo de uso
6. Faça merge na branch "release-ia"
```

> 📄 Documentação deve ser escrita em **HTML**.