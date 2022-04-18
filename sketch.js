let randomPoints = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Ponemos el fondo
  background(255);

  // Pintamos el círculo
  stroke(0);
  noFill();
  circle(width / 2, width / 2, width);

  // Generamos un punto aleatorio
  let newRandomPoint = createVector(random(width), random(height));
  // Lo añadimos a la lista de puntos aleatorios
  randomPoints.push(newRandomPoint);

  // Pintamos los puntos aleatorios
  noStroke();
  fill(150, 0, 255);
  for (let i = 0; i < randomPoints.length; i++) {
    circle(randomPoints[i].x, randomPoints[i].y, 5);
  }

  // Contamos los puntos dentro del círculo
  let pointsInsideCircle = 0;
  for (let i = 0; i < randomPoints.length; i++) {
    let distance = dist(randomPoints[i].x, randomPoints[i].y,
      width / 2, width / 2);
    if (distance < width / 2) {
      pointsInsideCircle++;
    }
  }

  // Calculamos PI
  let calculatedPI = 4.0 * (pointsInsideCircle / randomPoints.length);

  // Pintamos el número
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text(nf(calculatedPI, 1, 6), width / 2, height / 2);

}
