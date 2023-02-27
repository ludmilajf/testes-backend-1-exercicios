import { exercicio3 } from '../src/exercicio3'

describe("exercicio3", () => {
    test("deve receber uma lista de usuários e garantir que o 'Astrodev' está presente nessa lista", () => {
        const result = exercicio3("Ludmila", "ludmila@gmail.com")
        expect(result).toEqual([{"email": "ludmila@gmail.com", "name": "Ludmila"}, {"email": "astrodev@gmail.com", "name": "Astrodev"}])
    })
})