function Punto1() {
  let anio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  document.write("<h2>Lista de Meses</h2>");
  document.write("<ul>");
  //document.getElementById("respuesta1").innerHTML = `<ul>Lista de Meses</ul><br/>`;
  for (let i = 0; i < 12; i++) {
    document.write(`<li>${anio[i]}</li></br>`);
    //document.getElementById("respuesta1").innerHTML = `<li>${anio[i]}</li><br/>`;
  }
  document.write("</ul>");
  document.write(
    `<button><a href="index.html">Volver al inicio</a></button></br>`
  );
}

function Punto2() {
  let ciudades = [];
  let i = 0;
  do {
    ciudades[i] = prompt("Ingresa el nombre de una ciudad");
    i++;
  } while (confirm("ingresar otra cadena de texto?") == true);
  document.write(`<h2>Las ciudades ingresadas son: </h2>`);
  document.write("<ul>");
  for (i of ciudades) {
    document.write(`<li>${i}</li></br>`);
  }
  document.write("</ul>");
  document.write(`<p>Ingresaste ${ciudades.length} ciudades</p>`);
  document.write(`<p>La primer ciudad ingresada es ${ciudades[0]}</p>`);
  document.write(`<p>La tercer ciudad ingresada es ${ciudades[2]}</p>`);
  document.write(
    `<p>La ultima ciudad ingresada es ${ciudades[ciudades.length - 1]}</p>`
  );
  ciudades.push("Paris");
  document.write(
    `<p>El pais que ocupa la segunda posicion es FRANCIA, es broma, es ${ciudades[1]}</p>`
  );
  ciudades.splice(1, 1, "Barcelona");
  document.write(`<h2>Asi quedaron las posiciones: </h2>`);
  document.write("<ul>");
  for (i of ciudades) {
    document.write(`<li>${i}</li></br>`);
  }
  document.write("</ul>");
  document.write(
    `<button><a href="index.html">Volver al inicio</a></button></br>`
  );
}

function Punto3() {
  let caso2 = 0;
  let caso3 = 0;
  let caso4 = 0;
  let caso5 = 0;
  let caso6 = 0;
  let caso7 = 0;
  let caso8 = 0;
  let caso9 = 0;
  let caso10 = 0;
  let caso11 = 0;
  let caso12 = 0;
  let dado1 = 0;
  let dado2 = 0;
  let suma = 0;
  document.write("<table class= 'table table-bordered text-center'>");
  document.write("<thead>");
  document.write("<tr>");
  document.write("<th>Suma</th>");
  document.write("<th>Cantidad de apariciones</th>");
  document.write("</tr>");
  document.write("</thead>");
  document.write("<tbody>");
  for (let i = 0; i < 50; i++) {
    dado1 = Math.floor(Math.random() * (7 - 1) + 1);
    dado2 = Math.floor(Math.random() * (7 - 1) + 1);
    document.write("<tr>");
    suma = dado1 + dado2;
    document.write(`<td>${suma}</td>`);
    switch (suma) {
      case 2:
        caso2++;
        document.write(`<td>${caso2}</td>`);
        break;
      case 3:
        caso3++;
        document.write(`<td>${caso3}</td>`);
        break;
      case 4:
        caso4++;
        document.write(`<td>${caso4}</td>`);
        break;
      case 5:
        caso5++;
        document.write(`<td>${caso5}</td>`);
        break;
      case 6:
        caso6++;
        document.write(`<td>${caso6}</td>`);
        break;
      case 7:
        caso7++;
        document.write(`<td>${caso7}</td>`);
        break;
      case 8:
        caso8++;
        document.write(`<td>${caso8}</td>`);
        break;
      case 9:
        caso9++;
        document.write(`<td>${caso9}</td>`);
        break;
      case 10:
        caso10++;
        document.write(`<td>${caso10}</td>`);
        break;
      case 11:
        caso11++;
        document.write(`<td>${caso11}</td>`);
        break;
      default:
        caso12++;
        document.write(`<td>${caso12}</td>`);
        break;
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
function Punto4() {}
function Punto5() {}
function Punto6() {}
function Punto7() {}
