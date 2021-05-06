const app = require('../server');
const testServer = require('supertest');
const { exampleBadSecret } = require('../constants/warnings');


describe('testing server routes', () => {

    test('user route should return 200 if user is logged in', async () => {
        const agent = testServer.agent(app);
        const loginResponse = await agent.post('/api/user/login')
                                .send({username: 'simmyjuan', password: '1234'});
        expect(loginResponse.statusCode).toBe(200);
    });
});