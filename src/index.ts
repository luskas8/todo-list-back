import "dotenv/config";
import express from "express"
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 1337, () => {
    console.log("Running...");
});