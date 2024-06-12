import express from "express";
import Users from "../models/users.js"
const routes = express.Router();

routes.get("/", async(req, res, next) => {
    res.render("login");
});

export default routes;