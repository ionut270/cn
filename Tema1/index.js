const start = () => {
    var u, m;
    /**
     * Calculates & returns the machine precision for JS
     * smallest u>0 de forma u=10^-m a.i 1.0+c != 1.0
     * @returns Number
     */
    function machineError() {
        document.getElementById("body").innerHTML =`<h2 id='ex1'>~~~~~~~~~~~~~~~~~ Ex 1 ~~~~~~~~~~~~~~~~~ </h2>`
        m = 1; // Is "m" a natural number ?
        u = Math.pow(10, -m); // u=10^-m
        while (1 + u !== 1) { // Find match
            u = Math.pow(10, -m);
            m++;
        }
        u = Math.pow(10, -(m - 2));
        document.getElementById("body").innerHTML += `<div id='ex1'> Precizia masina u pentru JS este ${u} </div>`;
        return u;
    };
    machineError();

    /** ex 2+
     * Calculate the asociativity for + operator using the machine precision.
     * @returns Object
     */
    function asociativitySum() {
        document.getElementById("body").innerHTML +=`<h2 id='ex1'>~~~~~~~~~~~~~~~~~ Ex 2 ~~~~~~~~~~~~~~~~~ </h2>`
        var a = 1,
            b = u / 10,
            c = u / 10;
        if (a + b + c == a + (b + c)) { // condition appears to be allways true
            document.getElementById("body").innerHTML += `<div id='ex1'>+ operatia este asociativa pentru a = ${a}, b =${b} si c =${c}</div>`;
            return { ...a, ...b, ...c, ...true }
        } else {
            document.getElementById("body").innerHTML += `<div id='ex1'>+ operatia nu este asociativa pentru a = ${a}, b =${b} si c =${c}</div>`;
            return { ...a, ...b, ...c, ...false }
        }
    };
    asociativitySum();

    /** ex 2*
     * Returns an example for which the multiplication operator is not asociative
     * @returns Object
     */
    const asociativityMult = () => {
        var a = 1,
            b = u / 10,
            c = u / 10;
        while (a * b * c === a * (b * c)) {
            a = Math.random() * u;
            b = Math.random() * u;
            c = Math.random() * u;
        }
        document.getElementById("body").innerHTML +=`<h2 id='ex1'>~~~~~~~~~~~~~~~~~ Ex 2 ~~~~~~~~~~~~~~~~~ </h2>`
        document.getElementById("body").innerHTML += `<div id='ex1'>* operatia nu este asociativa pentru a = ${a}, b =${b} si c =${c}</div>`;
        return { ...a, ...b, ...c, ...true }
    };
    asociativityMult();


    function approx(x, op) {
        const sin = {
            a: [
                1805490264.690988571178600370234394843221,
                -164384678.227499837726129612587952660511,
                3664210.647581261810227924465160827365,
                -28904.140246461781357223741935980097,
                76.568981088717405810132543523682,
            ],
            b: [
                2298821602.638922662086487520330827251172,
                27037050.118894436776624866648235591988,
                155791.388546947693206469423979505671,
                540.567501261284024767779280700089,
                1.0
            ]
        }
        const cos = {
            a: [
                1090157078.174871420428849017262549038606,
                -321324810.993150712401352959397648541681,
                12787876.849523878944051885325593878177,
                -150026.206045948110568310887166405972,
                538.333564203182661664319151379451,
            ],
            b: [
                1090157078.174871420428867295670039506886,
                14907035.776643879767410969509628406502,
                101855.811943661368302608146695082218,
                429.772865107391823245671264489311,
                1.0
            ]
        }
        const ln = {
            a: [
                75.151856149910794642732375452928,
                -134.730399688659339844586721162914,
                74.201101420634257326499008275515,
                -12.777143401490740103758406454323,
                0.332579601824389206151063529971,
            ],
            b: [
                37.575928074955397321366156007781,
                -79.890509202648135695909995521310,
                56.215534829542094277143417404711,
                -14.516971195056682948719125661717,
                1.0
            ]
        }

        var p4 = 0;
        var q4 = 0;

        switch (op) {
            case "sin":
                if (x >= -1 && x <= 1) {
                    var z = x * x;

                    p4 = sin.a[0] + z * (sin.a[1] + z * (sin.a[2] + z * (sin.a[3] + z * sin.a[4])));
                    q4 = sin.b[0] + z * (sin.b[1] + z * (sin.b[2] + z * (sin.b[3] + z * sin.b[4])));

                    if (q4 < Math.pow(10, -12)) {
                        q4 = Math.pow(10, -12);
                    }

                    return x * (p4 / q4);
                } else {
                    return false;
                }

                break;
            case "cos":
                if (x >= -1 && x <= 1) {
                    var z = x * x;

                    p4 = cos.a[0] + z * (cos.a[1] + z * (cos.a[2] + z * (cos.a[3] + z * cos.a[4])));
                    q4 = cos.b[0] + z * (cos.b[1] + z * (cos.b[2] + z * (cos.b[3] + z * cos.b[4])));

                    if (q4 < Math.pow(10, -12)) {
                        q4 = Math.pow(10, -12);
                    }

                    return p4 / q4;
                } else {
                    return false
                };

                break;
            case "ln":
                if (x >= 1 / Math.sqrt(2) && x <= Math.sqrt(2)) {
                    var z = (x - 1) / (x + 1);
                    var y = z * z
                    p4 = ln.a[0] + y * (ln.a[1] + y * (ln.a[2] + y * (ln.a[3] + y * ln.a[4])));
                    q4 = ln.b[0] + y * (ln.b[1] + y * (ln.b[2] + y * (ln.b[3] + y * ln.b[4])));

                    if (q4 < Math.pow(10, -12)) {
                        q4 = Math.pow(10, -12);
                    }
                    return z * (p4 / q4);
                } else {
                    return false;
                }

                break;
        }
    }

    const ex3 = () => {
        var html = ''

        html += `<h2 id='ex1'>~~~~~~~~~~~~~~~~~ Ex 3 ~~~~~~~~~~~~~~~~~ </h2> <table>`;
        html += `
            <tr>
                <th>Value</th>
                <th>sin</th>
                <th>cos</th>
                <th>ln</th>
            </tr>
        `
        // 1k numbers average
        for (var i = 0; i < 1000; i++) {

            var mSin = 0;
            var pSin = 0;
            var mCos = 0;
            var pCos = 0;
            var mLn = 0;
            var pLn = 0;

            let min = -Math.PI / 2;
            let max = Math.PI / 2;

            // Get a random value between min & max
            var val = Math.random() * (max) + min;

            if (-Math.PI / 4 < val < Math.PI / 4) {
                mSin = approx(val, "sin");
                pSin = Math.sin(Math.PI / 4 * val);

                mCos = approx(val, "cos");
                pCos = Math.cos(Math.PI / 4 * val);

                mLn = approx(val, "ln");
                pLn = Math.log(val);
                
                if (mSin || mCos || mLn)
                    html += `<tr><td>${val}</td>`;
                if (mSin && mSin !== Infinity)
                    html += `<td id='ex1'>~ ${mSin} := ${pSin} |dif| = ${Math.ceil(Math.abs(pSin - mSin))} </td>`;
                if (mCos && mCos !== Infinity)
                    html += `<td id='ex1'>~ ${mCos} := ${pCos} |dif|=${Math.ceil(Math.abs(pCos - mCos))} </td>`;
                if (mLn && mLn !== Infinity)
                    html += `<td id='ex1'>~ ${mLn} := ${pLn} |dif| = ${Math.ceil(Math.abs(pLn - mLn))} </td>`;
                html += `</tr>`;
            }

            // if (Math.PI / 4 < val < Math.PI / 2) {

            //     mSin = 1 / approx(Math.PI / 2 - val, "sin");
            //     pSin = 1 / Math.sin(Math.PI / 2 - val);

            //     mCos = 1 / approx(Math.PI / 2 - val, "cos");
            //     pCos = 1 / Math.cos(Math.PI / 2 - val);

            //     mLn = 1 / approx(Math.PI / 2 - val, "ln");
            //     pLn = 1 / Math.log(Math.PI / 2 - val);

            //     if (mSin || mCos || mLn)
            //         html += `<tr><td>${val}</td>`;
            //     if (mSin && mSin !== Infinity)
            //         html += `<td id='ex1'>~ ${mSin} := ${pSin} |dif| = ${Math.abs(pSin - mSin)} </td>`;
            //     if (mCos && mCos !== Infinity)
            //         html += `<td id='ex1'>~ ${mCos} := ${pCos} |dif|=${Math.abs(pCos - mCos)} </td>`;
            //     if (mLn && mLn !== Infinity)
            //         html += `<td id='ex1'>~ ${mLn} := ${pLn} |dif| = ${Math.abs(pLn - mLn)} </td>`;
            //     html += `</tr>`;
            // }

            // if (-Math.PI / 2 < val < -Math.PI / 4) {

            //     mSin = 1 / approx(Math.PI - (Math.PI / 2 - val), "sin");
            //     pSin = 1 / Math.sin(Math.PI - (Math.PI / 2 - val));

            //     mCos = 1 / approx(Math.PI - (Math.PI / 2 - val), "cos");
            //     pCos = 1 / Math.cos(Math.PI - (Math.PI / 2 - val));

            //     mLn = 1 / approx(Math.PI - (Math.PI / 2 - val), "ln");
            //     pLn = 1 / Math.log(Math.PI - (Math.PI / 2 - val));
            //     if (mSin || mCos || mLn)
            //         html += `<tr><td>${val}</td>`;
            //     if (mSin && mSin !== Infinity)
            //         html += `<td id='ex1'>~ ${mSin} := ${pSin} |dif| = ${Math.abs(pSin - mSin)} </td>`;
            //     if (mCos && mCos !== Infinity)
            //         html += `<td id='ex1'>~ ${mCos} := ${pCos} |dif|=${Math.abs(pCos - mCos)} </td>`;
            //     if (mLn && mLn !== Infinity)
            //         html += `<td id='ex1'>~ ${mLn} := ${pLn} |dif| = ${Math.abs(pLn - mLn)} </td>`;
            //     html += `</tr>`;
            // }
        }
        html += `</table>`;

        document.getElementById("body").innerHTML += html
    };
    ex3();
};