import {
    addNewUser,
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';

const routes = (app) => {
    app.route('/user').get(getAllUsers).post(addNewUser);

    app.route('/user/:userId')
        .get(getUserByID)
        .put(updateUser)
        .delete(deleteUser);
};

export default routes;
