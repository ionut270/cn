
 // 1 Ax = B
 // 2 ||AinitxGauss − b^init||2
 // 3 ||xGauss − xbibl||2
 //   ||xGauss − A.biblb^−1*b^init||2
 // 4 ||A.Gaus^−1 − A.bibl^−1||

const Gaussian_el = (m) => {
    // singular matrix , m*something = m
    //|A initxGauss − b init||2
    for(var i of m){
        let keys = [];
        let row = 0;
        for(var j of i){
            keys.push(j);
            row += j;
        }
    }
}