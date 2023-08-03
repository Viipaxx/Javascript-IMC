const buttonCalc = document.querySelector('#calcular')

buttonCalc.addEventListener('click', () => {
    
    const altura = parseFloat(document.querySelector('#altura').value)
    const peso = parseFloat(document.querySelector('#peso').value)
    const diagnostico = document.querySelector('#diagnostico')

    diagnostico.innerHTML = calculoIMC(peso, altura)

})


calculoIMC = (peso, altura) => {

    const IMC = peso / (Math.pow(altura, 2))
    let diagnostico = ''

    // < 18,5 abaixo do peso 
    if (IMC < 18.5) {
        diagnostico = 'Abaixo do peso normal'
    }
    // <= 24,9 peso normal
    else if (IMC <= 24.9) {
        diagnostico = 'Peso normal'
    }
    // <= 29,9 excesso de peso
    else if (IMC <= 29.9) {
        diagnostico = 'Excesso de peso'
    }
    // <= 34,9 obesidade 1
    else if (IMC <= 34.9) {
        diagnostico = 'Obesidade classe 1'
    }
    // <= 39,9 obesidade 2
    else if (IMC <= 39.9) {
        diagnostico = 'Obesidade classe 2'
    }
    // >= 40 obesidade 3
    else if (IMC >= 40) {
        diagnostico = 'Obesidade classe 3'
    }

    else {
        return 'Valores inválidos'
    }

    return `Diagnóstico: ${diagnostico} <br>IMC: ${IMC.toFixed(2)}`

}