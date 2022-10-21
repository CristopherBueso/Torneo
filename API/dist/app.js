"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const escuelaRoutes_1 = __importDefault(require("./routes/escuelaRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
const ringRoutes_1 = __importDefault(require("./routes/ringRoutes"));
const eventoRoutes_1 = __importDefault(require("./routes/eventoRoutes"));
let date = 0;
const multer = require('multer');
const storage = multer.diskStorage({
    filename: function (res, file, cb) {
        date = Date.now();
        const ext = file.originalname.split('.').pop();
        const fileName = date;
        cb(null, `${fileName}.${ext}`);
    }, destination: function (res, file, cb) {
        cb(null, `./public`);
    }
});
const upload = multer({ storage });
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.post('/upload', upload.single('foto'), (req, res) => {
    res.json(date);
});
app.use(express_1.default.static('./public'));
app.use("/", user_routes_1.default);
app.use("/", escuelaRoutes_1.default);
app.use("/", categoriaRoutes_1.default);
app.use("/", ringRoutes_1.default);
app.use("/", eventoRoutes_1.default);
exports.default = app;
