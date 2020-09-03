const request = require('supertest');
const app = require('../../src/app');


module.exports ={ 
    testarProfile(){
        it('Shoud be able to Profile', async () => {
            const ong = await request(app)
            .get('/ongs');

            //console.log(ong.body[0]);

            const response = await request(app)
            .get('/profile')
            .set({
                Authorization: ong.body[1].id
            });
            //console.log(response.body);
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
            expect(response.body[0]).toHaveProperty('description');
            expect(response.body[0]).toHaveProperty('value');
            expect(response.body[0]).toHaveProperty('ong_id');
            
        });
    }
};

