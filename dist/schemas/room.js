"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.classSchema = new mongoose_1.default.Schema({
    users: {
        type: [],
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
//# sourceMappingURL=room.js.map