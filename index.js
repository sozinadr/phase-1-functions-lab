// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) return blocks - 43 + 1;
    else if (blocks < 42) return blocks * -1 + 42;
}

function distanceFromHqInFeet(blocks) {
    let feet = 264;
    return distanceFromHqInBlocks(blocks) * feet;
}

function distanceTravelledInFeet(pointA, pointB) {
    return Math.abs(pointA - pointB) * 264;
}

function calculatesFarePrice(start, destination) {
    let totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02;
    } else if (totalDistance > 2000 && totalDistance < 2500) {
        return 25;
    } else totalDistance > 2500; {
        return "cannot travel that far";
    }
}