// process.stdin.resume()
// process.stdin.setEncoding('ascii')
// var input = ''
// process.stdin.on('data', function (chunk) {
//   input += chunk
// })
// process.stdin.on('end', function (data) {
//   // now we can read/parse input
//   console.log(data)
// })

function teste(eee) {
  let result = []
  const maxDigit = Number(eee)
  for (let i = 1000; i <= 9999; i++) {
    let checkSum = 0

    const a = i.toString().split('')
    console.log('a: ', a)
    for (const data of a) {
      const toNumber = Number(data)
      if (maxDigit >= toNumber) {
        console.log(maxDigit, ' é menor/igual a ', toNumber)
        checkSum += toNumber
      } else {
        console.log(maxDigit, ' não é menor/igual a ', toNumber)
        break
      }
    }
    // console.log(checkSum)
    if (checkSum === 21) {
      result.push(i)
    }
  }
  return result
}

const resposta = teste(6)

console.log(resposta)
