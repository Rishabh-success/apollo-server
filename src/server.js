import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { UserAPI, TraineeAPI } from './datasource/index';

class Server {
  constructor(config) {
    this.config = config;
    this.app = Express();
  }

  bootstrap() {
    this.setupRouts();
    return this;
  }

  setupRouts() {
    const { app } = this;
    app.get('/health-check', (req, res) => {
      res.send('I am fine');
    });
    return this;
  }

  setupApollo(schema) {
    const { app } = this;
    this.Server = new ApolloServer({
      ...schema,
      dataSources: () => {
        const userAPI = new UserAPI();
        const traineeAPI = new TraineeAPI();
        return { userAPI, traineeAPI };
      },
      context: ({ req }) => {
        if (req) {
          return { token: req.headers.authorization };
        }
        return {};
      },
    });
    this.Server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.Server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }

  run() {
    const { config: { port } } = this;
    // const { app } = this;
    this.httpServer.listen(port, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
      // eslint-disable-next-line no-console
      console.log(`App is running on port ${port}`);
    });
  }
}
export default Server;
