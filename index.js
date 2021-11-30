const express = require('express')
const app = express()
const port = process.env.PORT | 3000

const cities = require('./assets/city.list.json')

app.get('/:city', (req, res) => {
    const MAX_RESULTS = 5;
    let results = 0;
    const cityList = cities.filter((x) => {

        if (x.name.toLowerCase().startsWith(req.params.city.toLocaleLowerCase()) && results < MAX_RESULTS) {
            results++;
            return true;
        }
        return false;
    });
    
    res.json(cityList);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})