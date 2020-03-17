const request = require('supertest');
const app = require('./app');

describe('app routes', () => {
  it('retrieves the home html page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('posts to the echo page', () => {
    return request(app)
      .post('/echo')
      .then(res => {
        expect(res.text).toEqual('Status 200 OK');
      });
  });

  it('retrieves the red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>RED</h1>
          </body>
        </html>`);
      });
  });

  it('retrieves the green html page', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>GREEN</h1>
          </body>
        </html>`);
      });
  });

  it('retrieves the blue html page', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>BLUE</h1>
          </body>
        </html>`);
      });
  });


});
