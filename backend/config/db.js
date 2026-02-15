const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL + 'ai-interview-prep');
        console.log('Database Connected');
    }catch(error){
        console.error('Error Connecting to the Database', error);
        process.exit(1);
    }
}

module.exports = connectDB;