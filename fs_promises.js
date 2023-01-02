const fs = require ('fs');

const nombreArchivo ='objetos-casa-promises.txt'

const palabras =`
cuaderno
vaso
tierra
celular
`;

const palabrasAppend =`
monitor 
mouse
notebook
pinza`


fs.promises
    .writeFile(nombreArchivo, palabras)
    .then(() => {
        console.log("Archivo Escrito");
        operacionesAsincronas();
    })
    .then(() => {fs.promises.unlink(nombreArchivo)})
    .then(() => console.log('proceso finalizado'))
    .catch((err) => {
        console.log(err);
    });

    async function operacionesAsincronas() {
        await fs.promises.appendFile(nombreArchivo, palabrasAppend);
        const contenido = await fs.promises.readFile(nombreArchivo, 'utf-8');
        console.log(contenido);
    }
