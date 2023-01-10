document.getElementById("click").onclick = function(){
    let sum = 0;
    let count = 0;
    // debugger
    while(sum < 10000){
        count++;
        sum += count;
    }
    let alert = document.getElementById("alert");
    alert.classList.add('d-block');
    alert.innerHTML = `số nguyên dương nhỏ nhất: ${count}`;
}