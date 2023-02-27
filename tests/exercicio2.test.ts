import { exercicio2 } from '../src/exercicio2'

describe("exercicio2", () => {
    test("deve receber uma data no formato 'aaaa/mm/dd' e retorna outra string no formato 'dd/mm/aaaa'", () => {
        const result = exercicio2("1998/04/08")
        expect(result).toEqual("08/04/1998")
    })
})