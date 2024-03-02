import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session"
// Solo entran si tienen un JWT valido
const router = Router()

router.get("/", checkJwt, getItems)

export { router }