
import { ValidateCustomerPackge } from "../middlewares/modelValidation";
import { getPacks, postPack } from "../controllers/packsControllers";
import { Router } from "express";

const packsRouter = Router();

packsRouter
    .get("/packs", getPacks)
    .post("/client/:packgeId", ValidateCustomerPackge, postPack);

export default packsRouter;