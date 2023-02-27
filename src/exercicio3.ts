interface Exercicio3 {
    name: string,
    email: string
}

export const exercicio3 = (
    name: string,
    email: string
    ) => {
        const user = {
            name, email
        }
        const arrUsers = [user]
        const astrodev = {
            name: "Astrodev",
            email: "astrodev@gmail.com"
        }

        if(user !== astrodev){
            arrUsers.push(astrodev)
        }
        return arrUsers
}