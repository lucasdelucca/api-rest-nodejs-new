import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

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

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Started server at http://localhost:3333')
})
