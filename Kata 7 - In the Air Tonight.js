// Instruction: Implement a function to check air quality. Function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

const checkAir = (samples, threshold) => {
  let dirty = 0;

  for (let sample of samples) {
    if (sample === "dirty") {
      dirty++ ;
    }
  }
  return dirty / samples.length > threshold ? "Polluted" : "Clean";
  
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))