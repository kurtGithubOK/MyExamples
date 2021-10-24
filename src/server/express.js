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

// Builtin middleware for serving static files.
// Allows access to url/filename directly such as simpletextfile.txt.  
// Ex: http://localhost:3000/images/kitten.jpg
app.use(express.static('public'));

// How to return just a string using res.send(...).  
app.get('/', (req, res) => res.send('This text sent via res.send(...)'));

// __dirname - built in variable.  Path to current directory.
// console.log('__dirname', __dirname); // C:\Users\kurt\workspace\MyExamples\src\server
// console.log('__filename', __filename); // C:\Users\kurt\workspace\MyExamples\src\server\express.js

// How to return contents of a file.
app.get('/getFile', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/helloWorld.html'))
);

// res.json() returns stringified object.
app.get('/getJson', (req, res) => {
  res.json( { term: 'api', description: 'description here.' } );
});

// GET route that returns any specific term
app.get('/people/:id', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestedId = parseInt(req.params.id);
  // Iterate through the terms name to check if it matches `req.params.term`
  const foundPerson = peopleIknow.find( (person) => {
    return person.id === requestedId;
  });

  if(foundPerson) res.json(foundPerson);
  else return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);


// Start server on a given port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


