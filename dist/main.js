"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const mainApp = (app) => {
    app.use("/", todoRouter_1.default);
    try {
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "Good job!",
                    status: 200,
                });
            }
            catch (error) {
                res.status(400).json({
                    status: 400,
                    message: error.message,
                });
            }
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
