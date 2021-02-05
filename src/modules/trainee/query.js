import user from '../../service/user';

export default {

  // getAllTrainees: () => user.getAllUsers(),
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees();
    return response.record;
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
};
