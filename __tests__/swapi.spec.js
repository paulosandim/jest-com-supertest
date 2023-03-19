const request = require('supertest')

it('', async () => {
  // https://swapi.dev/api
  // /people/1

  const resposta = await request(`https://swapi.dev/api`).get(`/people/1`)

  console.log(resposta.status)
  console.log(resposta.body)

})