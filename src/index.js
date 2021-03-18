import app from './app';
import '@babel/polyfill';

async function main() {
    await app.listen(3000);
    console.log('Servidor na porta 3000');
};

main();