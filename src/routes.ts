import { Router } from "express"

const routes = Router();

routes.get("/", (request, response) => {
    response.send({ msg: "Ok" });
})

export default routes;