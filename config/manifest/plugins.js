'use strict';

const async = require('async');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const envConfig = require('../environments/all');

module.exports.init = server => {
    return new Promise((resolve, reject) => {
        async.series({
            good(done) {
                server.register({
                    register: require('good')
                }, done);
            },
            blipp(done) {
                server.register({
                    register: require('blipp'),
                    options: {
                        showStart: envConfig.log.showRouteAtStart,
                        showAuth: true
                    }
                }, done);
            },
            boom(done) {
                server.register({
                    register: require('hapi-boom-decorators')
                }, done);
            },
            swagger(done) {
                const options = {
                    info: {
                        'title': 'Test API Documentation',
                        'version': '1.0',
                    }
                };

                server.register([
                    Inert,
                    Vision,
                    {
                        'register': HapiSwagger,
                        'options': options
                    }], done);
            }
        }, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
};