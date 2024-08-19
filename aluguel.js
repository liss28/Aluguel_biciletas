function preverAlugueis() {
    const diaSemana = document.getElementById("diaSemana").value;
    const clima = document.getElementById("clima").value;

    let previsao = 0;

    // Simples lógica de previsão baseada no dia da semana e clima
    if (diaSemana === "sábado" || diaSemana === "domingo") {
        if (clima === "ensolarado") {
            previsao = 40;
        } else if (clima === "nublado") {
            previsao = 25;
        } else {
            previsao = 10; // Chuvoso
        }
    } else { // Dias da semana
        if (clima === "ensolarado") {
            previsao = 20;
        } else if (clima === "nublado") {
            previsao = 10;
        } else {
            previsao = 5; // Chuvoso
        }
    }

    document.getElementById("resultado").innerText = "Quantidade Prevista: " + previsao;
}
