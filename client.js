const net = require('net');
/*
 Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  /* An event handler to print a message to the screen
  when connection is successfully established.
  */
 conn.on('connect', () => {
   console.log('"Successfully connected to game server" ');
   conn.write('Name: NQK');
   /*
   // timers for snake to move in different directions upon connection with server
   setTimeout(() => { 
    conn.write("Move: up");
   }, 2000);
   setTimeout(() => { 
    conn.write("Move: left");
   }, 4000);
   setTimeout(() => { 
    conn.write("Move: down");
   }, 6000);
   setTimeout(() => { 
    conn.write("Move: right");
   }, 8000);
   */
  });
  
  /* An event handler to handle incoming
  data and console log it for the player.
  */
 conn.on('data', (data) => {
   console.log('you ded cuz you idled'); // a message sent to us from the server when it kicks out our snake for idling...
  });
  
  return conn;
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = function(key) {
    if(key === '\u0003') {
      process.exit();
    }
  };
  stdin.on('data', handleUserInput); //callback to pass any key strokes to hUI;
  return stdin;
};


setupInput();

module.exports = connect;
