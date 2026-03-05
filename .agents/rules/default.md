---
trigger: always_on
---

1. Crie uma branch com nome da task
2. Crie a documentação do que será alterado
3. Crie o teste do que será alterado
4. Crie a implementação da alteração
5. Crie exemplo de uso
6. De um merge na branch "release-ia"

- Documentação escrita com HTML
- Cada módulo deve conter uma estrutura que armazena dados
- Cada módulo deve ter uma interface "gerenciador" que possue as funções defina e obtenha dos campos da estrutura e as funções auxiliares
- Cada módulo deve ter uma instância global com o nome do módulo
- Cada módulo deve ter enumerações para possíveis erros.
- Cada módulo deve ter implementações cujo suas funções possuem o "Fixo"

- NOMENCLATURA
-------------------------------------------------------------------------------
Elemento                 | Padrão                       | Exemplo
-------------------------|-----------------------------|----------------------
Variáveis e Instâncias   | primeiraMinúsculaSemEspaços | totalUsuários
Funções                  | minúsculasComSublinhado     | calcular_total
Estruturas e Uniões      | todasIniciaisMaiúsculas     | CtecSistema
Tabelas de Funções       | Tabela + iniciaisMaiúsculas | TabelaSistema
Tipos Enumerados         | todasIniciaisMaiúsculas     | CtecSistemaErro
Valores Enumerados       | MAIÚSCULAS_COM_SUBLINHADO   | CTEC_SISTEMA_ERRO_TEMPO_ESGOTADO
Símbolos                 | [publicador]_[módulo]_[nome] | ctec_sistema_janela_crie
