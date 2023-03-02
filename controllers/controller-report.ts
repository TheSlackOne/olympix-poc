import { Request, Response } from "express";
import { processReport } from "../business/reports";

export const reportController = async (req: Request, res: Response) => {
    // console.log(req.body);
    // res.status(200).end();
    await processReport(req, res);
}
