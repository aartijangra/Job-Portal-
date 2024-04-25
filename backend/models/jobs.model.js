// models/job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        contactEmail: {
            type: String,
            required: true
        },
        contactPhone: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Job', JobSchema);
