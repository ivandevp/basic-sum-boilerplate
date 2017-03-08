+function() {
	// Elementos
	var suma = document.getElementById("suma");
	// Manejador de Evento
	suma.addEventListener("click", function () {
		var numero1 = document.getElementById("numero1").value;
		var numero2 = document.getElementById("numero2").value;
		var resultado = document.getElementById("resultado");
		resultado.textContent = sumar(numero1, numero2);
	});
}();