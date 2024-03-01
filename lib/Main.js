import mongoose from 'mongoose';

export default class Main {
    constructor(opts) {
        this.env = opts.env;
        this.server = opts.server;
        this.recipesController = opts.recipesController;
    }
    
    async run() {
        await mongoose.connect(this.env.MongoDB);
        
        this.recipesController.addTo(this.server);
        
        await this.server.listen(this.env.Port, () => console.log(`Listening on port ${this.env.Port}`));
    }
}
