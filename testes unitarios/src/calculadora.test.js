const Calculadora = require('./calculadora');

const calc = new Calculadora();

test('Deve adicionar multiplos numeros', () =>{
    expect(calc.sum(7,3,3,1)).toBe(14);
})

test('Deve multiplicar dois numeros',() =>{
    expect(calc.multiply(2,2)).toBe(4);
})

test('Deve dividir dois numeros', () =>{
    expect(calc.divide(10,2)).toBe(5);
})
test('Não dever retornar numeros decimais', () =>{
    expect(() =>{
        calc.divide(2, 10);
    }).toThrow();
})
test('Deve lançar erro ao tentar dividir por zero', () =>{
    expect(() =>{
        calc.divide(56, 0);
    }).toThrow();
})