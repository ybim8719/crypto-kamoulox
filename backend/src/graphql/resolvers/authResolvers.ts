import userSchema from '../../models/mongoose/userSchema';
import { CreateUserInput } from '../../models/authData';
import { Request } from 'express';
module.exports = {
    createUser: async function (userInput: CreateUserInput, req: Request) {
        userSchema.findOne({email:userInput.email});
        
    }
}