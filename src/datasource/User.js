import { RESTDataSource } from 'apollo-datasource-rest';
import configurations from '../config/configurations';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configurations.serviceUrl}/api/user`;
  }
  willSendRequest(request) {
    request.headers.set('authorization', this.context.token);
  }
loginUser(payLoad) {
    return this.post('/login', payLoad);
  }

  getMe() {
    return this.get('/me');
  }
}
