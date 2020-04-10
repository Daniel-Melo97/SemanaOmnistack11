const uniqueID = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () =>{
    it('Shoud generate an unique ID',() => {
        const id = uniqueID();

        expect(id).toHaveLength(8);
    })
});