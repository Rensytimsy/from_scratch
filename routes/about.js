import express from "express";

const route = express.Router();


route.get("/about", (req, res) => {
    res.render("about");
});

export default route;