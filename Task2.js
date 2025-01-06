
const remainderDivision = (firstNumber, secondNumber) => {
    let remainderResult
    if(firstNumber > secondNumber){
        remainderResult = firstNumber % secondNumber
    } else {
        remainderResult = secondNumber % firstNumber
    }
    return remainderResult
}


console.log(remainderDivision(0, 10));