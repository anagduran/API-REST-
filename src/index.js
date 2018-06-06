//PRIMER SERVIDOR PARA REST

import express from 'express'
import config from './config'
import bodyparser from 'body-parser'
import router from './router'

let _server 

const server ={
    start(){
        const app = express()

        config(app)
        router(app)

        //rutas
       /* app.get('/',(req,res,next)=>{
            res
            .status(200)
            .json({data: 'metodo get'})
        })

        app.post('/',(req,res,next)=>{
            res
            .status(201)
            .json({data: 'metodo post'})
        })
        
        
        app.put('/',(req,res,next)=>{
            res
            .status(201)
            .json({data: 'metodo put'})
        })

        app.delete('/',(req,res,next)=>{
            res
            .status(200)
            .json({data: 'metodo delete'})

        })
        */
        
        app.disable('x-powered-y')

        _server = app.listen('9000', ()=>{
            const address= _server.address()
            const host = address.address==='::'
            ? 'localhost'
            : address

            const port= app.locals.config.PORT 

            if(process.env.NODE_ENV !== 'test'){
            console.log(`Servidor abierto en http://' ${host}: ${port}`)
            }
        })
        return _server
    },
    close(){
        _server.close()
    }
}

export default server

if(!module.parent){
    server.start()
}

 