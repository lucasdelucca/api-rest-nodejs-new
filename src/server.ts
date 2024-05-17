import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/insert', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'test transactions',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app.get('/select', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

const port = env.PORT
app.listen({ port }).then(() => {
  console.log('🚀 Started server at http://localhost:' + port)
})
