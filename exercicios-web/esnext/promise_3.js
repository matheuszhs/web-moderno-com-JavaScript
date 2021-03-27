const gerarNumeroEntre = (min, max) => {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const random = Math.floor(Math.random() * (max - min + 1)) + min
        resolve(random)
    })
}

gerarNumeroEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)

