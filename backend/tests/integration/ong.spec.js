const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll( async () => {
        await connection.destroy();
    });

    it('Shoud be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Bananossauro",
            email: "contato@apad.com",
            whatsapp:"9923459709",
            city: "Fortaleza",
            uf: "CE"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});