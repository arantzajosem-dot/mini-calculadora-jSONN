const datos = {
  "tasaUSD": 0.056
};

document.getElementById("convertirBtn").addEventListener("click", function() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);

  if (isNaN(cantidad)) {
    document.getElementById("resultado").innerText = "Ingresa una cantidad válida.";
    return;
  }

  const resultado = cantidad * datos.tasaUSD;

  document.getElementById("resultado").innerText =
    "Equivalente en USD: $" + resultado.toFixed(2);
});