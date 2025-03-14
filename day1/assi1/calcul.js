let eval = document.getElementById("eval");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");




add.addEventListener('click',()=>{
    let int1 = Number(document.getElementById("int1").value);
    let int2 = Number(document.getElementById("int2").value);
    let addition = int1+int2;
    console.log(addition);
    eval.textContent = addition;
    },
)

sub.addEventListener('click',()=>{
    let int1 = Number(document.getElementById("int1").value);
    let int2 = Number(document.getElementById("int2").value);
    let substraction = int1-int2;
    console.log(substraction);
    eval.textContent = substraction;
    },
)

div.addEventListener('click',()=>{
    let int1 = Number(document.getElementById("int1").value);
    let int2 = Number(document.getElementById("int2").value);
    let division = int1/int2;
    console.log(division);
    eval.textContent = division;
    },
)

mul.addEventListener('click',()=>{
    let int1 = Number(document.getElementById("int1").value);
    let int2 = Number(document.getElementById("int2").value);
    let multiplication = int1*int2;
    console.log(multiplication);
    eval.textContent = multiplication;
    },
)