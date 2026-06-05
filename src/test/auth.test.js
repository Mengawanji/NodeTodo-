import request from 'supertest';
import app from '../app.js';
import pool from '../config/database.js';

const timestamp = Date.now();

const testUser = {
  username: `user${timestamp}`,
  email: `user${timestamp}@example.com`,
  password: 'Password123!'
};

describe('Auth Routes', () => {
  it('should register a user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send(testUser);

    expect(response.status).toBe(201);
  });

it('should login successfully with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });

    expect(response.status).toBe(200);
});

  it('should reject invalid password', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: 'WrongPassword'
      });

    expect(response.status).toBe(401);
  });
});

afterAll(async () => {
  await pool.query(
    'DELETE FROM users WHERE email = $1',
    [testUser.email]
  );

  await pool.end();
});