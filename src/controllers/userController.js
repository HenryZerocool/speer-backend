import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel.js';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    logger(req);
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const getAllUsers = (req, res) => {
    logger(req);
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const getUserByID = (req, res) => {
    logger(req);
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const updateUser = (req, res) => {
    logger(req);
    User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true },
        (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        }
    );
};

export const deleteUser = (req, res) => {
    logger(req);
    User.remove({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted user' });
    });
};

const logger = (req) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
};
