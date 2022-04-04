const u = () => {
    let m = 1;
    let u = Math.pow(10, -m);
    while (1 + u !== 1) {
        u = Math.pow(10, -m);
        m++;
    }
    u = Math.pow(10, -(m - 2));
    return u;
};
const determinant = (m) =>
    m.length == 1
        ? m[0][0]
        : m.length == 2
            ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
            : m[0].reduce(
                (r, e, i) =>
                    r +
                    (-1) ** (i + 2) *
                    e *
                    determinant(m.slice(1).map((c) => c.filter((_, j) => i != j))),
                0
            );
const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));
const multiply = (a, b) => {
    var aNumRows = a.length,
        aNumCols = a[0].length,

        bNumRows = b.length,
        bNumCols = b[0].length,
        
        m = new Array(aNumRows);
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols);
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;
            for (var i = 0; i < aNumCols; ++i) m[r][c] += a[r][i] * b[i][c];
        }
    }
    return m;
};
