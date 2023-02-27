export const exercicio2 = (date: string) => {
    // let dateObj = new Date(date)

    // let dateString = dateObj.toLocaleString('pt-BR', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit'
    // })

    // return dateString


    const dateReverse = date.split('/').reverse().join('/')

    return dateReverse
}