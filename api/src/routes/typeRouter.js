const { Router } = require("express");

const {
    getTypesHandler
} = require("../handlers/typeHandler");

const typesRouter = Router();

typesRouter.get("/", getTypesHandler);

module.exports = typesRouter ;