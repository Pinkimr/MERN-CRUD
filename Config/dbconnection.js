const mongoose = require('mongoose');

let connectDb = async () => {

    const middleware = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
    mongoose.connect(process.env.MONGO_URL, middleware, (err, client) => {
        if (err) {
            console.log('0. Error while connecting to the database =', err);
        }
    });

    mongoose.connection.on('connected', () => {
        console.info('1. Database Connected');
    });

    mongoose.connection.on('err', (err) => {
        console.error('0. Database with err=', err);
    });

    mongoose.connection.on('disconnected', (err) => {
        console.error('2. Db Disconnected=', err);
    });

}


module.exports = {
    connectDb
};
