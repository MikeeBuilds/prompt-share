import { Scema, model, models } from 'mongoose';

const uSERsCHEMA = NEWsCHEMA({
    email: {
        type: String,
        unique: [true, 'Email already exists!']
    }
})