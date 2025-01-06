
const group1 = "aaa"
const group2 = "bbb"
const group3 = "ccc"

const combineString = (group1, group2, group3) => {
    let tempArr = []
    const arr1 = [...group1]
    const arr2 = [...group2]
    const arr3 = [...group3]
    
    for (let i = 0 ; i < arr1.length ; i++){
        tempArr.push(arr1[i])
        tempArr.push(arr2[i])
        tempArr.push(arr3[i])
    }

    return tempArr.join("")
}

console.log(combineString(group1, group2, group3));

