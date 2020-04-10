const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
 
    afterAll( async () => {
        await connection.destroy();
    });

    it('Shoud be able to return all ONGs', async () => {
        const response = await request(app)
        .get('/ongs');


        //console.log(response.body);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('email');
        expect(response.body[0]).toHaveProperty('whatsapp');
        expect(response.body[0]).toHaveProperty('city');
        expect(response.body[0]).toHaveProperty('uf');
        expect(response.body[0].id).toHaveLength(8);
        expect(response.body[0].uf).toHaveLength(2);

    });
});