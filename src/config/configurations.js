import { config } from 'dotenv';

config();
const envVars = process.env;
const configurations = Object.freeze({
  port: envVars.PORT,
});
export default configurations;
