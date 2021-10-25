// Imports
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

const peopleIknow = [
  { id: 1, name: 'kurt' },
  { id: 2, name: 'chris' },
  { id: 3, name: 'aaron' }
]

// __dirname - built in variable.  Path to current directory.
// console.log('__dirname', __dirname); // C:\Users\kurt\workspace\MyExamples\src\server
// console.log('__filename', __filename); // C:\Users\kurt\workspace\MyExamples\src\server\express.js

// Builtin middleware for serving static files.
// Allows access to url/filename directly such as simpletextfile.txt.  
// Ex: http://localhost:3000/images/kitten.jpg
app.use(express.static('public'));

// Middleware for parsing application/json
app.use(express.json());

// Middleware for urlecoded data
// `urlencoded` data represents a URL encoded form. If we had a HTML form with fields: `username` and `password`, our urlencoded data would
// be "username=JohnAppleseed&password=passw0rd"
// This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ extended: true }));

// How to return just a string using res.send(...).  
app.get('/', (req, res) => res.send('This text sent via res.send(...)'));

// How to return contents of a file.
app.get('/getFile', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/helloWorld.html'))
);

// res.json() returns stringified object.
app.get('/getJson', (req, res) => {
  res.json( { term: 'api', description: 'description here.' } );
});

// Using query string parameters.
app.get('/people/:id', (req, res) => {
  const requestedId = parseInt(req.params.id);
  const foundPerson = peopleIknow.find( (person) => {
    return person.id === requestedId;
  });

  if(foundPerson) res.json(foundPerson);
  else return res.json('No match found');
});

// Post requests.
app.post('/post', (req, res) => {
  console.log('Request method:', req.method);
  // console.log('Request rawHeaders:', req.rawHeaders);

  // To get the body out of the request:
  const requestBody = req.body;
  console.log('requestBody:', requestBody);
  // respond to user to complete request-response cycle.
  res.status(200).json(requestBody);
});







// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) => res.send(`The URL you requested was not found`) );

// Start server on a given port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


