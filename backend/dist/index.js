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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const KEY = process.env.SECRET;
const prisma = new client_1.PrismaClient();
function createJwt(username) {
    return jsonwebtoken_1.default.sign({ username }, KEY, { expiresIn: "1hr" });
}
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/user/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield prisma.user.findFirst({ where: { username } });
    if (user) {
        res.status(400).send({ msg: "User already exists!" });
    }
    else {
        const newUser = yield prisma.user.create({
            data: { username, password },
        });
        res.status(200).send({ msg: "New User Created" });
    }
}));
app.post("/user/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield prisma.user.findFirst({
        where: { username, password },
    });
    if (user) {
        const token = createJwt(username);
        res.status(200).send({ msg: "User has logged in", username, token });
    }
    else {
        res.status(200).send({ msg: "User does not exist" });
    }
}));
app.get("/allusers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allusers = yield prisma.user.findMany();
    res.status(200).send(allusers);
}));
app.post("/createCourse", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, url } = req.body;
    const alreadyCourse = yield prisma.courses.findFirst({
        where: { title, description },
    });
    if (alreadyCourse) {
        res.status(400).send({ msg: "This course is already created" });
    }
    else {
        const newCourse = yield prisma.courses.create({
            data: { title, description, price, url },
        });
        res.status(200).send({ msg: "Created new course", newCourse });
    }
}));
app.get("/allcourses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allCourses = yield prisma.courses.findMany();
    res.send(allCourses);
}));
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map