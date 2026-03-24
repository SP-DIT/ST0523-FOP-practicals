function sumFromNToM(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum = sum + i;
    }
    return sum;
}

// examples

console.log(sumFromNToM(1, 4)); // 10
console.log(sumFromNToM(3, 6)); // 18

module.exports = sumFromNToM;
