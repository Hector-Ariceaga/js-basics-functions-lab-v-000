function distanceFromHqInBlocks(block) {
  let blockDistance
  if (block <= 42) {
    blockDistance = 42 - block
  }
  else {
    blockDistance = block - 42
  }
  return blockDistance
}

function distanceFromHqInFeet(block) {
  let feetDistance = distanceFromHqInBlocks(block) * 264
  return feetDistance
}

function distanceTravelledInFeet(start, destination){
  let feetTravelled
  if (destination >= start) {
    feetTravelled = (destination - start) * 264
  }
  else {
    feetTravelled = (start - destination) * 264
  }
  return feetTravelled
}

function calculatesFairPrice(start, destination) {
  let fare
  distance = distanceTravelledInFeet(start, destination)
  switch (distance) {
    case (distance <= 400):
      fare = "This one is on us.";
      break;
    case > 400 && case <= 200:
      fare = (distance - 400) * 0.02;
      break;
    case > 2000 && case < 2500:
      fare = "flat rate"
      break;
    case > 2500:
      fare = "cannot travel that far";
      break;
  }
  return fare
}