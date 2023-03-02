import { Request, Response } from "express";
import { DbManager } from "../db/db-manager";
import { IVulnerability } from "./interfaces";

export const processBugList = async (bugList: Array<any>) => {
    let vulnerabilityList = new Array<IVulnerability>;
    bugList.forEach(bug => {
        let vulnerability: IVulnerability = {
            name: bug["vuln_name"],
            fileName: bug["file_name"],
            patching: bug["patching"],
            description: bug["description"],
            quickFix: bug["quick_fix"],
        };
        vulnerabilityList.push(vulnerability);
    });
    if (vulnerabilityList.length)
        console.log(vulnerabilityList);
    console.log("Connecting to DB");
    let db = new DbManager("/home/harry/workspace/olympix/db/reports.db");
    if (db)
        console.log("Connected to DB:", db.getDbPath());
    db.insert(vulnerabilityList);
}

export const processReport = async (req: Request, res: Response) => {
    const jsonRes = JSON.parse(JSON.parse(req.body.res));
    processBugList(jsonRes["bugs-list"]);
    res.status(200).end();
}
