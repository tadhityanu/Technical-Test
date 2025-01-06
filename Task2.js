
const firstNumber = 13 
const secondNumber = 72

const remainderDivision = (firstNumber, secondNumber) => {
    let remainderResult
    if(firstNumber > secondNumber){
        remainderResult = firstNumber % secondNumber
    } else {
        remainderResult = secondNumber % firstNumber
    }
    return remainderResult
}


console.log(remainderDivision(firstNumber, secondNumber));