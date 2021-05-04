export default function (url, options, timeout = 7000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => {
                reject('Tiempo de respuesta agotado😦')
            }, timeout)
        )
    ])
}