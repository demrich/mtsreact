const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    username:  {
        type: String, 
                required: true, 
                unique: true, 
                match: /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/
            },
    password:  {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);