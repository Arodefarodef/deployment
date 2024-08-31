"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const main_1 = require("./main");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, main_1.mainApp)(app);
const server = app.listen(port, () => {
    console.log("server");
});
process.on("uncaughtException", () => {
    console.log("uncaughtException");
    server.on("connect", () => {
        process.exit(1);
    });
});
process.on("uncaughtException", () => {
    console.log("uncaughtException");
    server.on("connect", () => {
        process.exit(1);
    });
});
