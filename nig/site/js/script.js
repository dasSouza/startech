var aberto_cadastro = false;
var aberto_login = false;
var aberto_financeiro = false;
function cadastrar() {
    if (!aberto_cadastro) {
        tela_cadastro.classList.add(`abrir_tela`);
        tela_cadastro.classList.remove(`fechar_tela`);
        tela_cadastro.style.display = `block`
        tampa.classList.remove(`abrir_tampa`);
        tampa.classList.add(`fechar_tampa`);
        tampa.classList.remove(`fechar_tampa_cadastro`);
        aberto_cadastro = true
        tela_login.classList.remove(`abrir_tela`);
        tela_login.classList.add(`fechar_tela`);
        setTimeout(function () {
            tela_login.style.display = `none`;
            tampa.classList.remove(`fechar_tampa`);
            tampa.classList.add(`abrir_tampa_cadastro`);
            aberto_login = false;
        }, 1200)
    }
    else {
        tela_cadastro.classList.remove(`abrir_tela`);
        tela_cadastro.classList.add(`fechar_tela`);
        tampa.classList.add(`abrir_tampa_cadastro`);
        setTimeout(function () {
            tela_cadastro.style.display = `none`;
            tampa.classList.remove(`fechar_tampa_cadastro`);
            aberto_cadastro = false
        }, 1000)
    }
}
function logar() {
    if (!aberto_login) {
        tela_login.classList.add(`abrir_tela`);
        tela_login.classList.remove(`fechar_tela`);
        tampa.classList.add(`abrir_tampa`);
        tampa.classList.remove(`fechar_tampa`);
        tampa.classList.remove(`fechar_tampa_cadastro`);
        tampa.classList.remove(`abrir_tampa_cadastro`);
        tampa.style.display = 'block'
        tela_login.style.display = `block`
        aberto_login = true
        tela_cadastro.classList.remove(`abrir_tela`);
        tela_cadastro.classList.add(`fechar_tela`);
        setTimeout(function () {
            tela_cadastro.style.display = `none`
            aberto_cadastro = false
        }, 1200)
    }
    else if (aberto_login) {
        tela_login.classList.remove(`abrir_tela`);
        tela_login.classList.add(`fechar_tela`);
        tampa.classList.add(`fechar_tampa`);
        tampa.classList.remove(`abrir_tampa`);
        tampa.classList.remove(`fechar_tampa_cadastro`);
        tampa.classList.remove(`abrir_tampa_cadastro`);
        setTimeout(function () {
            tela_login.style.display = `none`
            tampa.style.display = 'none'
            aberto_login = false;
        }, 500)
    }
}
function calc_financeiro() {
    if (!aberto_financeiro) {
        tela_financeiro.classList.add(`abrir_financ`);
        tela_financeiro.classList.remove(`fechar_financ`);
        tela_financeiro.style.display = `block`
        tampa_esquerda.classList.remove(`fechar_tampa_esquerda`);
        tampa_esquerda.classList.add(`abrir_tampa_esquerda`);
        tampa_esquerda.style.display = 'block'
        aberto_financeiro = true
    }
    else {
        tela_financeiro.classList.remove(`abrir_financ`);
        tela_financeiro.classList.add(`fechar_financ`);
        tampa_esquerda.classList.add(`fechar_tampa_esquerda`);
        tampa_esquerda.classList.remove(`abrir_tampa_esquerda`);
        setTimeout(function () {
            tela_financeiro.style.display = `none`
            tampa_esquerda.style.display = 'none'
            aberto_financeiro = false
        }, 1200)
    }
}