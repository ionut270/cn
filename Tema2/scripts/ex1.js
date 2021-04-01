const cholesky_D = (m) => {
    var lower = Array.from(new Array(n), () => new Array(n).fill(0))

    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            var sum = 0;
            if (j == i) {
                for (var k = 0; k < j; k++){
                    sum += Math.pow(lower[j][k], 2)
                }
                lower[j][j] = Math.sqrt(m[j][j] - sum);
            } else {
                for (var k = 0; k < j; k++){
                    sum += (lower[i][k] * lower[j][k]);
                }
                lower[i][j] = (m[i][j] - sum) / lower[j][j];
            }
        }
    }
    return lower;
}
//"[[4,12,-16],[12,37,-43],[-16,-43,98]]"
