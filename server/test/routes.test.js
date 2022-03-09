/* eslint-disable no-undef */
const supertest = require('supertest');
const routes = require('../app');

test('test end point /notfound to get content type text/html', (done) => {
  supertest(routes)
    .get('/notdefine')
    .expect(404)
    .expect('content-type', 'text/html; charset=UTF-8')
    .end((err) => {
      if (err) done(err);
      done();
    });
});
