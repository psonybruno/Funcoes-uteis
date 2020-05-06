const generateUniqueId = require('./generateUnitId');

describe('Generate a ID', () => {
    it('should return an ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(10);
    })
})