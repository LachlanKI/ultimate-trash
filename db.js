const spicedPg = require('spiced-pg');
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const nothingSpecial = require('./garbage_file.json');
    db = spicedPg(`postgres:${nothingSpecial.user}:${nothingSpecial.pass}@localhost:5432/scramble`);
}

function insertScore(username, score) {
    return db.query(`INSERT INTO scores (username, score) VALUES ($1, $2)`,
                    [username, score]);
}

module.exports.insertScore = insertScore;

function getTop20Scores() {
    return db.query(`SELECT username, score
                     FROM scores
                     ORDER BY score DESC
                     LIMIT 20`).then(result => result.rows);
}

module.exports.getTop20Scores = getTop20Scores;
