const changeFinder = (ammount, quarterCounter, dimeCounter, nickleCounter, pennyCounter) => {
  if (isNaN(ammount)) {
    return;
  }

if (ammount <= .009) {
    return `Proper change is ${quarterCounter} Quarters, ${dimeCounter} Dimes, ${nickleCounter} Nickls, and ${pennyCounter} Pennies.`
  }

    else if (ammount > .25) {
    ammount = ammount - .25;
    // console.log("QUARTERS! "+quarterCounter+", " + dimeCounter);
    quarterCounter += 1;
    return changeFinder(ammount, quarterCounter, dimeCounter, nickleCounter, pennyCounter);
  }

  else if (ammount < .25 && ammount >= .1) {
    ammount = ammount - .1;
    dimeCounter += 1;
    return changeFinder(ammount, quarterCounter, dimeCounter, nickleCounter, pennyCounter);
  }

  else if (ammount < .1 && ammount >= .05) {
    ammount = ammount - .05;
    nickleCounter += 1;
    return changeFinder(ammount, quarterCounter, dimeCounter, nickleCounter, pennyCounter);
  }

  else if (ammount < .05 && ammount > 0) {
    ammount = ammount - .01;
    pennyCounter += 1;
    return changeFinder(ammount, quarterCounter, dimeCounter, nickleCounter, pennyCounter);
  }
}

changeFinder(4.99, 0, 0, 0, 0);
