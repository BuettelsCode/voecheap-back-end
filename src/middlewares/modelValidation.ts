import { NextFunction } from "express";
import { customerPackgeSchema } from "../models/packsModel";
import { Request, Response } from "express";

export function ValidateCustomerPackge(req: Request, res: Response, next: NextFunction){
    const user = req.body;
    const { error } = customerPackgeSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
};