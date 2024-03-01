const ApiCheck = (opts) => (req, res, next) => {
    const apiKey = opts.env.ApiKey;
    const headerVal = req.get('X-API-KEY');

    if (apiKey !== headerVal)
        return res.status(401).end();
    
    next();
};

export default ApiCheck;