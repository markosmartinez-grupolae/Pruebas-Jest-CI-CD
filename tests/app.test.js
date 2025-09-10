// tests/app.test.js

const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    it('should return a 200 response for the root endpoint', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return a JSON response for the sample route', async () => {
        const response = await request(app).get('/api/sample');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
    });

    it('should handle 404 errors', async () => {
        const response = await request(app).get('/non-existent-route');
        expect(response.status).toBe(404);
    });
});