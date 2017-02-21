const http = require('http');
const server = http.createServer();
const models = require('./models');
const Promise = require('bluebird');

server.on('request', require('./app'));

// sync creates the table if it does not exist. Force true drops the table first if it exists
// order matters because we cannot drop the User table if there are items in the Page table that reference it
models.Page.sync({force: true})
  .then(() => models.User.sync({force: true}))
  .then(() => {
    server.listen(3001, () => {
      console.log('Server is listening on port 3001!');
    });
  })
  .catch(console.error);

