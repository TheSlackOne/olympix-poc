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
        this.dbConn.run(`INSERT INTO vulnerabilities(customerIP, name, fileName, patching, description, quickFix) \
                        VALUES('192.168.1.10', 'A val Name', 'A filename', 'patching proposal', 'A description', 'A quickFix')`,
                        [], (err: any) => {
                            if (err) {
                                return console.log(err.message);
                            }
                            // get the last insert id
                            //console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
    };

    public getDbPath = () => {
        return this.dbPath;
    };


    private dbPath: string;
    private dbConn: any;
}
