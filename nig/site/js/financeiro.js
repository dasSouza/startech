function calculo_financeiro() {
    var area = Number(inp_area.value);
    var arduino = 100;

    var instalar = ((area / 5) * arduino) * 1.05;   // 5 = distancia de cada arduino 
    //1.05 = taxa da instalação isso represente 5%
    var qtArduino = (area / 5);
    document.getElementById('resp').style.display = "block"; // PS. pensei desta tela sair de traz de onde esta o input e ir para o lado
    resp.classList.add(`aparecer`)
    instalacao.innerHTML = `R$ ${instalar.toFixed(2)}`;
    quantid.innerHTML = Math.round(qtArduino + 0.4)
}