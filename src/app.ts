import express, {json} from 'express'; //paquete para servidor web
import categoriesControllers from './controllers/categories.controllers';
import Connection from './database/connection';

class App{

    public express : express.Application;
    private conecction : Connection | undefined; 

    constructor(){
        this.express = express();
        this.middlewares();
        this.db();
        this.routes();
    }
    middlewares(){
        this.express.use(json());
    }
    routes(){
      this.express.use('/api', categoriesControllers.router) ; 
    }

    db(){
        this.conecction = new Connection();
        this.conecction.connection
        .sync()
        .then(()=>{
            console.log(`Database is connected`);
        })
        .catch((err) => {
            console.log(`Error`, err);
        });

    }
    listen(port: number){
        this.express.listen(port,
             () => console.log(`Server run in: http://localhost: ${port}`));
    }
}

export default new App(); 