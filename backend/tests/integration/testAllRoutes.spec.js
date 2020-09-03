//Sempre rodar com 'npm test -runInBand'
const connection = require('../../src/database/connection');
const testeOngs = require('./testeOngs');
const testeIncident = require('./testeIncident');
const testeSession = require('./testeSession');
const testeProfile = require('./testeProfile');

describe('ONG', () => {
    beforeAll( async () =>{
        //await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
        await connection.destroy();
    });
    
    //testando rotas para Ongs
    testeOngs.testarCadastro();
    testeOngs.testarGetOngs();
    
    
    //testando rotas para Incidents
    testeIncident.testeCreateIncident();
    testeIncident.testeIndexIncidents();
    
    //testando rota de login
    testeSession.testarLogin();

    //testando rota de profile
    testeProfile.testarProfile();

    //teste deletar incident
    testeIncident.testedeleteIncident();
    
    
});