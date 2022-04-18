let puntosAleatorios = []
let puntosEnCirculo = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Aquí ponemos el fondo de color blanco
  background(255);

  // Pintamos el círculo
  noFill();
  stroke(0);
  circle(width / 2, height / 2, width);

  // Generamos un punto aleatorio y lo guardamos en la lista
  for (let i = 0; i < 1000; i++) {
    let puntoAleatorio = createVector(random(width), random(height));
    puntosAleatorios.push(puntoAleatorio);
    let distanciaDesdeElCentro = dist(puntoAleatorio.x, puntoAleatorio.y,
      width / 2.0, height / 2.0);
    if (distanciaDesdeElCentro <= width / 2.0) {
      puntosEnCirculo++;
    }
  }


  // Dibujamos todos los puntos
  //fill(150, 0, 220);
  noStroke();
  for (let i = 0; i < puntosAleatorios.length; i++) {
    let distanciaDesdeElCentro = dist(puntosAleatorios[i].x, puntosAleatorios[i].y,
      width / 2.0, height / 2.0);
    let color = map(distanciaDesdeElCentro, 0, 355.0, 255, 0)
    fill(color, 0, color);
    circle(puntosAleatorios[i].x, puntosAleatorios[i].y, 20);
  }

  // Calcular PI
  let PIaproximado = 4 * puntosEnCirculo / puntosAleatorios.length;

  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(nf(PIaproximado, 1, 6), width / 2, height / 2);




}
