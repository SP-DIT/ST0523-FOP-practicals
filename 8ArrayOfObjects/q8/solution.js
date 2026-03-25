function scoreStats(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
        }
        if (scores[i] < lowest) {
            lowest = scores[i];
        }
        sum = sum + scores[i];
    }

    const average = sum / scores.length;

    return {
        highest: highest,
        lowest: lowest,
        average: average,
    };
}

module.exports = scoreStats;

// Example usage:
console.log(scoreStats([85, 92, 78, 90, 88]));
// { highest: 92, lowest: 78, average: 86.6 }

console.log(scoreStats([70, 75, 80, 85, 90, 95]));
// { highest: 95, lowest: 70, average: 82.5 }

console.log(scoreStats([100, 98, 95, 97, 96]));
// { highest: 100, lowest: 95, average: 97.2 }
