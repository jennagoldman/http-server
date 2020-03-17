  
const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

module.exports = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    // app.post('/red', () => ) for create
    // app.get('/red', () => {}) fro get a thing
    if(request.path === '/' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: 'hi'
      }));
    } else if(request.path === '/echo' && request.method === 'POST') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: 'Status 200 OK'
      }));
    } else if(request.path === '/red' && request.method === 'GET') {
      // res.send()
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>RED</h1>
          </body>
        </html>`
      }));
    } else if(request.path === '/green' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>GREEN</h1>
          </body>
        </html>`
      }));
    } else if(request.path === '/blue' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `
        <html>
          <body>
            <h1>BLUE</h1>
          </body>
        </html>`
      }));
    } else {
      client.end(createResponse({
        contentType: 'text/html',
        status: '404 not found',
        body: `
        <html>
          <body>
            <h1>Page Not Found</h1>
          </body>
        </html>`
      }));
    }
  });
});
