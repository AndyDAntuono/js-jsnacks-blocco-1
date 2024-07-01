const array = []


for (let i = 0; i < 6; i++) {
    let number = prompt("Enter a number: ");

    if(number % 2 !== 0) {
        array.push(number)
    }
    
    
    
  }

  console.log(array)
