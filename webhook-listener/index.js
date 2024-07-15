const express = require('express');

const app = express();

app.use( express.json() );

app.get( '/health', ( req, res ) => {
  res.send('Hello World');
});

app.post( '/api/alarms', ( req, res ) => {
  console.log( req.body );
  res.send('ok');
});

app.listen( 3000, () => {
  console.log('Server running on port 3000');
});
