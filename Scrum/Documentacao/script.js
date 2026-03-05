/* ============================================================
   CTEC Convencional — Documentação NLD
   script.js — Comportamentos compartilhados
   ============================================================ */

(function () {
    'use strict';

    /* ----------------------------------------------------------
       Injetar cabeçalho da página no <header> se existir
       Lê os atributos data-modulo, data-sprint e data-versao
       ---------------------------------------------------------- */
    function popularHeader() {
        var header = document.querySelector('header');
        if (!header) return;

        var modulo = header.dataset.modulo || 'Módulo';
        var sprint = header.dataset.sprint || '';
        var versao = header.dataset.versao || 'v0.1.0';

        header.innerHTML =
            '<h1>Módulo ' + modulo + '</h1>' +
            '<p>CTEC Convencional — Biblioteca NLD</p>' +
            (sprint ? '<span class="badge">' + sprint + ' · ' + versao + '</span>' : '');
    }

    /* ----------------------------------------------------------
       Injetar rodapé automático no <footer>
       ---------------------------------------------------------- */
    function popularFooter() {
        var footer = document.querySelector('footer');
        if (!footer) return;

        var header = document.querySelector('header');
        var modulo = header && header.dataset.modulo ? header.dataset.modulo : '';
        var sprint = header && header.dataset.sprint ? header.dataset.sprint : '';
        var versao = header && header.dataset.versao ? header.dataset.versao : 'v0.1.0';

        var partes = ['CTEC Convencional'];
        if (modulo) partes.push('Módulo ' + modulo);
        if (sprint) partes.push(sprint);
        partes.push(versao);

        footer.textContent = partes.join(' · ');
    }

    /* ----------------------------------------------------------
       Destacar linha da tabela ao clicar (seleção visual)
       ---------------------------------------------------------- */
    function ativarSelecaoTabela() {
        document.querySelectorAll('.field-table tbody tr').forEach(function (tr) {
            tr.style.cursor = 'pointer';
            tr.addEventListener('click', function () {
                document.querySelectorAll('.field-table tbody tr').forEach(function (r) {
                    r.style.background = '';
                });
                tr.style.background = '#2c4a6e';
            });
        });
    }

    /* ----------------------------------------------------------
       Copiar bloco de código ao clicar (único clique)
       ---------------------------------------------------------- */
    function ativarCopiaBloco() {
        document.querySelectorAll('.enum-block, .example-block, .fn-signature').forEach(function (bloco) {
            bloco.title = 'Clique para copiar';
            bloco.style.cursor = 'pointer';

            bloco.addEventListener('click', function () {
                var texto = bloco.innerText || bloco.textContent;
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(texto).then(function () {
                        mostrarToast('Copiado!');
                    });
                }
            });
        });
    }

    /* ----------------------------------------------------------
       Toast de feedback
       ---------------------------------------------------------- */
    function mostrarToast(msg) {
        var toast = document.createElement('div');
        toast.textContent = msg;
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            background: '#2b6cb0',
            color: '#bee3f8',
            padding: '0.5rem 1.1rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontFamily: 'sans-serif',
            zIndex: '9999',
            opacity: '1',
            transition: 'opacity 0.4s'
        });
        document.body.appendChild(toast);
        setTimeout(function () { toast.style.opacity = '0'; }, 1400);
        setTimeout(function () { document.body.removeChild(toast); }, 1800);
    }

    /* ----------------------------------------------------------
       Inicialização
       ---------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', function () {
        popularHeader();
        popularFooter();
        ativarSelecaoTabela();
        ativarCopiaBloco();
    });

}());
