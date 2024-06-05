const request = require('supertest');
const app = require('../server');
const Experience = require('../models/Experience');

describe('Experience API', () => {
  it('should create a new experience', async () => {
    const response = await request(app)
      .post('/api/experience')
      .send({
        title: 'Software Engineer',
        company: 'Tech Company',
        startDate: '2021-01-01'
      })
      .expect(201);

    expect(response.body.title).toBe('Software Engineer');
    expect(response.body.company).toBe('Tech Company');
  });

  it('should fetch all experiences', async () => {
    const response = await request(app)
      .get('/api/experience')
      .expect(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
