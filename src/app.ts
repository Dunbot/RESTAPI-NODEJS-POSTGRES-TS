//Aqui estaran las configuraciones del servidor
import express,{Application} from 'express';
import  morgan  from "morgan";

//rutas
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';


export class App{
    private app:Application;
    


    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        //Configuracion del puerto que escoja una de las 3 opciones
        this.app.set('port',this.port || process.env.PORT || 3000 )
    }

    middlewares(){
        this.app.use(morgan('dev')); //Brinda informacion 
        this.app.use(express.json()); //solo informacion json

    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts',PostRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor en el puerto ',this.app.get('port'));
    }
}