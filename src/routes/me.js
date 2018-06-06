import express from 'express'

const router = express.Router()

router.get('/',(req,res,next)=>{
    res
    .status(200)
    .json({
        name: 'Ana Gabriela',
        lastmane:'Duran Delgado' 
    })
})

export default router