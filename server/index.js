const express = require('express');
const connectDB = require('./db/dbconfig');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/sim', require('./routes/simRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
