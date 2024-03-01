class Env {
	get ApiKey() {
		return process.env.API_KEY;
	}
	get SqlitePath() {
		return process.env.SQLITE_PATH;
	}
	get Port() {
		return parseInt(process.env.PORT);
	}
	get MongoDB() {
		return process.env.MONGODB;
	}
}

export default Env;
