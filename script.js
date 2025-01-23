//aqui arriba const
const title = document.getElementById("titulo");
const paragrapgh = document.getElementById("parrafo");
const input = document.getElementById("input");
const button1 = document.getElementById("boton1");
const button2 = document.getElementById("boton2");
//funciones
const salude = () => {
  console.log("HOLA A TODOS ME ACABAN DE DAR CLICK!!");
};

//acciones
button1.addEventListener("click", salude);
button2.addEventListener("click", () => {
  console.log("Esta es una funcion anonima");
});

//logica if, else

console.dir(title);
console.dir(paragrapgh);
console.dir(input);
console.dir(button1);

setTimeout(() => {
  title.textContent = "LO HE CAMBIADO DESDE JS";
}, 10000);

const silla = {
  color: "negro",
  numeroDePatas: 4,
  ancho: 30,
  alto: 60,
};

const perro = {
  raza: "Husky",
  color: "mix",

  ladrar: function () {
    console.log("gua gua");
  },
};

//perro.ladrar();
