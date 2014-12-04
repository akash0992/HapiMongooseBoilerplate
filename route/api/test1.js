"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        method: 'GET',
        path: '/api/test/test1',
        config: {
            description: 'Get Test-1',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'I am Test-1 API'});
            }
        }
    },
    {
        method: 'POST',
        path: '/api/test/test2',
        config: {
            description: 'Get Test-2',
            notes: 'Yes, I am doing testing',
            tags: ['api'],
            handler: function (request, reply) {
                reply({status: 'I am Test-2 API'});
            }
        }
    }
];