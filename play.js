const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  /* An event handler to handle incoming 
  data and console log it for the player.
  */
  conn.on('data', (data) => {
    console.log('you ded cuz you idled'); // a message sent to us from the server when it kicks out our snake for idling...
  });

  return conn;
}

console.log('Connecting ...');
connect();
