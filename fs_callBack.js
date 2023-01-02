const {writeFile, appendFile, readFile, unlink} = require('fs')

//fs con callback

const nombreArchivo ='objetos-casa.txt'

const palabras =`
hola
vaso
tierra
celular
`;

const palabrasAppend =`
monitor 
mouse
notebook
pinza`

function callBackWriteFile(err) {
    if (err) throw err;
    console.log('Guardado con exito');
    appendFile(nombreArchivo, palabrasAppend, (err) => {
        if(err) throw err;
        console.log('archivo actualizado');
        readFile(nombreArchivo, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
            unlink(nombreArchivo, (err) => {
                if (err) throw err;
                console.log("Archivo eliminado");
            } );
        });
    });
}

writeFile(nombreArchivo, palabras,callBackWriteFile)




