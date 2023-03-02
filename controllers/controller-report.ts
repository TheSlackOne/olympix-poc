import { Request, Response } from "express";
import { processReport } from "../business/reports";

export const reportController = async (req: Request, res: Response) => {
    await processReport(req, res);
}
