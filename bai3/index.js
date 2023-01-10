// đệ quy giai thừa
// thuật toán n! = n*(n-1)!
function factorial(n){
    if(n === 1)
        return 1;
    return(n * factorial(n - 1));
}
document.getElementById("click").onclick = function(){
    let n = +document.getElementById("n").value
    let alert = document.getElementById("alert")
    alert.classList.add('d-block')
    alert.innerHTML = `giai thừa: ${factorial(n)}`
}