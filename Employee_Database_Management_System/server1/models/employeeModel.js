const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empId: { type: Number, required: true, unique: true },
    fullName: { type: String, required: true },
    department: { type: String, required: true },
    salary: { type: Number, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);
