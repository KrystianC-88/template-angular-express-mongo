import { Router } from "express";
import { envConfig } from "../envConfig";

const router = Router();

router.get("/env", (req, res) => {
    res.send({
        "envConfig": envConfig
    })

});

export default router