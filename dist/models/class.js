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
exports.ClassModels = exports.ClassModel = void 0;
const mongoose_1 = require("mongoose");
const room_1 = require("../schemas/room");
const data_1 = __importDefault(require("../test/data"));
exports.ClassModel = (0, mongoose_1.model)('Class', room_1.classSchema);
const seedClass = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.ClassModel.deleteMany();
    return yield exports.ClassModel.insertMany(data_1.default.classes);
});
const getAllClasses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.ClassModel.find();
});
exports.ClassModels = {
    seedClass,
    getAllClasses,
};
//# sourceMappingURL=class.js.map