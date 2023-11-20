const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    STORE_URL: Joi.string().description('shopify stroe url'),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    STOREFRONT_ACCESS_TOKEN: Joi.string()
      .required()
      .description('shopifyAccessToken'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  storeURL: envVars.STORE_URL,
  shopifyAccessToken: envVars.STOREFRONT_ACCESS_TOKEN,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      user: envVars.MONGODB_USER,
      pass: envVars.MONGODB_PASS,
    },
  },
};
