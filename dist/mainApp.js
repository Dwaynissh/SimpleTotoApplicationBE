"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const enums_1 = require("./utils/enums");
const mainError_1 = require("./error/mainError");
const handleError_1 = require("./error/handleError");
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const mainApp = (app) => {
    try {
        app.use("/", todoRouter_1.default);
        app.get("/", (req, res) => {
            try {
                return res.status(enums_1.http.Ok).json({
                    message: "Todo Application API Welcome to our Default Route ⭐",
                });
            }
            catch (error) {
                return res.status(enums_1.http.Bad_Request).json({
                    message: "Error Loading Default Route",
                });
            }
        });
        app.all("*", (req, res, next) => {
            next(new mainError_1.mainError({
                name: `Route Error`,
                message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
                status: enums_1.http.Bad_Request,
                success: false,
            }));
        });
        app.use(handleError_1.handleError);
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
