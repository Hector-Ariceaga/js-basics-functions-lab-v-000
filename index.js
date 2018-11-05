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
  let 
}