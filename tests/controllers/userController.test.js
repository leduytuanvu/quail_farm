const supertest = require('supertest');
const app = require('../../src/app');

describe('User Controller', () => {
    it('should return all users', async () => {
        const res = await supertest(app).get('/api/users');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
