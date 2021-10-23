// Imports
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Builtin middleware.    Allows access to url/filename directly such as simpletextfile.txt.  Ex: http://localhost:3000/images/kitten.jpg
app.use(express.static('public'));

// '/' rtns given string.  How to return just a string.
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// __dirname - built in variable.  Path to current directory.
console.log('xxxxxxx', __dirname); // C:\Users\kurt\workspace\MyExamples\src\server
console.log('yyyyyy', __filename); // C:\Users\kurt\workspace\MyExamples\src\server\express.js

// How to return contents of a file.
app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


