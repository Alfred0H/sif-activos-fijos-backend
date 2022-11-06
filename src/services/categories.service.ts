import {Request, Response} from 'express';

class CategoriesService{
    public async getList( req: Request, res: Response ): Promise <Response> {
        
        console.log(req.query);

        return res.json({
            "Categories"  : "Esto sera una lista de categorias",
            "Metodo" : "GET"
        });
    }

    public async getOne( req: Request, res: Response ): Promise <Response> {
       
        const id = req.params.id;
        console.log(id);

        return res.json({
            "Categories"  : "Esto Captura un valor",
            "Metodo" : "GET"
        });
    }

    public async create( req: Request, res: Response ): Promise <Response> {
        
        const name = req.body.name;
        const description = req.body.description;

        console.log({name, description})
        
        return res.json({
            "Categories"  : "Esto crea una categoria",
            "Metodo" : "POST"
        });
    }

    public async update( req: Request, res: Response ): Promise <Response> {
        return res.json({
            "Categories"  : "Esto edita una categorias",
            "Metodo" : "PACH"
        });
    }

    public async delete( req: Request, res: Response ): Promise <Response> {
        return res.json({
            "Categories"  : "Esto elimina una categorias",
            "Metodo" : "DELETE"
        });
    }


}

export default new CategoriesService();