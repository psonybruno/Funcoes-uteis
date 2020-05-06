import { generateID } from "./generateID";

describe('Generate a ID', () => {
    it('should return an ID', () => {
        const id = generateID(5);
        expect(id).toHaveLength(10);
    })
})
