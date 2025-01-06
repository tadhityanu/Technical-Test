
const sampleArr = ['n', 's']

const directionBlock = (direction) => {
    let count = 0

    if (direction.length !== 10) {
        return false
    } else {
        for (let i = 0; i < direction.length; i++) {
            switch (direction[i]) {
                case 'n': count += 1
                    break
                case 's': count -= 1
                    break
                case 'e': count += 1
                    break
                case 'w': count -= 1
                    break
                default: count += 0
            }            
        }
        if (count !== 0) {
            return false
        } else {
            return true
        }
    }
}

console.log(directionBlock(sampleArr));
