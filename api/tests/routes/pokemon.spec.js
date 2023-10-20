/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  image: 'pikachu.png', // Proporciona una URL de imagen
  hp: 100,              // Proporciona un valor para HP
  attack: 50,           // Proporciona un valor para Attack
  defense: 40,          // Proporciona un valor para Defense
};


describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
    describe('GET /pokemons', () => {
      it('should return a list of Pokémon', (done) => { // Agrega (done) aquí
        agent
          .get('/pokemons')
          .expect(200) // Verifica el código de estado 200
          .expect('Content-Type', /json/) // Verifica que la respuesta sea JSON
          .expect((res) => {
            // Verifica que la respuesta contenga una lista de Pokémon
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length.above(0);
          })
          .end(done); // Llama a la función done al final para indicar que la prueba ha finalizado
      });
    });
    describe('GET /types', () => {
      it('should return a list of types', () =>
        agent
          .get('/types')
          .expect(200) // Verifica el código de estado 200
          .expect('Content-Type', /json/) // Verifica que la respuesta sea JSON
          .expect((res) => {
            // Verifica que la respuesta contenga una lista de Pokémon
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length.above(0);
          })
      );
    })
    
});
