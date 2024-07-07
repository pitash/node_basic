const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
ourReadStream.on('data', (data) => {
    console.log(data);
});

console.log('Hello');