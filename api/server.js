const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const restricted = require("../auth/restricted-middleware")
const checkRole = require('../auth/check-role-middleware')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users",restricted, checkRole("admin"), usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
