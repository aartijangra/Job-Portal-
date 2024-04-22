require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs.route');
const cors = require("cors")

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(cors(
    {
        origin: "*"
    }
))

// MongoDB Configuration
const db = process.env.MONGO_URI


mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
