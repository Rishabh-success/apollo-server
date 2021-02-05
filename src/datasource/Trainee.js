import { RESTDataSource } from 'apollo-datasource-rest';
import configurations from '../config/configurations';

export default class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configurations.serviceUrl}/api`;
  }

  willSendRequest(request) {
    request.headers.set('authorization', this.context.token);
  }

  getTrainees() {
    return this.get('/trainee');
  }

  createTrainee(payLoad) {
    return this.post('/trainee', payLoad);
  }

  updateTrainee(payLoad) {
    return this.put('/trainee', payLoad);
  }

  deleteTrainee(id) {
    return this.delete(`/trainee?id=${id}`);
  }
}
