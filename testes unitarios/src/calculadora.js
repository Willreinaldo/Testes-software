class Calculadora {
    sum(...numbers) {
        return numbers.reduce((accumulator, current) => {
            return accumulator += current;
        });
    }
    multiply(a, b) {
        return a * b
    } 
    divide(a, b) {
        if (b === 0 || b > a) {
            throw new Error('Invalid argument: Tentou dividir por zero ou um numero menor por outro maior')
        }
        return a / b
    }
}
module.exports = Calculadora;