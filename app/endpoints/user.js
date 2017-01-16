'use strict';

const handler = require('../handlers/user');
const userSchema = require('../schemas/user');

exports.register = (server, options, next) => {
    server.route([
        {
            method : 'POST',
            path   : '/user',
            config : {
                description : 'Create user',
                notes       : 'Creates a user',
                tags        : [ 'api' ],
                plugins: {
                    'hapi-swagger': {
                        payloadType: 'form'
                    }
                },
                handler     : handler.create,
                validate: {
                    payload: userSchema
                }
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name : 'user-routes'
};