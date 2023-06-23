import express, { Request, Response } from "express";

import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors());
app.get("/health", (_req: Request, res: Response) => res.send("I'am alive!"));


export default app;