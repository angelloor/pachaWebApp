getLevel = (experiencia) => {
    let experienceInicial = experiencia
    let level = 1
    while ((Math.sign(experienceInicial - (level * 100)) == 1) || Math.sign(experienceInicial - (level * 100)) == 0) {
        experienceInicial -= (level * 100)
        level += 1
    }
    return { level, actual: experienceInicial, meta: (level * 100) }
}

module.exports = {
    getLevel
}