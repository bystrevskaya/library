const {Client} = require("pg")
const client = new Client({
    "host": "localhost",
    "port": 5432,
    "user": "postgres",
    "password": "***********",
    "database": "Library"
})

client.connect();
const dbQuery = "select ib.issuedate, ib.returndate, s.studentname from issuedbook ib join student s on ib.studentid = s.studentid";
client.query(dbQuery, (err, res) => {
    if (err) throw err;
    else getMaliciousReader(res.rows);
    client.end;
    }
);

function getMaliciousReader(issuedBooks) {
    let maliciousReaders = [];
    issuedBooks.map(issued => {
        if (issued['returndate'] == null) issued['returndate'] = new Date();
        let diff = new Date(issued['returndate'].getTime() - issued['issuedate'].getTime());
        if (diff.getUTCMonth() >= 2 & !(maliciousReaders.includes(issued['studentname']))) maliciousReaders.push(issued['studentname']);
    });
    maliciousReaders.map(reader => console.log(reader));
  }

