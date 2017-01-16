'use strict';

var _ = require('lodash');

module.exports.create = (request, response) => {
    response(null,  {
        'result': _.omit(request.payload, ['password', 'nir'])
    });
};