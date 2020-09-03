const request = require('supertest');
const app = require('../../src/app');

var ong_id = 0;

module.exports = {
    testeCreateIncident(){
        it('Shoud be able to create a new Incident', async () => {

            const ong = await request(app)
                .post('/ongs')
                .send({
                    name: "teste",
                    email: "teste@test.com",
                    whatsapp:"9264389201",
                    city: "Gotham",
                    uf: "TX"
                });
    
            ong_id = ong.body.id;    
            const response = await request(app)
            .post('/incidents')
            .set({
                authorization: ong.body.id
            })
            .send({
                title: "titulo teste",
                description: "descrição teste",
                value: 70
            });
            //console.log(response.body);
            expect(response.body).toHaveProperty('id');
        });
    },
    testeIndexIncidents(){
        it('Shoud be able to return all Incidents joined with the their Ongs', async () => {

            const response = await request(app)
            .get('/incidents?page=1');

            //console.log(response.body);
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
            expect(response.body[0]).toHaveProperty('description');
            expect(response.body[0]).toHaveProperty('value');
            expect(response.body[0]).toHaveProperty('ong_id');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('email');
            expect(response.body[0]).toHaveProperty('whatsapp');
            expect(response.body[0]).toHaveProperty('city');
            expect(response.body[0]).toHaveProperty('uf');

        });
    },
    testedeleteIncident(){
        it('Shoud be able to return all Incidents joined with the their Ongs', async () => {

            const response = await request(app)
            .delete('/incidents/1').
            set({
                Authorization: ong_id
            });

            //console.log(response.status);
            expect(response.status).toEqual(204);            

        });
    }


}