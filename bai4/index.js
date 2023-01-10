document.getElementById("click").onclick = function(){
    let alert = document.getElementById("alert");
    alert.classList.add('d-block')
    for(let i = 1;i <= 10;i++){
        if((i % 2) === 0){
            alert.innerHTML+= `div lẻ`
            alert.classList.add("alert-danger")
        }else{
            alert.innerHTML+= `div chẵn`
            alert.classList.add("alert-primary")
        }
    }
}