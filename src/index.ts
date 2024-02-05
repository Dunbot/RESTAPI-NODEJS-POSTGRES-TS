import {App} from './app' //Importamos las configuraciones

async function main(){
    const app = new App(3000);
    await app.listen();

}

main();