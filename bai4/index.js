document.getElementById("click").onclick = function(){
    let alert = document.getElementById("alert");
    for(let i = 1;i <= 10;i++){
        if((i % 2) === 0){
            alert.innerHTML+= `<div class="alert bg-info m-0" id="alert">div chẵn</div>`
        }else{
            alert.innerHTML+= `<div class="alert bg-danger m-0" id="alert">div lẻ</div>`
        }
    }
}