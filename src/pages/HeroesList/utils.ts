export const generateLetters = () => {
    const letters = []
    const a = 97
    const z = 122
    for (let indexLetter = a; indexLetter <= z; indexLetter++) {
        letters.push(String.fromCharCode(indexLetter))
    }
    return letters
}
