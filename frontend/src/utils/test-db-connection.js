import db from './db.js';

const testDBConnection = () => {
  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
    } else {
      console.log('Connected to database.');
    }
    db.end(); // Close the connection after testing
  });
};

export default testDBConnection;
