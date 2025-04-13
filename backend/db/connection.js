const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,  // 30 seconds for server selection
            socketTimeoutMS: 45000,           // 45 seconds for socket timeout
            connectTimeoutMS: 30000,          // 30 seconds for initial connection
            maxPoolSize: 10,                  // Limit connection pool size
            retryWrites: true,               // Enable retry for write operations
            retryReads: true                  // Enable retry for read operations
        });
        console.log('Connected to Database');
        
        // Connection event listeners
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to DB');
        });
        
        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from DB');
        });
        
        // Close connection on process termination
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('Mongoose connection closed due to app termination');
            process.exit(0);
        });
        
    } catch (err) {
        console.error('Database connection error:', err);
        // Exit process with failure if DB connection fails
        process.exit(1);
    }
};

module.exports = connectDB;