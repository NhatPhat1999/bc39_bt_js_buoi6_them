function soNguyento() {
    var number = document.getElementById("number").value * 1;
    var rs = "";
    var flag = true;
    for (var i = 2; i <= number; i++) {
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
            }
        };
        if (flag) {
            rs += i + " ";
        }
        flag = true;
    }
    console.log(rs);
    document.getElementById("infosoNguyento").innerHTML = rs;
}



// number = 15;
// 1    i = 4
//          j = 2

// console.log(Math.floor(Math.sqrt(9)));