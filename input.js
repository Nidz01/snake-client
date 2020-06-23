// Stores the active TCP connection object.
let connection;

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
  
  const handleUserInput = function(key) {
    if(key === '\u0003') {
      process.exit();
    }
    if(key === 'w') {conn.write('Move: up')};
    if(key === 'a') {conn.write('Move: up')};
    if(key === 's') {conn.write('Move: left')};
    if(key === 'd') {conn.write('Move: right')};
  };
  stdin.on('data', handleUserInput); //callback to pass any key strokes to hUI;
  return stdin;
}

module.exports = setupInput;
