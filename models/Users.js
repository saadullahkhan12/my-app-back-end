import  mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
    firstname: {   
        type: String,
        
    },
    lastname: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
});

const  Users = mongoose.model('User =>', userSchema)
export default Users ;