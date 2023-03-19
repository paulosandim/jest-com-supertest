const request = require('supertest')

it('', () => {
  // https://swapi.dev/api
  // /people/1

  const resposta = request(`https://swapi.dev/api`).get(`/people/1`)

  console.log(`Status: ${resposta.status}`)
})