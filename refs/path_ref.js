const path = require('path');

// Näitab kehtiva faili teed
console.log(__filename);
//Näitab kehtiva faili nime
console.log(path.basename(__filename))
//Näitab kehtiva kataloogi nime, kus käivitatav fail asub
console.log(path.dirname(__filename))
//Näitab töötava faili laiendust
console.log(path.extname(__filename))

//Näitab juurkataloogi, faili teed, faili nime ennast, laiendit ja nime.
console.log(path.parse(__filename))

// Näitab kataloogi teed, kus käivitatav fail asub, ja lisab sellele teele täiendava kausta ja lõppfaili
console.log(path.join(__dirname, 'test', 'second.html'))
// Näitab kogu tee lõppfaili
console.log(path.resolve(__dirname, './test', '/second.html'))