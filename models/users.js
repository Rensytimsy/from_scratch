import mongoose from "mongoose";


const Users = mongoose.Schema({
    first_name: {
        type: String,
        requred: true
    },
    second_name: {
        type: String,
        requred: true
    },
    user_email: {
        type: String,
        requred: true
    },
    user_password: {
        type: String,
        requred: true
    },
});


export default mongoose.model("newUsers", Users);