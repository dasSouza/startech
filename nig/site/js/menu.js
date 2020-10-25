var aberto_cadastro = false;
var aberto_login = false;
var aberto_financeiro = false;
function cadastrar(){
    if(!aberto_cadastro){
        tela_cadastro.classList.add(`abrir_tela`);
        tela_cadastro.classList.remove(`fechar_tela`);
        tela_cadastro.style.display = `block`
        aberto_cadastro = true
        tela_login.classList.remove(`abrir_tela`);
        tela_login.classList.add(`fechar_tela`);
        setTimeout(function(){
        tela_login.style.display = `none`
        aberto_login = false;
    }, 1200)
    }
    else{
        tela_cadastro.classList.remove(`abrir_tela`);
        tela_cadastro.classList.add(`fechar_tela`);
        setTimeout(function(){
            tela_cadastro.style.display = `none`
            aberto_cadastro = false
        }, 1200)
    }
}
function logar(){
    if(!aberto_login){
        tela_login.classList.add(`abrir_tela`);
        tela_login.classList.remove(`fechar_tela`);
        tela_login.style.display = `block`
        aberto_login = true
        tela_cadastro.classList.remove(`abrir_tela`);
        tela_cadastro.classList.add(`fechar_tela`);
        setTimeout(function(){
            tela_cadastro.style.display = `none`
            aberto_cadastro = false
        }, 1200)
    }
    else if(aberto_login){
    tela_login.classList.remove(`abrir_tela`);
    tela_login.classList.add(`fechar_tela`);
    setTimeout(function(){
        tela_login.style.display = `none`
        aberto_login = false;
    }, 1200)
    }
}
function calc_financeiro(){
    if(!aberto_financeiro){
        tela_financeiro.classList.add(`abrir_financ`);
        tela_financeiro.classList.remove(`fechar_financ`);
        tela_financeiro.style.display = `block`
        aberto_financeiro = true
    }
    else{
        tela_financeiro.classList.remove(`abrir_financ`);
        tela_financeiro.classList.add(`fechar_financ`);
        setTimeout(function(){
            tela_financeiro.style.display = `none`
            aberto_financeiro = false
        }, 1200)
    }
}