const https = require('https');

class Service {
    async makeRequest(url) {
        return new Promise((resolve, reject) => {
            https.get(url, response => {
                response.on('data', data => resolve(JSON.parse(data)));
                response.on('error', reject);
            })
        });
    }

    async getPlanets(url) {
        const result = await this.makeRequest(url);

        return {
            name: result.name,
            surfaceWater: result.surface_water,
            appearedIn: result.films.length,
            terrain: result.terrain
        };
    }

    async getPlanetsAndFilms(url) {
        const result = await this.makeRequest(url);
        return {
            name: result.name,
            terrain: result.terrain,
            surfaceWater: result.surface_water,
            films: result.films
        }
    }

    async getPlanetNotFound(url) {
        const result = await this.makeRequest(url);
        return {
            error: result.detail
        }
    }
}

module.exports = Service;