const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/bloggerio', {useNewUrlParser: true}, err => {
    if(err) throw err;
    console.log("Connected.");
});

var UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    dateJoined: Date
});

UserSchema.methods.encryptPassword = async function(pass)
{
    var salt, hash;
    try {
        salt = await bcrypt.genSalt(10);
        hash = await bcrypt.hash(pass, salt);
        return hash;
    }
    catch(ex)
    {
        console.log(ex);
        return null;
    }
}

UserSchema.methods.comparePassword = function(pass, hash)
{
    return bcrypt.compare(pass, hash);
}

var User = module.exports = mongoose.model('User', UserSchema);