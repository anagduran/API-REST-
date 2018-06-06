import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import {config} from 'dotenv'


const SETTINGS = config()
//console.log('SETTINGS', SETTINGS)
export default app => {
    app.disable('x-powered-by') // sirve para no permitir a los usuarios que usen nuestra api ver que se hizo con express
    app.set('env', SETTINGS.parsed.ENV)
    app.set('config', SETTINGS.parsed)
    app.locals.ENV= app.set('env')
    app.locals.config = app.set('config')
    console.log('config', app.locals.config)

    if(SETTINGS.parsed.NODE_ENV !== 'test') {
        app.use(logger('combined'))
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))

    //cors es: cuando tenemos una api rest y hacemos una peticion desde una URL distinta 
    // a la que esta publicada en nuestra api tenemos un problema de que el origen de las
    //peticiones es totalmente distinto a la de nuestra api, por seguridad el protocolo
    //HTTP nos permite modificar cabeceras, entonces este paquete nos permite configurarlas
    // de manera automatica

    app.use(cors())


}