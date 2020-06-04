/**
 * Establishes connection with the game server
 */
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
    conn.write('Name: NID');
    conn.write("Move: up");
    conn.write('Move: down');
    conn.write('Move: left');
    conn.write('Move: right');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = connect;
