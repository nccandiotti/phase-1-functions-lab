// Code your solution in this file!
"strict";
function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation > 42) {
    return pickUpLocation - 42;
  } else return 42 - pickUpLocation;
}

function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else return (start - destination) * 264;
}

// calculateFarePrice -- first 400 feet are free, 400-2000 feet (not including 400) is 2 cents per foot. for distances 2000-2500there is a flat rate. $25 for distances over 2500, console.log('cannot travel that far)
function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (
    distanceTravelledInFeet(start, destination) < 400 &&
    distanceTravelledInFeet(start, destination) < 2000
  ) {
    return distanceTravelledInFeet(start, destination) * 0.02;
  } else if (
    distanceTravelledInFeet(start, destination) <= 2000 &&
    distanceTravelledInFeet(start, destination) < 2500
  ) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  }
}
