import { app } from './app'
import { env } from './env'

const port = env.PORT
app
  .listen({
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
    port,
  })
  .then(() => {
    console.log('🚀 Started server at http://localhost:' + port)
  })
