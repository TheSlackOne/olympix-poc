import sqlite3 from "sqlite3";
import { BadPath } from "../exceptions/exceptions-db"

export class DbManager {
    public constructor(dbPath: string) {
        if (!dbPath)
            throw new BadPath();
        this.dbPath = dbPath;
    }

    public openDb = async () => {
        this.dbConn = new sqlite3.Database(this.dbPath);
    };

    public execute = async (query: string) => {
        this.dbConn.serialize(() => {
            this.dbConn.run(query);
        });
    };

    private dbPath: string;
    private dbConn: any;
}
