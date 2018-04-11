const mapBoxSearch = 'test';

const Joi = require('joi');
const parser = require('parse-address');

module.exports = {
  method: 'POST',
  path: '/hello33',
  config: {
    handler: (request, h) => {
      const parsedAddr = parser.parseLocation(request.payload.address);

      if (!parsedAddr.state || !parsedAddr.city || !parsedAddr.street || !parsedAddr.zip) return request.payload.address;

      const response = await server.inject({
        url: '/mapboxer',
        payload: {
          hi: 'hello'
        },
      });

      return parsedAddr;
    },
    validate: {
      payload: Joi.object({
        address: Joi.string().required(),
      }).unknown(),
    },
  },
};