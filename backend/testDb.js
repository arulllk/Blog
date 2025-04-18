// testDB.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arulllk:1234@nodeexpressprojects.0zp0qgr.mongodb.net/BLOG?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ Error connecting:', err));
