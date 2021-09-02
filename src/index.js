import schema from './modules';
import Server from './server';
import configurations from './config/configurations';

const server = new Server(configurations);
(() => {
  server.bootstrap().setupApollo(schema);
})();
