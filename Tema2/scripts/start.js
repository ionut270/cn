var n = 3, A = Array.from(new Array(n), () => new Array(n).fill(0))

const update_A = (i,j) =>{
    document.getElementById(`${i}_${j}`).value.match(/^(-|\.|\d)*$/) ? null : document.getElementById(`${i}_${j}`).value = ''
    var val = document.getElementById(`${i}_${j}`).value;
    if(val !== ''){
        A[i][j] = parseInt(val);
    }
}
const update_n = () =>{ 
    document.getElementById("n_input").value.match(/^(-|\.|\d)*$/) ? null : document.getElementById("n_input").value = ''
    n = document.getElementById("n_input").value;

    if(n != ''){
        n = parseInt(n)
        A = Array.from(new Array(n), () => new Array(n).fill(0))
        var table = '';
        for(var i=0; i<n; i++){
            table += `<div class="table_row" id="row_${i}">`;
            for(var j=0; j<n; j++) 
                table += `<input type="text" class="matrix_input" id="${i}_${j}" onchange="update_A(${i},${j})">`;
            table += `</div>`;
        }
        document.getElementById("input_a").innerHTML = table;
    }
}

const solve_Cholesky = () =>{
    var L = cholesky_D(A);

    var html = '<table>'
    for(var i=0; i<L.length; i++){
        html += '<tr>'
        for(var j=0; j<L.length; j++){
            html += `<th>${L[i][j]}</th>`
        }
        html += '</tr>'
    }
    html += '</table>'

    
    html += '<p>*</p><table>'
    L = transpose(L);
    for(var i=0; i<L.length; i++){
        html += '<tr>'
        for(var j=0; j<L.length; j++){
            html += `<th>${L[i][j]}</th>`
        }
        html += '</tr>'
    }
    html += '</table>'


    document.getElementById('sol_cholesky').innerHTML = html;
}

function start(){
    document.getElementById("n_input").onchange = update_n
    document.getElementById("submit_ex1").onclick = solve_Cholesky

}