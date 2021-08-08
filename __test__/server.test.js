'use strict';
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('Test API Server', ()=> {

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd'); 
        expect(response.status).toEqual(404);
    });

    
    it('handles my internal server errors', async () => {
        const response = await request.post('/badrequest'); 
        expect(response.status).toEqual(500);
    });
    
    it('get data from /data ', async () => {
        const response = await request.get('/data'); 
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); 
    });
    
    it('/ route works', async () => {
        const response = await request.get('/'); 
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('The server is working');
    });


});