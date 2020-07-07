import { Router } from "express";
import User from "./model/user.model";


const routes = Router();

routes.post("/", (req, res) => {
    const user = User.create(req.body)
    res.send(user)
});

routes.get("/", async (req, res) => {
    const a = await User.find()
    res.send(a)
});

export default routes;
