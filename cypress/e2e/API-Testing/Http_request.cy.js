/// <reference types="cypress" />

describe('Weather & Air pollution of jakarta selatan - Test Suite', () => {
    before(() => {
        cy.fixture("data").then((data)=>{
            globalThis.data = data
        })
    });

    const lat = -6.2838
    const lon = 106.8049

    it('5 day weather forecast of Jakarta Selatan ', () => {
        cy.request({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7312fb8bffbc50e0ed545ac06fcc6705`,

        })
        .then((response)=>{
            // Assert status code
            expect(response.status).to.eql(200)
            // Assert response duration
            expect(response.duration).to.not.be.greaterThan(5000)   
            // Assert response body
            expect(response.body).to.have.property('cod', '200');
            expect(response.body).to.have.property('message',0);
            expect(response.body).to.have.property('cnt',40);
            expect(response.body.cod).to.be.a('string');
            expect(response.body.message).to.be.a('number');
            expect(response.body.cnt).to.be.a('number');
            expect(response.body).to.have.nested.property('city.id', 6754916);
            expect(response.body).to.have.nested.property('city.name', 'Rawa Barat');
            expect(response.body).to.have.nested.property('city.country', 'ID');
            expect(response.body).to.have.nested.property('city.coord.lat', lat);
            expect(response.body).to.have.nested.property('city.coord.lon', lon);
            //Assert json-schema
            expect(response.body).to.be.jsonSchema(data.forecast);
        })
    });

    it('current pollution of Jakarta Selatan ', () => {
        cy.request({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=7312fb8bffbc50e0ed545ac06fcc6705`,

        })
        .then((response)=>{
            // Assert status code
            expect(response.status).to.eql(200)
            // Assert response duration
            expect(response.duration).to.not.be.greaterThan(5000)   
            // Assert response body
            expect(response.body.coord.lat).to.be.a('number');
            expect(response.body.coord.lon).to.be.a('number');
            expect(response.body).to.have.nested.property('coord.lat', lat);
            expect(response.body).to.have.nested.property('coord.lon', lon);
            //Assert json-schema
            expect(response.body).to.be.jsonSchema(data.air_pollution);
        })
    });
});