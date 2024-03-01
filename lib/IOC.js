import awilix from 'awilix';

import Env from './Env.js';
import RecipeRepository from './data/RecipeRepository.js';
import Main from './Main.js';
import Server from './Server.js';
import RecipeController from './controllers/RecipesController.js';
import ApiCheck from './middleware/ApiCheck.js';

const IOC = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
    strict: true,
});
IOC.register({
    env: awilix.asClass(Env),
    recipes: awilix.asClass(RecipeRepository),
    main: awilix.asClass(Main),
    server: awilix.asClass(Server),
    recipesController: awilix.asClass(RecipeController),
    apiCheck: awilix.asFunction(ApiCheck)
});

export default IOC;