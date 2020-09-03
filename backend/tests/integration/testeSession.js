const request = require('supertest');
const app = require('../../src/app');


module.exports ={ 
    testarLogin(){
        it('Shoud be able to Login', async () => {
            const ong = await request(app)
            .get('/ongs');

            //console.log(ong.body[0]);

            const response = await request(app)
            .post('/sessions')
            .send({
                id: ong.body[0].id
            });
            //console.log(response.body);
            expect(response.body).toHaveProperty('name');
            
        });
    }
};

