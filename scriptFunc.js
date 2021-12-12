var valoresGanhos, indexGanhos;

function cadGanhos(ganho, categoriaGanho) {

    valoresGanhos = document.getElementById("tbGanhos");
    var qtdLinhas = valoresGanhos.rows.length;
    var linha = valoresGanhos.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellGanho = linha.insertCell(1);
    var cellCategoriaGanho = linha.insertCell(2);

    cellCodigo.innerHTML = qtdLinhas;
    cellGanho.innerHTML = ganho;
    cellCategoriaGanho.innerHTML = categoriaGanho;

    preencheCamposFormGanhos();
}

function altGanhos(ganho, categoriaGanho) {

    valoresGanhos.rows[indexGanhos].cells[1].innerHTML = ganho;
    valoresGanhos.rows[indexGanhos].cells[2].innerHTML = categoriaGanho;

}

function preencheCamposFormGanhos() {

    for (var i = 0; i < valoresGanhos.rows.length; i++) {
        valoresGanhos.rows[i].onclick = function () {
            indexGanhos = this.rowIndex;
            document.getElementById("txtCodigo").value = valoresGanhos.rows[indexGanhos].cells[0].innerText;
            document.getElementById("digitarGanhos").value = valoresGanhos.rows[indexGanhos].cells[1].innerText;
            document.getElementById("categoriaDosGanhos").value = valoresGanhos.rows[indexGanhos].cells[2].innerText;
        }
    }
}

function delGanhos() {
    for (var i = 0; i < valoresGanhos.rows.length; i++) {
        if (indexGanhos == i) {
            valoresGanhos.deleteRow(indexGanhos);
            return;
        }
    }
}
/* Funções atreladas aos gastos
 */

var valoresGastos, indexGastos;

function cadGastos(gasto, categoriaGasto) {

    valoresGastos = document.getElementById("tbGastos");
    var qtdLinhas = valoresGastos.rows.length;
    var linha = valoresGastos.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellGasto = linha.insertCell(1);
    var cellCategoriaGasto = linha.insertCell(2);

    cellCodigo.innerHTML = qtdLinhas;
    cellGasto.innerHTML = gasto;
    cellCategoriaGasto.innerHTML = categoriaGasto;

    preencheCamposFormGastos()
}

function altGastos(gasto, categoriaGasto) {

    valoresGastos.rows[indexGastos].cells[1].innerHTML = gasto;
    valoresGastos.rows[indexGastos].cells[2].innerHTML = categoriaGasto;

}

function preencheCamposFormGastos() {

    for (var i = 0; i < valoresGastos.rows.length; i++) {
        valoresGastos.rows[i].onclick = function () {
            indexGastos = this.rowIndex;
            document.getElementById("txtCodigo").value = valoresGastos.rows[indexGastos].cells[0].innerText;
            document.getElementById("digitarGastos").value = valoresGastos.rows[indexGastos].cells[1].innerText;
            document.getElementById("categoriaDosGastos").value = valoresGastos.rows[indexGastos].cells[2].innerText;
        }
    }
}

function delGastos() {
    for (var i = 0; i < valoresGastos.rows.length; i++) {
        if (indexGastos == i) {
            valoresGastos.deleteRow(indexGastos);
            return;
        }
    }
}