var input = pedirInput("Ingrese su número.");
var numeroRomano = "";
var largo;

if (input == false) {
	alert("GIL");
} else {
	descomponer(input);
}

function descomponer(target) {
	for (var i = 0; i < largo; i++){
		numeroRomano = ecuacionRara(target, i) + numeroRomano;
	}
	alert(numeroRomano);
}

function ecuacionRara (input, digito) {
	switch(digito) {
		case 0:
			input = Math.floor(input%10);
			return(romanizar(input, "I","V","X"));
			break;
		case 1:
			input = Math.floor((input/10)%10);
			return(romanizar(input, "X","L","C"));
			break;
		case 2:
			input = Math.floor((input/100)%10);
			return(romanizar(input, "C","D","M"));
			break;
		case 3:
			input = Math.floor((input/1000)%10);
			var romMil = "";
			for (var j = 0; j < input; j++) {
				romMil += "M";
			}
			return(romMil);
			break;
		default:
			alert("GILLLLL!");
			break;
	}
}

function romanizar(numero, l1, l2, l3) {
	switch(numero) {
		case 1:
			return(l1);
			break;
		case 2:
			return(l1+l1);
			break;
		case 3:
			return(l1+l1+l1);
			break;
		case 4:
			return(l1+l2);
			break;
		case 5:
			return(l2);
			break;
		case 6:
			return(l2+l1);
			break;
		case 7:
			return(l2+l1+l1);
			break;
		case 8:
			return(l2+l1+l1+l1);
			break;
		case 9:
			return(l1+l3);
			break;
		default:
			return("");
	}
}

function pedirInput(inputUsuario) {
	var testInput = prompt(inputUsuario);
	if (testInput == "") {
		return(false);
	} else if (testInput) {
		largo = testInput.length;
		testInput = parseInt(testInput);
		if (testInput > 0 && testInput < 10000 && (testInput%1) == 0) {
			return(testInput);
		} else {
			return(false);
		}
	} else {
		return false;
	}
}