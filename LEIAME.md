===============================================================================
CTEC CONVENCIONAL — EXEMPLO DE IMPLEMENTAÇÃO
===============================================================================

1) DETECÇÃO DE PLATAFORMA

Arquivo: CtecPlataforma.nld

#SeDefinido(_WIN32) OuSeDefinido(_WIN64) #Defina CTEC_SISTEMA_WINDOWS 1
#SenãoSeDefinido(linux) #Defina CTEC_SISTEMA_LINUX 1 #Senão #Erro
Plataforma não suportada #FimSe

2) MÓDULO SISTEMA (Terminal)

Arquivo: Sistema.nld

Pseudônimo Estrutura CtecSistema CtecSistema;

Pseudônimo Enumeração { CTEC_SISTEMA_ERRO_SUCESSO = 0,
CTEC_SISTEMA_ERRO_FALHA = -1 } CtecSistemaErro;

Pseudônimo Estrutura { CtecSistemaErro (*exiba)(Texto mensagem); }
TabelaTerminal;

Pseudônimo Estrutura { TabelaTerminal terminal; } TabelaSistema;

Externo Imutável TabelaSistema sistema;

Arquivo: Sistema.int

#Inclua “CtecPlataforma.nld”

Estrutura CtecSistema { Inteiro reservado; };

#SeDefinido(CTEC_SISTEMA_WINDOWS) #Inclua <windows.h> #FimSe

#SeDefinido(CTEC_SISTEMA_LINUX) #Inclua <stdio.h> #FimSe

Fixo CtecSistemaErro ctec_sistema_terminal_exiba(Texto mensagem) {

#SeDefinido(CTEC_SISTEMA_WINDOWS)

    HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);
    Se (console == INVALID_HANDLE_VALUE)
        Retorne CTEC_SISTEMA_ERRO_FALHA;

    DWORD escrito = 0;
    WriteConsoleA(console, mensagem, lstrlenA(mensagem), &escrito, NULO);
    Retorne CTEC_SISTEMA_ERRO_SUCESSO;

#SenãoSeDefinido(CTEC_SISTEMA_LINUX)

    Se (printf("%s", mensagem) < 0)
        Retorne CTEC_SISTEMA_ERRO_FALHA;

    Retorne CTEC_SISTEMA_ERRO_SUCESSO;

#FimSe }

Imutável TabelaSistema sistema = { .terminal = { .exiba =
ctec_sistema_terminal_exiba } };

3) MÓDULO ARQUIVO

Arquivo: Arquivo.nld

Pseudônimo Estrutura CtecArquivo CtecArquivo;

Pseudônimo Enumeração { CTEC_ARQUIVO_ERRO_SUCESSO = 0,
CTEC_ARQUIVO_ERRO_NÃO_ENCONTRADO = -2, CTEC_ARQUIVO_ERRO_PERMISSÃO = -1
} CtecArquivoErro;

Pseudônimo Estrutura { CtecArquivoErro (*crie)(CtecArquivo** próprio,
Texto caminho); Vazio (*feche)(CtecArquivo** próprio); } TabelaArquivo;

Externo Imutável TabelaArquivo arquivo;

Arquivo: Arquivo.int

#Inclua “CtecPlataforma.nld”

#SeDefinido(CTEC_SISTEMA_WINDOWS) #Inclua <windows.h> #FimSe

#SeDefinido(CTEC_SISTEMA_LINUX) #Inclua <stdio.h> #FimSe

Estrutura CtecArquivo {

#SeDefinido(CTEC_SISTEMA_WINDOWS) HANDLE identificador;
#SenãoSeDefinido(CTEC_SISTEMA_LINUX) FILE* identificador; #FimSe

};

Fixo CtecArquivoErro ctec_arquivo_crie(CtecArquivo** próprio, Texto
caminho) {

    Se (!próprio) Retorne CTEC_ARQUIVO_ERRO_PERMISSÃO;

    *próprio = alocar_memória(tamanho_de(CtecArquivo));
    Se (!*próprio) Retorne CTEC_ARQUIVO_ERRO_PERMISSÃO;

#SeDefinido(CTEC_SISTEMA_WINDOWS)

    HANDLE h = CreateFileA(
        caminho,
        GENERIC_READ | GENERIC_WRITE,
        0,
        NULO,
        CREATE_ALWAYS,
        FILE_ATTRIBUTE_NORMAL,
        NULO
    );

    Se (h == INVALID_HANDLE_VALUE) {
        liberar_memória(*próprio);
        *próprio = NULO;
        Retorne CTEC_ARQUIVO_ERRO_PERMISSÃO;
    }

    (*próprio)->identificador = h;

#SenãoSeDefinido(CTEC_SISTEMA_LINUX)

    FILE* f = fopen(caminho, "w+");
    Se (!f) {
        liberar_memória(*próprio);
        *próprio = NULO;
        Retorne CTEC_ARQUIVO_ERRO_PERMISSÃO;
    }

    (*próprio)->identificador = f;

#FimSe

    Retorne CTEC_ARQUIVO_ERRO_SUCESSO;

}

Fixo Vazio ctec_arquivo_feche(CtecArquivo** próprio) {

    Se (!próprio || !*próprio) Retorne;

#SeDefinido(CTEC_SISTEMA_WINDOWS) CloseHandle((próprio)->identificador);
#SenãoSeDefinido(CTEC_SISTEMA_LINUX) fclose((próprio)->identificador);
#FimSe

    liberar_memória(*próprio);
    *próprio = NULO;

}

Imutável TabelaArquivo arquivo = { .crie = ctec_arquivo_crie, .feche =
ctec_arquivo_feche };

4) USO NO APLICATIVO

Arquivo: Aplicativo.nld

#Inclua “Arquivo.nld” #Inclua “Sistema.nld”

Inteiro principal(Vazio) {

    CtecArquivo* manifesto;

    CtecArquivoErro erro = arquivo.crie(&manifesto, "Projeto.nds");

    Se (erro != CTEC_ARQUIVO_ERRO_SUCESSO) {
        sistema.terminal.exiba("Erro ao criar arquivo\n");
        Retorne -1;
    }

    sistema.terminal.exiba("Olá Mundo!\n");

    arquivo.feche(&manifesto);

    Retorne 0;

}
