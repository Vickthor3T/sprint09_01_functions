// Calculadora
document.querySelector(".calculator__button").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultElement = document.querySelector(".calculator__result");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Por favor, ingrese números válidos.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: División por cero";
      break;
    default:
      result = "Operador no válido";
      break;
  }

  resultElement.textContent = `Resultado: ${result}`;
});

// Validar Mayor de Edad
document.querySelector(".age-check__button").addEventListener("click", () => {
  const age = parseInt(document.getElementById("age").value);
  const resultElement = document.querySelector(".age-check__result");

  if (isNaN(age)) {
    resultElement.textContent = "Por favor, ingrese una edad válida.";
    return;
  }

  resultElement.textContent = age >= 18 ? "Mayor de edad" : "Menor de edad";
});

// Número Aleatorio
document
  .querySelector(".random-number__button")
  .addEventListener("click", () => {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const resultElement = document.querySelector(".random-number__result");

    if (isNaN(min) || isNaN(max)) {
      resultElement.textContent = "Por favor, ingrese valores válidos.";
      return;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = `Número aleatorio: ${random}`;
  });

// Funciones Declarativa, Expresada y Flecha

document
  .querySelector(".calculator-extended__button--declarative")
  .addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("extended-num1").value);
    const num2 = parseFloat(document.getElementById("extended-num2").value);
    const operador = document.getElementById("extended-operator").value;

    extendedResult.textContent = `Resultado (Declarativa): ${calcularDeclarativa(
      num1,
      num2,
      operador
    )}`;

    console.log(calcularDeclarativa(num1, num2, operador));
  });

function calcularDeclarativa(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: División por cero";
      }
      // TODO MENOS UN CERO      ES VERDADERO?             ES FALSO??
      return num2 !== 0 ? num1 / num2 : "Error: División por cero";
    default:
      return "Operador no válido";
  }
}

const extendedResult = document.querySelector(".calculator-extended__result");

document
  .querySelector(".calculator-extended__button--expressed")
  .addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("extended-num1").value);
    const num2 = parseFloat(document.getElementById("extended-num2").value);
    const operador = document.getElementById("extended-operator").value;

    extendedResult.textContent = `Resultado (Expresada): ${calcularExpresada(
      num1,
      num2,
      operador
    )}`;
  });

const calcularExpresada = function (num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: División por cero";
    default:
      return "Operador no válido";
  }
};

//sintaxus para una funcion declarativo, si tiene diferencias


const calcularFlecha = (num1, num2, operador) => {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: División por cero";
    default:
      return "Operador no válido";
  }
};

document
  .querySelector(".calculator-extended__button--arrow")
  .addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("extended-num1").value);
    const num2 = parseFloat(document.getElementById("extended-num2").value);
    const operador = document.getElementById("extended-operator").value;

    extendedResult.textContent = `Resultado (Flecha): ${calcularFlecha(
      num1,
      num2,
      operador
    )}`;
  });
