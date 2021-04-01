const start = () => {
    var u, m;
    const ex1 = () => {
        m = 1;
        u = Math.pow(10, -m);
        while (1 + u !== 1) {
            u = Math.pow(10, -m);
            1 + u != 1;
            m++;
        }
        u = Math.pow(10, -(m - 2));
        document.getElementById(
            "body"
        ).innerHTML = `<div id='ex1'>Ex 1 : Precizia masina u pentru JS este ${u}</div>`;
    };
    ex1();

    const ex2 = () => {
        var a = 1,
            b = u / 10,
            c = u / 10;
        if (a + b + c == a + (b + c)) {
            document.getElementById(
                "body"
            ).innerHTML += `<div id='ex1'>Ex 2 : + operatia este asociativa pentru    a= ${a}, b=${b} si c=${c}</div>`;
        } else {
            document.getElementById(
                "body"
            ).innerHTML += `<div id='ex1'>Ex 2 : + operatia nu este asociativa pentru a= ${a}, b=${b} si c=${c}</div>`;
        }
    };
    ex2();
    const ex22 = () => {
        var a = 1,
            b = u / 10,
            c = u / 10;
        while (a * b * c === a * (b * c)) {
            a = Math.random() * u;
            b = Math.random() * u;
            c = Math.random() * u;
        }
        document.getElementById(
            "body"
        ).innerHTML += `<div id='ex1'>Ex 2 : * operatia nu este asociativa pentru a= ${a}, b=${b} si c=${c}</div>`;
    };
    ex22();

    const polimTan2 = (x) =>
    (p =
        x +
        0.33333333333333333 * Math.pow(x, 3) +
        0.133333333333333333 * Math.pow(x, 5) +
        0.053968253968254 * Math.pow(x, 7) +
        0.0218694885361552 * Math.pow(x, 9));

    const ex3 = () => {
        var start = Date.now();
        var sumErr = 0;

        for (var i = 0; i < 1000; i++) {
            var mTan = 0;
            var pTan = 0;

            let min = -Math.PI / 2;
            let max = Math.PI / 2;
            var val = Math.random() * (max - min) + min;

            if (-Math.PI / 4 < val < Math.PI / 4) {
                mTan = polimTan2(val);
                pTan = Math.tan(val);
            }
            if (Math.PI / 4 < val < Math.PI / 2) {
                mTan = 1 / polimTan2(Math.PI / 2 - val);
                pTan = 1 / Math.tan(Math.PI / 2 - val);
            }
            if (-Math.PI / 2 < val < -Math.PI / 4) {
                mTan = 1 / polimTan2(Math.PI - (Math.PI / 2 - val));
                pTan = 1 / Math.tan(Math.PI - (Math.PI / 2 - val));
            }

            var sumErr = sumErr + Math.abs(pTan - mTan);
            console.log(`[${i+1}] x = ${val}, avg err = ${Math.abs(pTan - mTan)}`)
        }
        var avg = sumErr / 10000;

        document.getElementById(
            "body"
        ).innerHTML += `<div id='ex1'>Ex 3 : **Average eroare calcul : ${avg}</div>`;
    };

    ex3();
};