import express from 'express'
import mocks from '../../mocks'
import { auth } from '../middlewares';
const router = express.Router()

router 
.get('/',(req,res,next)=>{
    res
    .status(200)
    .json(mocks)
})
.post('/',auth, (req,res,next)=>{
    console.log('Body received', req.body)
    res
    .status(201)
    .json(req.body)
})

router.get('/:singer',(req,res,next)=>{
    const songBySinger= mocks
                        .filter(item=> item.singer.toLowerCase()=== req.params.singer.toLowerCase())

    res
    .status(200)
    .json(songBySinger)
})

export default router