import { Scema, model, models } from 'mongoose';

const uSERsCHEMA = NEWsCHEMA({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Please enter your email!'],
    },
    username: {
        type: String,
        required: [true, 'Username is require!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    
})