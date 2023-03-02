import sqlite3 from 'sqlite3';

export const openDb = async () => {
    let db = new sqlite3.Database('./reports.db');
}
