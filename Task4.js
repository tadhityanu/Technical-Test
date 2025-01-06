
const sampleName = "Paul von Lahnstein"

const acronymName = (name) => {
    let acronymArr = []
    const nonDashName = name.replace("-", " ")
    const splitString = nonDashName.split(" ")

    for(let i = 0 ; i < splitString.length ; i++){
        if(splitString[i].toString().toLowerCase() == "von"){
            acronymArr.push(splitString[i].charAt(0).toString().toLowerCase())
        } else{
            acronymArr.push(splitString[i].charAt(0).toString().toUpperCase())
        }
    }
    
    return acronymArr.join("")
}

console.log(acronymName(sampleName));


