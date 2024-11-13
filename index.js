const http = require('http');
const path = require('path');
const fs = require('fs');

/*
const obj = require('./user');

console.log(obj.user)

obj.sayHello();

// Näitab praegust kausta
console.log("work dir", __dirname);
// Näitab kehtiva faili teed
console.log("work file", __filename);
*/

/*
const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('<h1>Hello from NodeJS</h1>')
    res.write('<h2>Hello from NodeJS</h2>')
    res.write('<h3>Hello from NodeJS</h3>')
    res.end(`
        <div style="background: red; width: 200px; height: 200px;">
            <h1>Test</h1>
        </div>
        `)
})

server.listen(3000, () => {
    console.log('Server is running...')
})
*/

/*
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': "text/html"
        })
        res.end(`
            <h1>Form</h1>
            <form method="post" action="/">
                <input name="title" type="text" />
                <button type="submit">Send</button>
            </form>
            `)
    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': "text/html; charset=utf-8"
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `)
        })
    }
})

server.listen(3000, () => {
    console.log('Server is running... (=^w^=)');
})
*/

// Loob serveri
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            // Vastuseks GET taotlus teel ' / ' saadab sisu
            // faili index.html
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/about') {
            // Kui kasutaja on GET-meetodil teel '/about', siis
            // saadab talle faili about sisu.html
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err;
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/api/users'){
            // Määrab serveri oleku 200 (Kõik on korras) ja tähistab, et
            // töötab JSON - vormingus andmetega
            res.writeHead(200, {
                'Content-Type': 'text/json'
            })

            const users = [
                {name: "Vasya", age: 20},
                {name: "Elena", age: 23}
            ]

            res.end(JSON.stringify(users))
        }
    } else if (req.method === 'POST') {
        const body = []
        // Määrab serveri oleku 200 (Kõik on korras) ja tähistab, et
        // töötab andmetega html-vormingus
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `)
        })
    }
})

// Käivitab serveri
server.listen(3000, () => {
    console.log('Server is running... (=^w^=)')
})