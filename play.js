const net = require('net');
const connect = require('../d3/client');
console.log('Connecting ...');
connect();
let connection;
const handleUserInput = function (input, conn) {
  if (input === '\u0003') {
    process.exit();
  } else if (input === 'w') {
    conn.write("Move: up");
  } else if (input === 's') {
    conn.write('Move: down');
  } else if (input === 'a') {
    conn.write('Move: left');
  } else if (input === 'd') {
    conn.write('Move: right');
  } else if (input === 'm') {
    conn.write('Say: HEYYY');
  }
};
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => {
    handleUserInput(data, conn);
  })
  return stdin;
}; 
module.exports = setupInput();
