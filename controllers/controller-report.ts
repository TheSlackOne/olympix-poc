import { Request, Response } from "express";

export const reportController = async (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).end();
}
