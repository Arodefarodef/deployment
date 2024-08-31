"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const todoModel = new mongoose_1.Schema({
    title: {
        type: String,
    },
    projectname: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_2.model)("todos", todoModel);
