/* eslint-disable no-unused-vars */
import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constants from '../../lib/constant';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const addedUser = userInstance.createUser(user);
    pubsub.publish(constants.subscriptions.TRAINEE_ADDED, { traineeAdded: addedUser });
    return addedUser;
  },
  updateTrainee: (parent, args, context) => {
    const {
      id, role, name, email,
    } = args;
    const updatedUser = userInstance.updateUser(id, name, email, role);
    pubsub.publish(constants.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedUser });
    return updatedUser;
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deletedID = userInstance.deleteUser(id);
    pubsub.publish(constants.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedID });
    return deletedID;
  },
};
