function checkPrime(num){
    if(num <= 1){
        return false
    }
    for(let i = 2;i <= Math.sqrt(num);i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
document.getElementById("click").onclick = function(){
    let num = +document.getElementById("num").value
    let alert =  document.getElementById("alert")
    alert.classList.add('d-block')
    for(let i = 2;i <= num;i++){
        if(checkPrime(i) === true){
            alert.innerHTML += `${i} `
        }
    }
}