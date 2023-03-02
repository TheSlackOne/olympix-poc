import sqlite3 from "sqlite3";
import { BadPath } from "../exceptions/exceptions-db"
import { IVulnerability } from "../business/interfaces";

export class DbManager {
    public constructor(dbPath: string) {
        if (!dbPath)
            throw new BadPath();
        this.dbPath = dbPath;
        this.openDb();
    }

    public openDb = async () => {
        this.dbConn = new sqlite3.Database(this.dbPath);
    };

    //ToDo: Too coupled. (With more time) Decouple DB layer from vulnerability information.
    public insert = async (vulnerabilityList: Array<IVulnerability>) => {
        vulnerabilityList.forEach(vuln => {
            // ToDo: Prepare transaction. Do not spam the DB!
            this.dbConn.run(`INSERT INTO vulnerabilities(customerIP, name, fileName, patching, description, quickFix) \
                            VALUES('192.168.1.10', '${vuln.name}', '${vuln.fileName}', '${vuln.patching}', '${vuln.description}', '${vuln.quickFix}')`,
                            [], (err: any) => {
                                if (err) {
                                    return console.log(err.message);
                                }
                            });
        });
        console.log("Saved to DB successfully.");
    };

    public getDbPath = () => {
        return this.dbPath;
    };


    private dbPath: string;
    private dbConn: any;
}
