import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name',
    },
    lastName: {
        type: String,
        required: 'Enter a last name',
    },
    password: {
        type: String,
        required: 'Enter a password',
    },
    email: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});
