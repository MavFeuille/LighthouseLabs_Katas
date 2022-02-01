const PI = 3.14159;

const sphereVolume = (radius) => {
  // V = 4/3 PI r^3
  return 4 / 3 * PI * Math.pow(radius, 3);
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
  // V = PI * r^2 * h / 3
  return PI * Math.pow(radius, 2) * height / 3;
}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => {
  // V = h * w * d

  return height * width * depth;
}
console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = (solids) => {
  let total = 0;

  for (const solid of solids) {
    // console.log("solid: ", solid); <-- to check what is passed in solids
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius);
    } 
    if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height);
    } 
    if (solid.type === "prism") {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);