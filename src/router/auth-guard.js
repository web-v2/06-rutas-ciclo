
const isAuthenticated = (to, from, next) =>{
    //console.log({to, from, next});
    return new Promise(() =>{
        const random = Math.floor(Math.random()*100)
        if (random > 50) {
            console.log('autenticado!');
            next()
        }else{
            console.log(random,' Bloqueado por isAuthenticated Guard');
            next({ name: 'pokemon-home' })
        }
    })
}

export default isAuthenticated