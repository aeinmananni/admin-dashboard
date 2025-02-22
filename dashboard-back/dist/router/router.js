"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const subMenuItem_1 = __importDefault(require("../start/subMenuItem"));
exports.default = (app) => {
    app.use(express_1.default.json());
    app.use((0, compression_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use("/api/subMenu", subMenuItem_1.default);
};
