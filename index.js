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

function 