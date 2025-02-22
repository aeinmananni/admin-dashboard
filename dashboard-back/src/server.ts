import express from "express";
import "dotenv-safe/config";
const app = express();
import("./router/router").then((router) => router.default(app));
const port = process.env.PORT || 3030;
app.listen(port,() => console.log(`Litening On Port :${port}`));