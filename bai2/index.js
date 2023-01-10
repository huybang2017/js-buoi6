function exponential(n,x){
    let sum = 0
    for(let i = 1;i <= n;i++){
        sum += Math.pow(x,i);
    }
    return sum;
}
document.getElementById("click").onclick = function(){
    let x = +document.getElementById("x").value;
    let n = +document.getElementById("n").value;
    let alert = document.getElementById("alert");
    alert.classList.add('d-block');
    alert.innerHTML = `Tổng: ${exponential(n,x)}`;
}