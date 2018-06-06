import request from 'supertest'
import server from '../src'
import mocks from '../mocks'

describe('Music',()=>{
    let instance = undefined
    beforeEach(()=>{       
        instance= server.start()
    })

    afterEach(()=>{
        server.close()
        instance= undefined
    })

    //test 1
    describe('/GET /music', ()=>{
        it('it should GET', ()=>{
   
        

            request(instance).get('/music').expect('Content-Type',/json/).expect(200).end((err,res)=>{
                if(err) throw err
            })
        })
    })

    //test 2

    describe('/GET /music/RagnBone', ()=>{
        it('it should GET', ()=>{
            const expected = mocks.filter(item=>
            item.singer.toLowerCase()==='RagnBone'.toLowerCase())
            request(instance).get('/music/RagnBone').expect('Content-Type',/json/).expect(200, expected).end((err,res)=>{
                if(err) throw err
            })
        })
    })

    //test 3
    describe('/POST /music', ()=>{
        it('it should POST', ()=>{
             const body = {
                 song: 'Sugar',
                 singer: 'Robin Schulz',
                 album: 'OK'
             }

             const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.FyKpDq5EUXNk0AHqWmrK2LVgtV4maW7VRWSET6oDOoE'
        
            request(instance).post('/music')
                             .set('Authorization',`JWT ${token}`)
                             .send(body)
                             .expect(201, body)
                             .end((err,res)=>{
                if(err) throw err
            })
        })
    })
})