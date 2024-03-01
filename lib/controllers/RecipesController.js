import express from 'express';

export default class RecipesController {
    constructor(opts) {
        this.recipes = opts.recipes;
    }

    addTo(server) {
        var router = express.Router();
        router.get('/', this.getAll.bind(this));
        router.get('/:id', this.get.bind(this));
        router.post('/', this.post.bind(this));
        router.put('/:id', this.put.bind(this));
        router.delete('/:id', this.delete.bind(this));

        server.use('/api/recipes', router);
    }

    async getAll(_req, res) {
        const recipes = await this.recipes.all();
        res.json(recipes);
    }

    async get(req, res) {
        const {id} = req.params;
        if (!id) return res.status(404).end();

        const recipe = await this.recipes.one(id);
        if (!recipe) return res.status(404).end();

        res.json(recipe);
    }

    async post(req, res) {
        const {title, ingredients, steps, notes} = req.body;
        const model = {title, ingredients, steps, notes};
        
        if (!title || !ingredients || !steps)
            return res.status(400).end();

        await this.recipes.insert(model);
        res.json(model);
    }

    async put(req, res) {
        const {title, ingredients, steps, notes} = req.body;
        
        if (!title || !ingredients || !steps)
            return res.status(400).end();

        const {id} = req.params;
        let model = await this.recipes.one(id);
        if (!model) return res.status(404).end();

        model = Object.assign(model, {title, ingredients, steps, notes});
        await this.recipes.update(model);
        res.status(204).end();
    }

    async delete(req, res) {
        const {id} = req.params;
        const model = await this.recipes.one(id);
        if (!model) return res.status(404).end();

        await this.recipes.delete(model);
        res.status(204).end();
    }
}