import { Request, Response } from "express";

export const processReport = async (req: Request, res: Response) => {
    const jsonRes = JSON.parse(JSON.parse(req.body.res));
    console.log("jsonRes[bugs-list]:", jsonRes["bugs-list"]);
    res.status(200).end();
}
