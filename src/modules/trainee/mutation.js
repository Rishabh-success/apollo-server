import pubsub from '../pubsub';
import constants from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) => {
    const { payLoad: { email, name, password } } = args;
    const { dataSources: { traineeAPI } } = context;
    const addedTrainee = await traineeAPI.createTrainee({ email, name, password });
    const addedTraineeData = JSON.stringify(addedTrainee.data);
    pubsub.publish(constants.subscriptions.TRAINEE_ADDED, { traineeAdded: addedTrainee.data });
    return addedTraineeData;
  },
  updateTrainee: async (parent, args, context) => {
    const {
      payLoad: {
        id, role, name, email, password,
      },
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const updatedTrainee = await traineeAPI.updateTrainee({
      id, name, email, role, password,
    });
    const updatedTraineeData = JSON.stringify(updatedTrainee.data);
    // eslint-disable-next-line max-len
    pubsub.publish(constants.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedTrainee.data });
    return updatedTraineeData;
  },
  deleteTrainee: async (parent, args, context) => {
    const { payLoad: { id } } = args;
    const { dataSources: { traineeAPI } } = context;
    const deletedID = await traineeAPI.deleteTrainee(id);
    const deletedTraineeData = JSON.stringify(deletedID);
    pubsub.publish(constants.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedTraineeData });
    return deletedTraineeData;
  },
};
