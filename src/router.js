import user from './routes/me'
import music from './routes/music'
import  auth  from './routes/auth';

export default app => {
    app.use('/auth',auth)
    app.use('/me',user)
    app.use('/music',music)
}