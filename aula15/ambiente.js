nums = [5, 8, 2, 3, 7]
nums.push(1) // --> [5, 8, 2, 3, 7, 1]
nums.sort() // --> [1, 2, 3, 5, 7, 8]
console.log(`O vetor tem ${nums.length} posições.`)
console.log(`O primeiro valor do vetor é ${nums[0]}.`)
let i = nums.indexOf(7)
if (i == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${i}.`)
}