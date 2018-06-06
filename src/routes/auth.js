import express from 'express'
import jwt from 'jwt-simple'

const router = express.Router()

router.post('/',(req,res,next)=>{
    const payload = {
        email: req.params.email

    }


    return res.status(201).send({token : jwt.encode(payload, req.app.locals.config.TOKEN)})
    // PORQUE LOCALS.CONFIG , porque en nuestro config hemos definido en app.locals.config
    // toda la configuracion que hemos cargado desde los settings de nuestras variables de entorno
    // esto va a generar un oken nuevo que va a ser devuelto
})
export default router
