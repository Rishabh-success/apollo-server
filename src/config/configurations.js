import * as dotenv from 'dotenv';

const envVar = dotenv.config().parsed;
const config = {
  PORT: envVar.PORT,
};
export default config;
