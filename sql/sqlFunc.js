const mysql = require('mysql');
const db = require('./dbConfig');

const pool = mysql.createPool(db);

module.exports = class dbFunc {
    query (sql, val) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
                conn.query(sql, val, (err, rows) => {
                    if (err) {
                        console.log(err);
                        reject(err)
                    }
                    resolve(rows);
                    conn.release();
                });
            });
        })
    }

    // json格式
    writeJson(res, code = 200, msg = 'ok', data = null) {
        let obj = {code, msg, data};
        if (!data) {
            delete obj.data;
        }
        res.send(obj);
    }

    // 增
    add(table, valArr) {
        const val = valArr.join(',')
        const sql = `insert into ${table} values (${val})`
        return this.query(sql);
    }
    // 删
    // 查
    // 改
};