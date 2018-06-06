import jwt from 'jwt-simple'

export const auth = (req,res,next)=>{
    if(!req.headers.authorization){
        return res
            .status(401)
            .send({message: 'No autenticado'})
    }

    //generar el token
    const token = req.headers.authorization.split(' ')[1]
    //decodificar el token que nos esta enviando
    const payload = jwt.decode(token, req.app.locals.config.TOKEN)

    req.user = payload.email 

    next()
    }