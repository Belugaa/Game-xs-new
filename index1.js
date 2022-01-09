// lấy dữ liệu là tên người dùng nhập vào
var inputElements = document.querySelectorAll('.data1');

inputElements[0].onchange = function(e){
    localStorage.setItem('namePlayer1',e.target.value);
}

inputElements[1].onchange = function(e){
    localStorage.setItem('namePlayer2',e.target.value);
}



// Lấy dữ liệu là số xs
var inputQuantily = document.querySelectorAll('.quantily');

inputQuantily[0].onchange = function(e){
    if(e.target.checked){
        localStorage.setItem('quantily','1');
    }
}

inputQuantily[1].onchange = function(e){
    if(e.target.checked){
        localStorage.setItem('quantily','2');
    }
}