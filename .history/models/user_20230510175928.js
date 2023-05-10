import { Scema, model, models } from 'mongoose';

const uSERsCHEMA = NEWsCHEMA({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Please enter your email!'],
    },
    username: {
        type: String,
        required
    }
})