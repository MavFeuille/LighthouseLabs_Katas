const checkAir = (samples, threshold) => {
  let clean = 0;
  let dirty = 0;

  for (let sample of samples) {
    if (sample === "clean") {
      clean += 1;
    } else {
      dirty += 1;
    }
  }

  if (dirty / samples.length < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }

}

// checkAir(['clean', 'dirty], num of highest acceptable amount of DIRTY)


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