getDate = () => {
    const date = new Date()
    let dia = date.getDate()
    let mes = date.getMonth() + 1
    let anio = date.getFullYear()
    if (dia <= 9) {
        dia = `0${dia}`
    }
    if (mes <= 9) {
        mes = `0${mes}`
    }
    const dateActuallity = `${dia}-${mes}-${anio}`
    return dateActuallity
}

module.exports = {
    getDate
}