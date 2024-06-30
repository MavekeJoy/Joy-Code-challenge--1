function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Points:", demeritPoints);

        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended");
        }

        return demeritPoints;
    }
}