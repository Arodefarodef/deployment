"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodo = exports.getTodo = exports.deleteTodo = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../utils/model/todo"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, projectname } = req.body;
        const todO = yield todo_1.default.create({ title, description, projectname });
        res.status(200).json({
            status: 200,
            message: "Todo created",
            data: todO,
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message,
        });
    }
});
exports.createTodo = createTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todO = yield todo_1.default.findByIdAndDelete(id);
        res.status(200).json({
            status: 200,
            message: "Todo deleted",
            data: todO,
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message,
        });
    }
});
exports.deleteTodo = deleteTodo;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todO = yield todo_1.default.findById(id);
        res.status(200).json({
            status: 200,
            message: "Get one Todo",
            data: todO,
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message,
        });
    }
});
exports.getTodo = getTodo;
const getAllTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todO = yield todo_1.default.find();
        res.status(200).json({
            status: 200,
            message: "getting All Todo",
            data: todO,
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message,
        });
    }
});
exports.getAllTodo = getAllTodo;
