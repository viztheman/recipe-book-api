import Recipe from './models/Recipe.js';

export default class RecipeRepository {
    async all() {
        return await Recipe.find({});
    }

    async one(id) {
        return await Recipe.findById(id);
    }

    async insert(model) {
        const recipe = new Recipe(model);
        await recipe.save();

        return recipe.toObject();
    }

    async update(model) {
        const recipe = Recipe.findById(model.id);
        if (!recipe) return null;

        recipe.overwrite(model);
        await recipe.save();

        return recipe.toObject();
    }

    async delete(model) {
        const result = await Recipe.findByIdAndDelete(model.id);
        return !!result;
    }
}