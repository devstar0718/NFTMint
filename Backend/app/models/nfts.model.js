const sql = require("./db.js");
const dbConfig = require("../config/index.js");

// constructor
const Nfts = function (data) {
    this.name = data.name;
    this.ipfs = data.ipfs;
};

Nfts.getLastNft = (result) => {
    let query = "SELECT * FROM nft ORDER BY id DESC LIMIT 1";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return result(err, null);
        }
        result(null, res);
    });
}

Nfts.createNft = (id, name, ipfs,  description, attr1, attr2, result) => {
    let query = `insert into nft (id, name, ipfs,  description, attr1, attr2, created_at, updated_at) values('${id}', '${name}', '${ipfs}',  '${description}', '${attr1}', '${attr2}', '${(new Date()).toISOString().split('T')[0]}', '${(new Date()).toISOString().split('T')[0]}')`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result('success', null);
    })
}



Nfts.getNftsByIds = (id, result) => {
    let query = `SELECT * FROM nft WHERE id = ${id} LIMIT 1`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(res, null);
    });
};

Nfts.getNftAll = (result) => {
    let query = `SELECT * FROM nft ORDER BY id`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(res, null);
    });
};


module.exports = Nfts;
