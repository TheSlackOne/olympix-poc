import { Request, Response } from "express";

export const processReport = async (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).end();
}
