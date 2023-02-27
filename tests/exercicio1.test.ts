import { exercicio1 } from '../src/exercicio1'

describe("exercicio1", () => {
    test("deve receber um numero em string e retornar o mesmo numero em number", () => {
        const result = exercicio1("1")
        expect(result).toBe(1)
    })
})