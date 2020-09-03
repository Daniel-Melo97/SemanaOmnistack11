const request = require('supertest');
const app = require('../../src/app');


module.exports ={ 
    testarCadastro(){
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
            //console.log(response.body);
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
        });
    },
    testarGetOngs(){
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
    }
};

