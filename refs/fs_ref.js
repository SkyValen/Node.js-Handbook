const fs = require("fs");
const path = require("path");

// Loob uue kataloogi

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if (err) throw err;

    console.log('Folder was created')
})

// Loob faili, kuhu kirjutab stringi 'SPTV22'
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'SPTV22',
    (err) => {
        if (err) throw err;
        console.log('File was created')

        // lisab loodud faili sees olevale stringile lisamärgid '2024'
        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            ' 2024',
            err => {
                if (err) throw err;
                console.log('file was changed')

                // Väljastab faili mynotes.txt sisu
                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf8',
                    (err, data) => {
                        if (err) throw err;
                        console.log(data)
                    }
                )
            }
        )
    }
)

// Muudab faili nime

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err

        console.log('File renamed')
    }
)