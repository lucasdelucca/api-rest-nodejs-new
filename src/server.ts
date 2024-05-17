import { app } from './app'
import { env } from './env'

const port = env.PORT
app.listen({ port }).then(() => {
  console.log('🚀 Started server at http://localhost:' + port)
})
