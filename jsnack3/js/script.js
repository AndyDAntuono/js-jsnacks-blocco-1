let btn = document.getElementById("calc");
let somma = 0;

btn.addEventListener("click", function(){

    let number = document.getElementById("insert_number").value;
    console.log(number)


    splited_num = number.split("");
    console.log(splited_num)

    for (i = 0; i <splited_num.length; i++) {
        console.log(splited_num[i])
        somma += parseInt(splited_num[i]);

        let result = document.getElementById("addition");
        result.innerHTML = somma
        
    }

    



})