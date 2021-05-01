//PRUEBAS JEST

const { expect } = require('@jest/globals')
const functions= require('./functions')

test('Valida dias de la semana', ()=>{
    expect(functions('02/02/2020')).toBe(7)
})


/*test('Valida placa del vehiculo', ()=>{
    expect(functions('PBD9180',1,'12:30')).toBe(false)
})*/


test('Valida hora de salida', ()=>{
    expect(functions('14:00')).toBe(true)
})